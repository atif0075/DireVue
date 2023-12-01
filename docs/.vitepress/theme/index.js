import "./tailwind.postcss";
import "./index.css";
import "../../../public/directive.css";
import DefaultTheme from "vitepress/theme";
import directives from "../../../src/directives";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(directives);
  },
};
