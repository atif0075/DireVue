import { vFocus } from "../code/general/v-focus";
import { vClickOutside } from "../code/general/v-click-outside";
import { vCopy } from "../code/general/v-copy";
export default {
  install: (app) => {
    app
      .directive("focus", vFocus)
      .directive("click-outside", vClickOutside)
      .directive("copy", vCopy);
  },
};
