import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative paths make the build deploy cleanly to GitHub Pages project sites.
  base: './',
})
