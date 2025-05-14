import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@reduxAndHooks': path.resolve(__dirname, './src/reduxAndHooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@router': path.resolve(__dirname, './src/router'),
      '@common': path.resolve(__dirname, './src/common')
    }
  }
})
