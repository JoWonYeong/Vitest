import { InlineConfig, UserConfig, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
  },
  // test: {
  //   environment: 'jsdom',
  //   globals: true,
  //   transformMode: {
  //     web: [/\.[jt]sx?$/],
  //   },
  //   setupFiles: './setupVitest.ts',
  // },
} as VitestConfigExport);
