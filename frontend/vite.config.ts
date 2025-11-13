import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    allowedHosts: ['nextbi.duckdns.org'], // ✅ add this line
    proxy: {
      '/api': {
        target: 'http://nextbi-backend:3001',
        changeOrigin: true,
      },
    },
  },
})
