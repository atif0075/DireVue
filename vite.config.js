import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      /* options */
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      defaultExportByFilename: false,
      dts: "./auto-imports.d.ts",
    }),
    Components({
      dirs: ["./src/examples"],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/directives.js"),
      name: "direvue",
      fileName: (format) => `direvue.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
      "@code": "/code",
    },
  },
});
