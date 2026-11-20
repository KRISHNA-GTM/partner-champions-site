import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base: './' keeps the built site portable: it works from a domain root
// or a subfolder on shared hosting (e.g. GoDaddy) without path changes.
export default defineConfig({
  base: './',
  plugins: [react()],
})
