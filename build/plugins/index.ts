import react from '@vitejs/plugin-react';
import type { PluginOption } from 'vite';
import Inspect from 'vite-plugin-inspect';
import removeConsole from 'vite-plugin-remove-console';

import { setupAutoImport } from './auto-import';
import { setupHtmlPlugin } from './html';

export function setupVitePlugins(viteEnv: Env.ImportMeta, buildTime: string) {
  const plugins: PluginOption[] = [
    react(),
    setupAutoImport(viteEnv), // 自动导入
    Inspect(), // 打包分析
    removeConsole(), // 生产环境下移除 console
    setupHtmlPlugin(buildTime) // 注入 buildTime
  ];
  return plugins;
}
