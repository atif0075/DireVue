/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./docs/.vitepress/**/*.{js,ts,vue}",
    "./docs/**/*.md",
  ],
  theme: {
    extend: {},
  },
};
