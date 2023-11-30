import { vFocus } from "../code/general/v-focus";
import { vClickOutside } from "../code/general/v-click-outside";
import { vCopy } from "../code/general/v-copy";
import { vDisable } from "../code/general/v-disable";
import { vScrollToView } from "../code/general/v-scroll-to-view";
import { vToolTip } from "../code/general/v-tooltip";
import { vRipple } from "../code/general/v-ripple";
export default {
  install: (app) => {
    app
      .directive("focus", vFocus)
      .directive("click-outside", vClickOutside)
      .directive("copy", vCopy)
      .directive("disable", vDisable)
      .directive("scroll-to-view", vScrollToView)
      .directive("tooltip", vToolTip)
      .directive("ripple", vRipple);
  },
};
