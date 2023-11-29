import { vFocus } from "../code/general/v-focus";
import { vClickOutside } from "../code/general/v-click-outside";
import { vCopy } from "../code/general/v-copy";
import { vDisable } from "../code/general/v-disable";
import { scrollToView } from "../code/general/v-scroll-to-view";
export default {
  install: (app) => {
    app
      .directive("focus", vFocus)
      .directive("click-outside", vClickOutside)
      .directive("copy", vCopy)
      .directive("disable", vDisable)
      .directive("scroll-to-view", scrollToView);
  },
};
