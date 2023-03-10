import { defineConfig } from 'vite'
import {resolve} from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // Make sure this matches the Chromium version built into NW.js
    target: 'chrome107',
    outDir: 'dist-vue'
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '.', 'src')
    }
  },
})
