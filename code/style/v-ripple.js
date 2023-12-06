// orignal code is from "https://codesandbox.io/s/v-ripple-vue-3-joji0?file=/src/directives/vRipple.js"

// I have modified it to make customisable with ability to change color, spread speed and make the click event more responsive

const handleRipple = (element, binding, ev) => {
  const rippleElement = document.createElement("span");
  let currentDiameter = 1;
  let currentOpacity = 0.65;
  applyRippleStyle();

  function applyRippleStyle() {
    const elementCoordinates = element.getBoundingClientRect();
    const offsetY = ev.clientY - elementCoordinates.top + window.scrollY; // Consider scrolling
    const offsetX = ev.clientX - elementCoordinates.left + window.scrollX; // Consider scrolling

    rippleElement.style.position = "absolute";
    rippleElement.style.height = "5px";
    rippleElement.style.width = "5px";
    rippleElement.style.borderRadius = "50%"; // Use "50%" for a perfect circle
    rippleElement.style.backgroundColor = binding.value || "#f2f2f29e";
    rippleElement.style.left = `${offsetX}px`;
    rippleElement.style.top = `${offsetY}px`;
    element.appendChild(rippleElement);
  }

  function animateRippleSpread() {
    const maximalDiameter = +binding.value || 50;
    const speedModifier = binding.modifiers && binding.modifiers.fast ? 2 : 1;

    if (currentDiameter <= maximalDiameter) {
      currentDiameter += speedModifier;
      currentOpacity -= 0.65 / (maximalDiameter * speedModifier);
      rippleElement.style.transform = `scale(${currentDiameter})`;
      rippleElement.style.opacity = `${currentOpacity}`;
    } else {
      rippleElement.remove();
      clearInterval(animationHandler);
    }
  }

  let animationHandler = setInterval(animateRippleSpread, 15);
};

export const vRipple = {
  mounted: (el, binding) => {
    el.style.position = "relative";
    el.style.overflow = "hidden";
    el.addEventListener("click", (ev) => handleRipple(el, binding, ev));
  },
};
