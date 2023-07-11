import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      preserveEntrySignatures: "strict",
      input: "src/main.js",
      output: {
        format: "esm",
        entryFileNames: "[name].js",
      },
      external: ["single-spa"]
    },
         
  },
  plugins: [react()],
});