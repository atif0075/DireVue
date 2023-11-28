import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import directives from "./directives";
createApp(App).use(directives).mount("#app");
