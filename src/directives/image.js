import { vImageView } from "../../code/image/v-image-view";
import { vImageFilter } from "../../code/image/v-image-filter";
import { vImageGallery } from "../../code/image/v-image-gallery";
import { vImageZoom } from "../../code/image/v-image-zoom";
import { VImageFallback } from "../../code/image/v-image-fallback";
import { vImageCompare } from "../../code/image/v-image-compare";
import { VAvatar } from "../../code/image/v-avatar";
export default {
  install: (app) => {
    app
      .directive("image-view", vImageView)
      .directive("image-filter", vImageFilter)
      .directive("image-gallery", vImageGallery)
      .directive("image-zoom", vImageZoom)
      .directive("image-fallback", VImageFallback)
      .directive("image-compare", vImageCompare)
      .directive("avatar", VAvatar);
  },
};
