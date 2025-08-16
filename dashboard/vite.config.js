import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure assets are served from the correct base path on GitHub Pages
  base: '/M.a.i.a-Framework/',
  test: {
    environment: 'jsdom',
  },
})
