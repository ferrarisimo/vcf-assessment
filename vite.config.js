import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configurazione per ambiente Arrow + Azure
export default defineConfig({
  plugins: [react()],
  root: '.',                     // Root del progetto (stessa del package.json)
  base: '/',                     // Path base, cambia se deployi in sottocartelle
  build: {
    outDir: 'dist',              // Directory di output
    emptyOutDir: true,           // Pulisce la cartella dist a ogni build
    sourcemap: false,            // Disabilita mappe per build più leggera
  },
  server: {
    port: 5173,                  // Porta locale per npm run dev
    open: true                   // Apre automaticamente il browser
  },
  preview: {
    port: 4173                   // Porta per vite preview
  },
  resolve: {
    alias: {
      '@': '/src',               // Alias per import più puliti
    },
  },
})
