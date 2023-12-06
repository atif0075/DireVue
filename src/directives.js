import general from "./directives/general";
import image from "./directives/image";
import input from "./directives/input";
import style from "./directives/style";
export default {
  install: (app) => {
    app
    .use(general)
    .use(image)
    .use(input)
    .use(style);
  },
};
