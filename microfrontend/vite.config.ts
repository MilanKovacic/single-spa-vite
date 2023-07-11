import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  return {
    build: {
      rollupOptions: {
        preserveEntrySignatures: "strict",
        input: "main.ts",
        output: {
          format: "esm",
          entryFileNames: `[name].js`,
        },
        external: ["single-spa"]
      },
    },
    plugins: [
      react()
    ],
  }
})