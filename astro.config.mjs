// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Ensure a fully static site
  output: 'static',
  // Generate file-based routes (index.html) for easy subdirectory hosting
  build: {
    format: 'file',
    // Put Astro-managed assets under dist/assets instead of dist/_astro
    assets: 'assets'
  },
  // Make all asset and link URLs relative to the current document and send bundles to assets/*
  vite: {
    base: './',
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/js/[name].[hash].js',
          chunkFileNames: 'assets/js/[name].[hash].js',
          assetFileNames: (info) => {
            if ((info.name || '').endsWith('.css')) return 'assets/css/[name].[hash][extname]';
            // Common image extensions to assets/img; others stay in assets/
            if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(info.name || '')) {
              return 'assets/img/[name].[hash][extname]';
            }
            return 'assets/[name].[hash][extname]';
          }
        }
      }
    }
  }
});
