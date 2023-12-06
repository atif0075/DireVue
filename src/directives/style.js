import { vRipple } from "../../code/style/v-ripple";
import { vAccentBackground } from "../../code/style/v-accent-background";
export default {
  install: (app) => {
    app
      .directive("ripple", vRipple)
      .directive("accent-background", vAccentBackground);
  },
};
