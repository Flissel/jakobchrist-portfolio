// Bereitet die drei Pfeiler-Bilder (Entwurf, Technik, Gestaltung) auf:
// → flatten auf Site-Hintergrundfarbe, JPEG q88, max 1400 px breit.

import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'node:fs/promises';

const DOWNLOADS = 'C:\\Users\\User\\Downloads';
const OUT = 'public/images/approach';
const BG = '#f5f2ec';

await mkdir(OUT, { recursive: true });

async function process(srcName, outName, opts = {}) {
  const input = await readFile(`${DOWNLOADS}\\${srcName}`);
  const meta = await sharp(input).metadata();
  console.log(`${srcName} → ${meta.width}x${meta.height}`);

  let pipeline = sharp(input).rotate();

  if (opts.extract) {
    pipeline = pipeline.extract(opts.extract);
  }

  const buffer = await pipeline
    .resize({ width: 1400, withoutEnlargement: true })
    .flatten({ background: BG })
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();

  const outPath = `${OUT}/${outName}`;
  await writeFile(outPath, buffer);
  const finalMeta = await sharp(buffer).metadata();
  console.log(`  → ${outName}: ${finalMeta.width}x${finalMeta.height}, ${(buffer.length / 1024).toFixed(0)} KB`);
}

// Entwurf — Detail-Sketch + Schwung aus Bild 1, mittig-oben.
// 4:3-Ausschnitt, damit das Bild dieselbe Aspect-Ratio bekommt wie die
// anderen beiden Pfeiler-Bilder.
const img1 = await readFile(`${DOWNLOADS}\\ChatGPT Image May 8, 2026, 02_36_48 PM (1).png`);
const m1 = await sharp(img1).metadata();
{
  const w = Math.round(m1.width * 0.62);
  const h = Math.round(w * 0.75); // 4:3
  await process(
    'ChatGPT Image May 8, 2026, 02_36_48 PM (1).png',
    'entwurf.jpg',
    {
      extract: {
        left: Math.round(m1.width * 0.10),
        top: Math.round(m1.height * 0.04),
        width: w,
        height: h,
      },
    }
  );
}

// Technik — Brücke / Tragwerk
await process('ChatGPT Image May 8, 2026, 02_36_48 PM (2).png', 'technik.jpg');

// Gestaltung — Innenhof mit Bogen, Baum, Stuhl
await process('ChatGPT Image May 8, 2026, 02_36_48 PM (3).png', 'gestaltung.jpg');

console.log('\nDone.');
