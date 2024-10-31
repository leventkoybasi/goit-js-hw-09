import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  define: {
    global: 'window',
  },
  root: 'src',
  build: {
    sourcemap: true,
    outDir: '../dist',
    emptyOutDir: true,
  },
  base: '/',
  plugins: [injectHTML()],
});
