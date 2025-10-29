import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cicuitron/', // Replace with your repository name
  server: {
    port: 5174,
    host: true,
    open: true
  },
  preview: {
    port: 5174,
    host: true
  }
})

