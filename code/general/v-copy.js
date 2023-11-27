export const vCopy = {
  mounted(el, binding) {
    el.clickCopyToClipboard = function (event) {
      if (binding.value) {
        navigator.clipboard.writeText(binding.value);
      }
    };
    el.addEventListener("click", el.clickCopyToClipboard);
  },
  unmounted(el) {
    el.removeEventListener("click", el.clickCopyToClipboard);
  },
};
