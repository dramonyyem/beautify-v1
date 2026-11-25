import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig(({ command }) => ({
  plugins: [
    vue(),

    ...(command === "build"
      ? [
          dts({
            insertTypesEntry: true,
            include: ["src"],
          }),
        ]
      : []),
  ],

  build:
    command === "build"
      ? {
          outDir: "dist",

          lib: {
            entry: resolve(import.meta.dirname, "src/index.ts"),
            name: "Beaufity",
            formats: ["es", "cjs"],
            fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
            cssFileName: "style",
          },

          rollupOptions: {
            external: ["vue"],
          },
        }
      : undefined,
}));
