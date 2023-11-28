import { vFocus } from "/code/general/v-focus";

export default {
  install: (app) => {
    app.directive("focus", vFocus);
  },
};
