import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import externalize from 'vite-plugin-externalize-dependencies';

const externalDependencies = ["single-spa", "react", "react/jsx-dev-runtime", "react/jsx-runtime", "react-dom", "react-dom/client"]

export default defineConfig(({ command }) => {
  return {
    build: {
      rollupOptions: {
        input: "src/main.ts",
        output: {
          format: "esm",
        },
        external: externalDependencies
      },
    },
    plugins: [
      react(),
      externalize({ externals: externalDependencies })
    ],
  }
})