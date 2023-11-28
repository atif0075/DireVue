---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "DireVue"
  text: "Your Go-To Toolkit of Vue Directives"
  tagline: "A collection of Vue directives to help you build your next Vue app faster"
  image: https://gist.githubusercontent.com/atif0075/7a7cda43c49481bc7141d4e7224579f6/raw/6a1701b9a0bda46fcc7405c7b4a1b701aa3b6ee8/direvue.svg
  actions:
    - theme: brand
      text: Explore
      link: /guide/introduction
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style>
:root {
  --main-color: #3d63dc;
  --lighter-color: #7899ed; /* Lighter version of main color */
  --darker-color: #1f389e; /* Darker version of main color */

  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, var(--darker-color) 30%, var(--lighter-color));

  --vp-home-hero-image-background-image: linear-gradient(-45deg, var(--darker-color) 50%, var(--lighter-color) 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}

</style>
