// Alpha-maskiert den weißen/cremen Hintergrund von hero-tower.png transparent.
// Output ersetzt das Eingabebild in-place.

import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

const TARGET = 'public/images/hero-tower.png';

const input = await readFile(TARGET);
const meta = await sharp(input).metadata();
console.log(`Source: ${meta.width}x${meta.height}, ${(input.length / 1024).toFixed(0)} KB`);

const { data, info } = await sharp(input).removeAlpha().raw().toBuffer({ resolveWithObject: true });

const out = Buffer.alloc(info.width * info.height * 4);
for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  out[j] = r;
  out[j + 1] = g;
  out[j + 2] = b;
  // Luminanz → Alpha. Helle Pixel werden transparent, Linien bleiben.
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  let alpha;
  if (lum >= 235) alpha = 0;
  else if (lum <= 90) alpha = 255;
  else alpha = Math.round(((235 - lum) / 145) * 255);
  out[j + 3] = alpha;
}

const result = await sharp(out, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .resize({ width: 1400, withoutEnlargement: true })
  .png({ compressionLevel: 9, effort: 9 })
  .toBuffer();

await writeFile(TARGET, result);
const m = await sharp(result).metadata();
console.log(`Output: ${m.width}x${m.height}, ${(result.length / 1024).toFixed(0)} KB`);
