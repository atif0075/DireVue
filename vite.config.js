import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
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
  resolve: {
    alias: {
      "@": "/src",
      "@code": "/code",
    },
  },
});
