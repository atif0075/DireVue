export const vFocus = {
  mounted(el, binding) {
    handleFocus(el, binding);
  },
  updated(el, binding) {
    handleFocus(el, binding);
  },
};

function handleFocus(el, binding) {
  if (binding.arg === "lockonFocus") {
    el.onblur = () => el.focus();
  } else if (binding.arg === "lock") {
    el.focus();
    el.onblur = () => el.focus();
  } else if (binding.arg === "lockonCondition") {
    if (binding.value) {
      el.focus();
      el.onblur = () => el.focus();
    } else {
      // remove the event handler when the binding value changes
      el.onblur = null;
      el.blur();
    }
  } else {
    el.focus();
  }
}
