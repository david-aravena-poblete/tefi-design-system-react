import { defineConfig } from "vite";
import { resolve } from "node:path";
import path from "path";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    dts(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    lib: {
      entry: resolve(
        import.meta.dirname,
        "src/index.ts"
      ),

      name: "tefi-design-system",

      fileName:
        "tefi-design-system",
    },

    rolldownOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
      ],

      output: {
        globals: {
          react: "React",

          "react-dom":
            "ReactDom",

          "react/jsx-runtime":
            "react/jsx-runtime",
        },
      },
    },
  },
});