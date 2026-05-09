// Extrahiert den Turm-Sketch aus dem rechten Teil von hero.png und macht
// den cremefarbenen Hintergrund transparent. Output: hero-tower.png

import sharp from 'sharp';
import { readFile, writeFile, unlink } from 'node:fs/promises';

const SRC = 'public/images/hero.png';
const DST = 'public/images/hero-tower.png';

const input = await readFile(SRC);
const meta = await sharp(input).metadata();
console.log(`Source: ${meta.width}x${meta.height}`);

// Rechte ~52% — der Turm-Sketch mit Konstruktionslinien
const left = Math.round(meta.width * 0.48);
const width = meta.width - left;

const cropped = await sharp(input)
  .extract({ left, top: 0, width, height: meta.height })
  .removeAlpha();

const { data, info } = await cropped.raw().toBuffer({ resolveWithObject: true });

const out = Buffer.alloc(info.width * info.height * 4);
for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  out[j] = r;
  out[j + 1] = g;
  out[j + 2] = b;
  // Luminanz → Alpha. Pencil-Linien bleiben, Crème-Papier wird transparent.
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  let alpha;
  if (lum >= 230) alpha = 0;
  else if (lum <= 90) alpha = 255;
  else alpha = Math.round(((230 - lum) / 140) * 255);
  out[j + 3] = alpha;
}

const result = await sharp(out, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .resize({ width: 1600, withoutEnlargement: true })
  .png({ compressionLevel: 9, effort: 9 })
  .toBuffer();

await writeFile(DST, result);
const m = await sharp(result).metadata();
console.log(`Output: ${DST}, ${m.width}x${m.height}, ${(result.length / 1024).toFixed(0)} KB`);

// Original mit Typografie nicht mehr nötig — wir nutzen nur den Turm
await unlink(SRC);
console.log('Removed source: ' + SRC);
