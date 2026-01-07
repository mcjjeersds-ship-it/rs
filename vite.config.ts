import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
  base: '/Hospital-Website/home',
  server: {
    historyApiFallback: {
      // Redirect semua permintaan ke index.html
      index: '/index.html',
      // Atau konfigurasi lebih spesifik
      rewrites: [
        { from: /^\/Hospital-Website\/home\/antrian/, to: '/Hospital-Website/home/index.html' },
        { from: /^\/Hospital-Website\/home/, to: '/Hospital-Website/home/index.html' },
      ],
      // Fallback untuk semua permintaan yang tidak cocok
      verbose: false,
    },
  },
});
