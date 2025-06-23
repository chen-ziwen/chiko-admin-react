import process from 'node:process';
import { URL, fileURLToPath } from 'node:url';

import { defineConfig, loadEnv } from 'vite';

import { getBuildTime, setupVitePlugins } from './build';

// https://vite.dev/config/
export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as Env.ImportMeta;
  const buildTime = getBuildTime();
  return {
    base: viteEnv.VITE_BASE_URL,
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/scss/global.scss" as *;`,
          api: 'modern-compiler'
        }
      }
    },
    plugins: setupVitePlugins(viteEnv, buildTime),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./', import.meta.url))
      }
    },
    server: {
      open: true,
      port: 5210
    }
  };
});
