import { defineConfig } from 'vite';
import { copyFileSync, cpSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

function copyBaytoukaStaticAssets() {
  return {
    name: 'copy-baytouka-static-assets',
    closeBundle() {
      const rootDir = process.cwd();
      const outDir = resolve(rootDir, 'dist');
      if (!existsSync(outDir)) {
        mkdirSync(outDir, { recursive: true });
      }
      const productsSrc = resolve(rootDir, 'products.json');
      if (existsSync(productsSrc)) {
        copyFileSync(productsSrc, resolve(outDir, 'products.json'));
      }
      const assetsSrc = resolve(rootDir, 'assets');
      if (existsSync(assetsSrc)) {
        cpSync(assetsSrc, resolve(outDir, 'assets'), { recursive: true });
      }
    }
  };
}

export default defineConfig({
  base: './',
  publicDir: false,
  build: {
    outDir: 'dist',
    assetsDir: 'bundle',
    target: 'es2020',
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html')
      }
    }
  },
  server: {
    port: 5173,
    open: false
  },
  plugins: [copyBaytoukaStaticAssets()]
});

