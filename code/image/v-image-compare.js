export const vImageCompare = {
  mounted(el, binding) {
    const container = document.createElement("div");
    const imgWrapperBefore = document.createElement("div");
    imgWrapperBefore.classList.add("img-wrapper", "before");
    imgWrapperBefore.style.backgroundImage = `url(${binding.value.before})`;

    const imgWrapperAfter = document.createElement("div");
    imgWrapperAfter.classList.add("img-wrapper", "after");
    imgWrapperAfter.style.backgroundImage = `url(${binding.value.after})`;

    const slider = document.createElement("div");
    slider.classList.add("slider");

    const handle = document.createElement("div");
    // handle.classList.add("handle");
    handle.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" class="handle" viewBox="-8 -3 16 6"> <path d="M -5 -2 L -7 0 L -5 2 M 5 -2 L 7 0 L 5 2" fill="none" vector-effect="non-scaling-stroke"></path> </svg>';

    slider.appendChild(handle);
    container.appendChild(imgWrapperBefore);
    container.appendChild(imgWrapperAfter);
    container.appendChild(slider);

    el.appendChild(container);

    let isSliding = false;

    const debounce = (func, delay) => {
      let timeout;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
      };
    };

    const startSlide = () => {
      isSliding = true;
    };

    const endSlide = () => {
      isSliding = false;
    };
    if (binding.value.sliderValue) {
      slider.style.left = `${binding.value.sliderValue}%`;
      imgWrapperBefore.style.width = `${binding.value.sliderValue}%`;
      // change min-width too
      imgWrapperBefore.style.minWidth = `${binding.value.sliderValue}%`;
    } else {
      // default slider value to 50%
      slider.style.left = `50%`;
      imgWrapperBefore.style.width = `50%`;
      // change min-width too
      imgWrapperBefore.style.minWidth = `50%`;
    }

    const slide = debounce((e) => {
      if (isSliding) {
        const rect = container.getBoundingClientRect();
        let x = e.clientX - rect.left;
        x = Math.max(0, Math.min(x, rect.width));
        const percentage = (x / rect.width) * 100;
        slider.style.left = `${percentage}%`;
        imgWrapperBefore.style.width = `${percentage}%`;
        // change min-width too
        imgWrapperBefore.style.minWidth = `${percentage}%`;
      }
    }, 10);

    slider.addEventListener("mousedown", startSlide);
    document.addEventListener("mouseup", endSlide);
    document.addEventListener("mousemove", slide);
  },
};
