import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DireVue",
  description: "Your Go-To Toolkit of Vue Directives",
  sitemap: {
    hostname: "https://direvue.vercel.app",
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://gist.githubusercontent.com/atif0075/7a7cda43c49481bc7141d4e7224579f6/raw/6a1701b9a0bda46fcc7405c7b4a1b701aa3b6ee8/direvue.svg",
      },
    ],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "ReoTTcKgUwVb6_Ls2uHpr7AnrGBZq_Gf8k7dvKm_Y3c",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "vue, vuejs, vue3, vue3-directives, vue-directives, vue3-directive, vue-directive, vue3-directives, vue-directives, vue3-directive, vue-directive, vue3-directives, vue-directives, vue3-directive, vue-directive, vue3-directives, vue-directives, vue3-directive, vue-directive, vue3-directives, vue-directives, vue3-directive, vue-directive, vue3-directives, vue-directives, vue3-directive, vue-directive, vue3-directives, vue-directives, vue3-directive, vue-directive, vue3-directives, vue-directives, vue3-directive, vue-directive",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "DireVue is a comprehensive collection of Vue directives designed to enhance your Vue.js development experience. With a focus on simplicity, flexibility, and efficiency, DireVue empowers you to build your next Vue app faster and with less effort.",
      },
    ],
    [
      "meta",
      {
        name: "og:url",
        content: "https://direvue.vercel.app/",
      },
    ],
    [
      "meta",
      {
        name: "og:image",
        content:
          "https://gist.githubusercontent.com/atif0075/7a7cda43c49481bc7141d4e7224579f6/raw/6a1701b9a0bda46fcc7405c7b4a1b701aa3b6ee8/direvue.svg",
      },
    ],
    [
      "meta",
      {
        name: "og:type",
        content: "website",
      },
    ],
    [
      "meta",
      {
        name: "og:locale",
        content: "en_US",
      },
    ],
  ],
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
          { text: "Tooltip", link: "/general/v-tooltip" },
          { text: "Ripple", link: "/general/v-ripple" },
          { text: "Highlight", link: "/general/v-highlight" },
        ],
      },
      {
        text: "Image",
        collapsed: false,
        items: [
          { text: "Image View", link: "/image/v-image-view" },
          { text: "Image Filter", link: "/image/v-image-filter" },
          { text: "Image Gallery", link: "/image/v-image-gallery" },
          { text: "Image Zoom", link: "/image/v-image-zoom" },
          { text: "Image Fallback", link: "/image/v-image-fallback" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/atif0075/direvue" },
    ],
  },
});
