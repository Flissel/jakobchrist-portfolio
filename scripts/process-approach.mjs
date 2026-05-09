// Bereitet die drei Pfeiler-Bilder (Entwurf, Technik, Gestaltung) auf:
// → Crop auf 4:3, Alpha-Mask via Luminanz (Crème-Papier wird transparent),
//   max 1400 px breit, PNG.

import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'node:fs/promises';

const DOWNLOADS = 'C:\\Users\\User\\Downloads';
const OUT = 'public/images/approach';

await mkdir(OUT, { recursive: true });

async function processToTransparent(srcName, outName, opts = {}) {
  const inputPath = `${DOWNLOADS}\\${srcName}`;
  const input = await readFile(inputPath);
  const meta = await sharp(input).metadata();
  console.log(`${srcName} → ${meta.width}x${meta.height}`);

  // Optional crop, dann max 1400 wide
  let pipeline = sharp(input).rotate();
  if (opts.extract) {
    pipeline = pipeline.extract(opts.extract);
  }
  pipeline = pipeline.resize({ width: 1400, withoutEnlargement: true });

  // Flatten gegen WEISS (nicht Schwarz!), damit transparente Bereiche der
  // Quelle als hell erscheinen und vom Luminanz-Mask transparent gemacht werden.
  pipeline = pipeline.flatten({ background: '#ffffff' });

  const { data, info } = await pipeline.removeAlpha().raw().toBuffer({ resolveWithObject: true });

  const out = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    out[j] = r;
    out[j + 1] = g;
    out[j + 2] = b;
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    let alpha;
    if (lum >= 230) alpha = 0;
    else if (lum <= 90) alpha = 255;
    else alpha = Math.round(((230 - lum) / 140) * 255);
    out[j + 3] = alpha;
  }

  const buffer = await sharp(out, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png({ compressionLevel: 9, effort: 9 })
    .toBuffer();

  const outPath = `${OUT}/${outName}`;
  await writeFile(outPath, buffer);
  const finalMeta = await sharp(buffer).metadata();
  console.log(`  → ${outName}: ${finalMeta.width}x${finalMeta.height}, ${(buffer.length / 1024).toFixed(0)} KB`);
}

// Entwurf — Detail-Sketch + Schwung aus Bild 1, mittig-oben, 4:3-Crop
const img1 = await readFile(`${DOWNLOADS}\\ChatGPT Image May 8, 2026, 02_36_48 PM (1).png`);
const m1 = await sharp(img1).metadata();
{
  const w = Math.round(m1.width * 0.62);
  const h = Math.round(w * 0.75);
  await processToTransparent(
    'ChatGPT Image May 8, 2026, 02_36_48 PM (1).png',
    'entwurf.png',
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

// Technik — Brücken-/Tragwerks-Skizze
await processToTransparent('ChatGPT Image May 8, 2026, 02_36_48 PM (2).png', 'technik.png');

// Gestaltung — Innenraum-Sketch mit Bogen, Baum, Stuhl
await processToTransparent('ChatGPT Image May 8, 2026, 02_36_48 PM (3).png', 'gestaltung.png');

console.log('\nDone.');
