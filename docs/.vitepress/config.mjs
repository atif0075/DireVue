import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DireVue",
  description: "Your Go-To Toolkit of Vue Directives",
  themeConfig: {
    logo: "https://gist.githubusercontent.com/atif0075/7a7cda43c49481bc7141d4e7224579f6/raw/6a1701b9a0bda46fcc7405c7b4a1b701aa3b6ee8/direvue.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
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
      {
        text: "General",
        collapsed: false,
        items: [
          { text: "Focus", link: "/general/v-focus" },
          { text: "Click Outside", link: "/general/v-click-outside" },
          { text: "Copy", link: "/general/v-copy" },
          { text: "Disable", link: "/general/v-disable" },
          { text: "Scroll To View", link: "/general/v-scroll-to-view" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/atif0075/direvue" },
    ],
  },
});
