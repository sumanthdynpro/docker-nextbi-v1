import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    host: '0.0.0.0',
    port: 3000,

    https: false,

    // Allow external domains to access the Vite dev server
    allowedHosts: [
      'nextbi.dynprocloud.com',
      '35.174.81.186'
    ],

    // Proxy setup with two different backend targets
    proxy: {
      // Backend #1 (IP-based)
      '/api': {
        target: 'http://35.174.81.186:3001',
        changeOrigin: true,
        secure: false,
      },

      // Backend #2 (domain-based)
      '/auth': {
        target: 'https://nextbi.dynprocloud.com:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
