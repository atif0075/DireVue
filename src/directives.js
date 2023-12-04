import general from "./directives/general";
import image from "./directives/image";
import input from "./directives/input";

export default {
  install: (app) => {
    app.use(general);
    app.use(image);
    app.use(input);
  },
};
