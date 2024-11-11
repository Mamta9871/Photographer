import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import rewriteAll from 'vite-plugin-rewrite-all';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), rewriteAll()], 
  server: {
    host: true,           // Enables access from network devices (optional)
    port: 5173,           // Keeps the default port or specify your desired port
    open: true,           // Automatically opens the app in the browser
    historyApiFallback: true,
  },
})
