import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const productsJsonPath = path.join(rootDir, 'products.json');
const raw = fs.readFileSync(productsJsonPath, 'utf8').replace(/^\uFEFF/, '');
const products = JSON.parse(raw);

console.log(`Loaded ${products.length} products from products.json`);

const header = `// ============================================================================
// BAYTOUKA (بيتك) — Embedded Canonical Products Database (${products.length} Products)
// Embedded fallback for file:// protocol and offline environments
// ============================================================================
(function() {
  window.__PRODUCTS__ = ${JSON.stringify(products)};
})();
`;

const outPath = path.join(rootDir, 'js', 'products-data.js');
fs.writeFileSync(outPath, header, 'utf8');
console.log(`Generated ${outPath} (${Math.round(header.length / 1024)} KB)`);

