import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/overwatch-advice/',
  publicDir: 'public',
  envPrefix: 'PUBLIC_',
  build: {
    outDir: './build',
  },
  server: {
    open: true,
    port: 3000,
    strictPort: true,
  },
  preview: {
    port: 3000,
  }
})
