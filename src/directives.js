import { vFocus } from "../code/input/v-focus";
import { vClickOutside } from "../code/general/v-click-outside";
import { vCopy } from "../code/general/v-copy";
import { vDisable } from "../code/general/v-disable";
import { vScrollToView } from "../code/general/v-scroll-to-view";
import { vToolTip } from "../code/general/v-tooltip";
import { vRipple } from "../code/general/v-ripple";
import { vHighlight } from "../code/general/v-highlight";
import { vImageView } from "../code/image/v-image-view";
import { vImageFilter } from "../code/image/v-image-filter";
import { vImageGallery } from "../code/image/v-image-gallery";
import { vImageZoom } from "../code/image/v-image-zoom";
import { VImageFallback } from "../code/image/v-image-fallback";
import { vImageCompare } from "../code/image/v-image-compare";
export default {
  install: (app) => {
    app
      .directive("focus", vFocus)
      .directive("click-outside", vClickOutside)
      .directive("copy", vCopy)
      .directive("disable", vDisable)
      .directive("scroll-to-view", vScrollToView)
      .directive("tooltip", vToolTip)
      .directive("ripple", vRipple)
      .directive("highlight", vHighlight)
      .directive("image-view", vImageView)
      .directive("image-filter", vImageFilter)
      .directive("image-gallery", vImageGallery)
      .directive("image-zoom", vImageZoom)
      .directive("image-fallback", VImageFallback)
      .directive("image-compare", vImageCompare);
  },
};
