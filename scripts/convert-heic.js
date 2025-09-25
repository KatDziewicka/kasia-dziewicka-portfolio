// scripts/convert-heic.js
const fs = require('fs/promises');
const path = require('path');
const fg = require('fast-glob');
const convert = require('heic-convert');
const sharp = require('sharp');

const INPUT_GLOB = 'assets/heic/**/*.{heic,HEIC}';
const OUT_DIR = 'public/images';
const SIZES = [480, 800, 1200, 2000]; // responsive widths to generate

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function processFile(file) {
  try {
    const inputBuffer = await fs.readFile(file);

    // 1) decode HEIC => JPEG buffer (heic-convert)
    const jpegBuffer = await convert({
      buffer: inputBuffer, // the HEIC buffer
      format: 'JPEG',
      quality: 1.0 // 0..1 (1.0 = best quality before sharp compresses)
    });

    const baseName = path.basename(file, path.extname(file)); // e.g. IMG_1234
    await fs.writeFile(path.join(OUT_DIR, `${baseName}.jpg`), jpegBuffer);

    // 2) produce an optimized full-res WebP (fallback)
    await sharp(jpegBuffer)
      .withMetadata() // keeps orientation, etc.
      .webp({ quality: 85 })
      .toFile(path.join(OUT_DIR, `${baseName}.webp`));

    // 3) produce responsive WebP sizes
    await Promise.all(SIZES.map(async (w) => {
      const outPath = path.join(OUT_DIR, `${baseName}-${w}.webp`);
      await sharp(jpegBuffer)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outPath);
    }));

    // optional: also produce AVIF (smaller, modern browsers)
    await sharp(jpegBuffer)
      .avif({ quality: 50 })
      .toFile(path.join(OUT_DIR, `${baseName}.avif`));

    console.log('✅', file, '→', baseName);
  } catch (err) {
    console.error('✖ error processing', file, err);
  }
}

async function run() {
  await ensureDir(OUT_DIR);
  const files = await fg([INPUT_GLOB]);
  if (!files.length) {
    console.log('No HEIC files found. Skipping conversion.');
    return;
  }
  for (const file of files) {
    await processFile(file);
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
