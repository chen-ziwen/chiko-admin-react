import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { URL, fileURLToPath } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/scss/global.scss" as *;`,
        api: 'modern-compiler'
      },
    },
  },
  server: {
    port: 520,
    open: true,
    warmup: {
      clientFiles: ["./index.html", './src/{pages,components}/*'],
    }
  }
})
