// Verkleinert und re-komprimiert alle Bilder in public/images.
// JPG → max 1920 px Breite, mozjpeg q85.
// PNG → max 1920 px Breite, compressionLevel 9 (Transparenz bleibt erhalten).

import sharp from 'sharp';
import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(import.meta.url), '..', '..', 'public', 'images');
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 85;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

const isJpeg = (p) => /\.jpe?g$/i.test(p);
const isPng = (p) => /\.png$/i.test(p);

let totalBefore = 0;
let totalAfter = 0;
let count = 0;

for await (const path of walk(ROOT)) {
  if (!isJpeg(path) && !isPng(path)) continue;

  // Erst komplett in Buffer einlesen, damit sharp den File-Handle freigibt,
  // bevor wir an dieselbe Datei zurückschreiben (Windows-Lock-Problem).
  const input = await readFile(path);
  const before = input.length;
  const meta = await sharp(input).metadata();

  let pipeline = sharp(input).rotate(); // EXIF-Orientierung anwenden
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  pipeline = isJpeg(path)
    ? pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    : pipeline.png({ compressionLevel: 9, effort: 9 });

  const buffer = await pipeline.toBuffer();
  await writeFile(path, buffer);

  const after = (await stat(path)).size;
  totalBefore += before;
  totalAfter += after;
  count++;

  const rel = path.split('public').pop().replace(/\\/g, '/');
  const ratio = ((1 - after / before) * 100).toFixed(0);
  const status = after < before ? '↓' : '=';
  console.log(
    `${status} ${rel.padEnd(60)} ${(before / 1024).toFixed(0).padStart(6)} KB → ${(after / 1024).toFixed(0).padStart(6)} KB  (${ratio}%)`
  );
}

console.log(
  `\nDone — ${count} files, ${(totalBefore / 1024 / 1024).toFixed(1)} MB → ${(totalAfter / 1024 / 1024).toFixed(1)} MB ` +
    `(saved ${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`
);
