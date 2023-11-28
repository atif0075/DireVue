export const vClickOutside = {
  beforeMount(el, binding) {
    el.clickOutsideEvent = function (event) {
      const isTouch = event.type === "touchstart";
      const isClickOutside = !(
        el === event.target || el.contains(event.target)
      );

      if (isTouch || isClickOutside) {
        if (binding.value) {
          let shouldTrigger = true;

          // Check for modifiers
          if (binding.modifiers) {
            if (binding.modifiers.enter && !event.key === "Enter") {
              shouldTrigger = false;
            }
            // Add more modifiers as needed
          }

          // Check for a custom filter function
          if (typeof binding.value === "function" && !binding.value(event)) {
            shouldTrigger = false;
          }

          if (shouldTrigger) {
            binding.value(event);
          }
        }
      }
    };

    // Use capturing phase to handle events before they reach other elements
    document.addEventListener("click", el.clickOutsideEvent, true);
    document.addEventListener("touchstart", el.clickOutsideEvent, true);
  },
  unmounted(el) {
    document.removeEventListener("click", el.clickOutsideEvent, true);
    document.removeEventListener("touchstart", el.clickOutsideEvent, true);
  },
};
