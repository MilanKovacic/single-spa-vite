import { defineConfig } from 'vite'
import externalize from 'vite-plugin-externalize-dependencies';

const externalDependencies = ["single-spa", "react", "react/jsx-dev-runtime", "react/jsx-runtime", "react-dom", "react-dom/client", "@example/root-config"]

// https://vitejs.dev/config/
export default defineConfig({
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
    externalize({ externals: externalDependencies })
  ]
});