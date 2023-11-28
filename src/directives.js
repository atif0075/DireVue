import { vFocus } from "../code/general/v-focus";
import { vClickOutside } from "../code/general/v-click-outside";
export default {
  install: (app) => {
    app.directive("focus", vFocus).directive("click-outside", vClickOutside);
  },
};
