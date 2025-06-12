import { defineConfig, loadEnv } from 'vite';
import { URL, fileURLToPath } from 'node:url';
import { setupVitePlugins, getBuildTime } from './build';

// https://vite.dev/config/
export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as Env.ImportMeta;
  const buildTime = getBuildTime();
  return {
    plugins: setupVitePlugins(viteEnv, buildTime),
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
  }
})
