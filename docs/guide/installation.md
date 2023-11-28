# Getting Started

1. Install DireVue in your Vue 3 project:

::: code-group

```bash[npm]
npm install direvue
```
```bash[yarn]
yarn add direvue
```
```bash[pnpm]
pnpm add direvue
```
```bash[bun]
bun add direvue
```

:::

2. Import and use directives in your components:

```javascript
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import direvue from "direvue";

createApp(App).use(direvue).mount("#app");
```

3. Explore the documentation for each directive to unlock its full potential.