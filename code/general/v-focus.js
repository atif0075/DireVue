export const vFocus = {
  mounted(el, binding) {
    if (binding.value) {
      el.focus();
    }
    // lock focus to the element
    else if (binding.value === "lock") {
      el.onblur = () => el.focus();
    }
    // on certain condition, focus the element
    else if (binding.value) {
      el.focus();
    }
  },
  updated(el, binding) {
    if (binding.value) {
      el.focus();
    }
    // lock focus to the element
    else if (binding.value === "lock") {
      el.onblur = () => el.focus();
    }
    // on certain condition, focus the element
    else if (binding.value) {
      el.focus();
    }
  },
};
