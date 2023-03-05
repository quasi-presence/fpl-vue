import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 8080
  },
  //add test to vite config
  test: {
    environment: 'happy-dom'
  },
})
