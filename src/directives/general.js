import { vClickOutside } from "../../code/general/v-click-outside";
import { vCopy } from "../../code/general/v-copy";
import { vDisable } from "../../code/general/v-disable";
import { vScrollToView } from "../../code/general/v-scroll-to-view";
import { vToolTip } from "../../code/general/v-tooltip";
import { vHighlight } from "../../code/general/v-highlight";

export default {
  install: (app) => {
    app
      .directive("click-outside", vClickOutside)
      .directive("copy", vCopy)
      .directive("disable", vDisable)
      .directive("scroll-to-view", vScrollToView)
      .directive("tooltip", vToolTip)
      .directive("highlight", vHighlight);
  },
};
