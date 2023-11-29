export const scrollToView = {
  mounted(el, binding) {
    el.addEventListener("click", () => {
      handleScroll(binding.value);
    });
  },
  updated(el, binding) {
    el.addEventListener("click", () => {
      handleScroll(binding.value);
    });
  },
};
function handleScroll(id) {
  setTimeout(() => {
    const targetElm = document.getElementById(id);
    targetElm.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }, 50); // wait for element if it is not rendered yet
}
