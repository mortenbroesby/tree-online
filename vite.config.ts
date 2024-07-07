/// <reference types="vitest" />

import { resolve as pathResolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const resolve = (path: string) => pathResolve(__dirname, path);

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tree-online/',
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      '~': resolve('src'),
    },
  },
  server: {
    host: true,
    strictPort: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.{ts,tsx}'],
    exclude: ['/node_modules/', '/dist/'],
    setupFiles: './vitest.setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['html'],
      include: ['src/**/*.tsx'],
    },
  },
} as any);
