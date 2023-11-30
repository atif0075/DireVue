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
  - icon: 🧰
    title: Versatility
    details: DireVue offers a diverse set of directives, from simple utility directives to complex interactive behaviors. Whatever your project demands, DireVue has you covered.
  - icon: 📚
    title: Documentation
    details: Each directive comes with detailed documentation and examples, making it easy for you to integrate and customize them in your Vue applications.
  - icon: ⚡️
    title: Lightweight
    details: DireVue is designed to be lightweight, ensuring that you only include the directives you need without unnecessary bloat.
---

<style>
:root { 
  --vp-home-hero-name-background: linear-gradient(
    30deg,
    #5073e0 0%,
    #8ba1ea 80%
  );
  --vp-home-hero-image-background-image: linear-gradient(
    -45deg,
    #5073e0 50%,
    #8ba1ea 50%
  );
  --vp-home-hero-image-filter: blur(20px);
}  
@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}
@media (min-width: 768px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
} 

/* Dark Mode */
html.dark { 
  --vp-home-hero-name-background: linear-gradient(
    30deg,
    #121e42 0%, /* Darker blue shade */
    #667eea 80%
  );
  --vp-home-hero-image-background-image: linear-gradient(
    -45deg,
    #121e42 50%, /* Darker blue shade */
    #1f326e 50%
  );
}



@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

 
</style>
