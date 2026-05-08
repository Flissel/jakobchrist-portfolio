// Extrahiert die Pencil-Linien aus dem Original-PNG (Bild 1) und maskiert
// den cremefarbenen Hintergrund über Luminanz transparent — das Resultat
// kann nahtlos über jede Hintergrundfarbe gelegt werden, ohne sichtbares
// Rechteck.

import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

const SRC = 'C:\\Users\\User\\Downloads\\ChatGPT Image May 8, 2026, 02_36_48 PM (1).png';
const DST = 'public/images/hero-skyline.png';

const input = await readFile(SRC);
const meta = await sharp(input).metadata();
console.log(`Source: ${meta.width}x${meta.height}`);

// Tighter Crop: bottom 38% — der eigentliche Skyline-Streifen ohne den
// oberen Detail-Sketch und mit weniger leerem Himmel.
const top = Math.round(meta.height * 0.62);
const height = meta.height - top;

const cropped = await sharp(input)
  .extract({ left: 0, top, width: meta.width, height })
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
  // Luminanz als Alpha: dunkle Pixel (Linien) bleiben, helle (Crème-Papier)
  // werden transparent. Sanfter Übergang zwischen 100 und 225, damit Anti-
  // Aliasing der Linien erhalten bleibt.
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  let alpha;
  if (lum >= 225) alpha = 0;
  else if (lum <= 100) alpha = 255;
  else alpha = Math.round(((225 - lum) / 125) * 255);
  out[j + 3] = alpha;
}

const result = await sharp(out, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .resize({ width: 2200, withoutEnlargement: true })
  .png({ compressionLevel: 9, effort: 9 })
  .toBuffer();

await writeFile(DST, result);
const m = await sharp(result).metadata();
console.log(`Output: ${DST}, ${m.width}x${m.height}, ${(result.length / 1024).toFixed(0)} KB`);
