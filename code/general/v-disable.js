export const vDisable = {
  mounted: (el, binding) => {
    const condition = binding.value !== undefined ? binding.value : true;
    updateState(el, condition);
    manageEvents(el, condition);
  },
  updated: (el, binding) => {
    const condition = binding.value !== undefined ? binding.value : true;
    updateState(el, condition);
    manageEvents(el, condition);
  },
};

function updateState(el, condition) {
  if (condition) {
    disableElement(el);
  } else {
    enableElement(el);
  }
}

function disableElement(el) {
  el.disabled = true;
  el.className += " disabled";
  el.style.pointerEvents = "none";
}

function enableElement(el) {
  el.disabled = false;
  el.className = el.className.replace(/\bdisabled\b/g, ''); // Remove "disabled" class
  el.style.pointerEvents = "auto";
}

function manageEvents(el, condition) {
  const eventList = ['click', 'mousedown', 'mouseup', 'mousemove', 'keydown', 'keyup', 'keypress', 'contextmenu', 'touchstart', 'touchend', 'touchmove', 'touchcancel'];

  if (condition) {
    eventList.forEach(event => {
      el.addEventListener(event, preventDefault, false);
    });
  } else {
    eventList.forEach(event => {
      el.removeEventListener(event, preventDefault, false);
    });
  }
}

function preventDefault(event) {
  event.preventDefault();
}
