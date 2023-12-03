export const vAutoResize = {
  mounted(el) {
    if (el) {
      el.addEventListener("input", () => {
        resizeTextarea(el);
      });
    }
  },
};
function resizeTextarea(el) {
  el.style.height = "";
  el.style.height = el.scrollHeight + "px";
}
