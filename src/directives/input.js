import { vFocus } from "../../code/input/v-focus";
import { vAutoResize } from "../../code/input/v-auto-resize";
import { vMask } from "../../code/input/v-mask";
import { vCustomMask } from "../../code/input/v-custom-mask";

export default {
  install: (app) => {
    app
      .directive("focus", vFocus)
      .directive("auto-resize", vAutoResize)
      .directive("mask", vMask)
      .directive("custom-mask", vCustomMask);
  },
};
