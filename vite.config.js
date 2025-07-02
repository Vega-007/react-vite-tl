import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    host: '0.0.0.0',  // 🔓 Opens up server to local network
    port: 5173        // or your current port
  }
})
