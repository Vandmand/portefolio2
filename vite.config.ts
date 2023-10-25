import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, './src/components'),
      '@resources': path.resolve(__dirname, './src/resources'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@routes': path.resolve(__dirname, './src/routes')
    },
  },
  plugins: [react(), svgr()]
})