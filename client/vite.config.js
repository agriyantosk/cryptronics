import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist' // Ensure all compiled files go to the 'dist' directory
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // Allows for '@' to be used as an alias for '/src'
    }
  },
  base: '/' // Set to '/' if deployed at the root, adjust if deploying to a subdirectory
})
