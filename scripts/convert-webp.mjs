#!/usr/bin/env node
/**
 * BAYTOUKA (بيتك) — Product Image WebP Conversion Utility
 * Converts JPEG/PNG product images in assets/products/ to optimized .webp siblings.
 * Usage:
 *   npm run convert-webp
 *   (Uses 'sharp' if installed, or logs instructions to install sharp for batch WebP generation)
 */
import { readdirSync, existsSync } from 'node:fs';
import { join, extname, basename } from 'node:path';

const PRODUCTS_DIR = join(process.cwd(), 'assets', 'products');

async function run() {
  if (!existsSync(PRODUCTS_DIR)) {
    console.error('Directory not found:', PRODUCTS_DIR);
    process.exit(1);
  }

  const files = readdirSync(PRODUCTS_DIR).filter(f => /\.(jpe?g|png)$/i.test(f));
  console.log(`[BAYTOUKA WebP] Found ${files.length} product images in assets/products/.`);

  let sharpModule = null;
  try {
    sharpModule = (await import('sharp')).default;
  } catch {
    console.log(
      '[BAYTOUKA WebP] Optional package "sharp" is not installed.\n' +
      'To batch-generate .webp copies alongside .jpg files, run:\n' +
      '  npm install --save-dev sharp@0.33.5 && npm run convert-webp'
    );
    process.exit(0);
  }

  let converted = 0;
  for (const file of files) {
    const srcPath = join(PRODUCTS_DIR, file);
    const outName = `${basename(file, extname(file))}.webp`;
    const outPath = join(PRODUCTS_DIR, outName);
    if (!existsSync(outPath)) {
      await sharpModule(srcPath).webp({ quality: 82 }).toFile(outPath);
      converted++;
    }
  }
  console.log(`[BAYTOUKA WebP] Successfully converted ${converted} images to WebP.`);
}

run();

