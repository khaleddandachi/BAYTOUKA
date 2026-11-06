import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import esbuild from 'esbuild';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');

console.log('[BUILD] Starting Baytouka Classic & Production Build...');

// 1. Ensure products-data.js is generated
const productsJsonPath = path.join(rootDir, 'products.json');
const rawProducts = fs.readFileSync(productsJsonPath, 'utf8').replace(/^\uFEFF/, '');
const products = JSON.parse(rawProducts);

const productsDataJs = `// ============================================================================
// BAYTOUKA (بيتك) — Embedded Canonical Products Database (${products.length} Products)
// Embedded fallback for file:// protocol and offline environments
// ============================================================================
(function() {
  window.__PRODUCTS__ = ${JSON.stringify(products)};
})();
`;
fs.writeFileSync(path.join(rootDir, 'js', 'products-data.js'), productsDataJs, 'utf8');
console.log(`[BUILD] Generated js/products-data.js (${products.length} items)`);

// 2. Build JS bundle for root (unminified with sourcemap for easy debugging)
await esbuild.build({
  entryPoints: [path.join(rootDir, 'js', 'app.js')],
  bundle: true,
  format: 'iife',
  outfile: path.join(rootDir, 'js', 'app.bundle.js'),
  target: ['es2020'],
  sourcemap: true,
  minify: false
});
console.log('[BUILD] Bundled js/app.bundle.js for root directory');

// 3. Prepare dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });
fs.mkdirSync(path.join(distDir, 'js'), { recursive: true });
fs.mkdirSync(path.join(distDir, 'css'), { recursive: true });

// 4. Build minified JS bundle for dist
await esbuild.build({
  entryPoints: [path.join(rootDir, 'js', 'app.js')],
  bundle: true,
  format: 'iife',
  outfile: path.join(distDir, 'js', 'app.bundle.js'),
  target: ['es2020'],
  minify: true,
  sourcemap: false
});
console.log('[BUILD] Bundled minified dist/js/app.bundle.js');

// 5. Minify CSS for dist
await esbuild.build({
  entryPoints: [path.join(rootDir, 'css', 'styles.css')],
  outfile: path.join(distDir, 'css', 'styles.css'),
  minify: true
});
console.log('[BUILD] Minified dist/css/styles.css');

// 6. Copy products-data.js, lucide.min.js, products.json, and assets to dist
fs.writeFileSync(path.join(distDir, 'js', 'products-data.js'), productsDataJs, 'utf8');

const lucideSrc = path.join(rootDir, 'js', 'lucide.min.js');
if (fs.existsSync(lucideSrc)) {
  fs.copyFileSync(lucideSrc, path.join(distDir, 'js', 'lucide.min.js'));
}

fs.copyFileSync(productsJsonPath, path.join(distDir, 'products.json'));
fs.cpSync(path.join(rootDir, 'assets'), path.join(distDir, 'assets'), { recursive: true });

// 7. Copy index.html to dist/index.html
fs.copyFileSync(path.join(rootDir, 'index.html'), path.join(distDir, 'index.html'));

console.log('[BUILD] Build complete! Both root and dist/ are 100% compatible with file:// and http(s).');

