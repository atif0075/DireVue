import { defineConfig } from "vitepress";
import { head } from "./config/head";
import { general } from "./sidebar/general";
import { input } from "./sidebar/input";
import { image } from "./sidebar/image";
import { style } from "./sidebar/style";
import { touch } from "./sidebar/touch";
export default defineConfig({
  title: "DireVue",
  description: "Your Go-To Toolkit of Vue Directives",
  sitemap: {
    hostname: "https://direvue.vercel.app",
  },

  vite: {
    server: {
      host: true,
    },
  },
  head,
  themeConfig: {
    logo: "https://gist.githubusercontent.com/atif0075/7a7cda43c49481bc7141d4e7224579f6/raw/6a1701b9a0bda46fcc7405c7b4a1b701aa3b6ee8/direvue.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "General", link: "/general/v-click-outside" },
      { text: "Input", link: "/input/v-focus" },
      { text: "Image", link: "/image/v-image-view" },
    ],
    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/guide/introduction" },
          { text: "Installation", link: "/guide/installation" },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      ...general,
      ...input,
      ...image,
      ...style,
      ...touch,
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/atif0075/direvue" },
    ],
  },
});
