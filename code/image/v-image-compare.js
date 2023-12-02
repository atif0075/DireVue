export const vImageCompare = {
  mounted(el, binding) {
    const container = document.createElement("div");
    container.classList.add("image-compare-container");

    const imgWrapperBefore = document.createElement("img");
    imgWrapperBefore.classList.add("img-wrapper", "before");
    binding.value.customClassSuffix
      ? imgWrapperBefore.classList.add(
          "before-" + binding.value.customClassSuffix
        )
      : null;
    imgWrapperBefore.src = binding.value.before;

    const imgWrapperAfter = document.createElement("img");
    imgWrapperAfter.classList.add("img-wrapper", "after");
    binding.value.customClassSuffix
      ? imgWrapperAfter.classList.add(
          "after-" + binding.value.customClassSuffix
        )
      : null;
    imgWrapperAfter.src = binding.value.after;

    const slider = document.createElement("div");
    binding.value.direction === "vertical"
      ? slider.classList.add("slider", "slider-vertical")
      : slider.classList.add("slider");

    const handle = document.createElement("div");
    handle.classList.add("handle");
    handle.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -3 16 6"> <path d="M -5 -2 L -7 0 L -5 2 M 5 -2 L 7 0 L 5 2" fill="none" vector-effect="non-scaling-stroke"></path> </svg>';
    if (binding.value.direction === "vertical") {
      handle.classList.add("handle-vertical");
    }
    slider.appendChild(handle);
    container.appendChild(imgWrapperBefore);
    container.appendChild(imgWrapperAfter);
    container.appendChild(slider);

    el.appendChild(container);

    let isSliding = false;

    const debounce = (func, delay) => {
      if (binding.value.direction === "vertical") {
        let timeoutX, timeoutY;

        return function () {
          const context = this;
          const args = arguments;

          // Use different timeouts for vertical and vertical sliders
          if (args[0].type === "mousemove") {
            clearTimeout(timeoutX);
            timeoutX = setTimeout(() => func.apply(context, args), delay);
          } else if (args[0].type === "mousedown") {
            clearTimeout(timeoutY);
            timeoutY = setTimeout(() => func.apply(context, args), delay);
          }
        };
      } else {
        let timeout;
        return function () {
          const context = this;
          const args = arguments;

          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(context, args), delay);
        };
      }
    };

    const startSlide = () => {
      isSliding = true;
    };

    const endSlide = () => {
      isSliding = false;
    };

    const setSliderPosition = (percentage) => {
      if (binding.value.direction === "vertical") {
        slider.style.top = `${percentage}%`;
        // slider.style.transform = `translate(-50%, -50%) rotate(90deg)`;
        imgWrapperBefore.style.clipPath = `inset(${percentage}% 0 0 0)`;
        imgWrapperAfter.style.clipPath = `inset(0 0  ${100 - percentage}% 0)`;
      } else {
        slider.style.left = `${percentage}%`;
        imgWrapperBefore.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        imgWrapperAfter.style.clipPath = `inset(0 0 0 ${percentage}%)`;
        // inset(0 0 50% 0);
      }
    };

    if (binding.value.sliderValue) {
      setSliderPosition(binding.value.sliderValue);
    } else {
      setSliderPosition(50);
    }

    const slide = debounce((e) => {
      if (isSliding) {
        const rect = container.getBoundingClientRect();
        let position;

        if (binding.value.direction === "vertical") {
          position = e.clientY - rect.top;
          position = Math.max(0, Math.min(position, rect.height));

          const percentage = (position / rect.height) * 100;
          setSliderPosition(percentage);
        } else {
          position = e.pageX - rect.left;
          position = Math.max(0, Math.min(position, rect.width));

          const percentage = (position / rect.width) * 100;
          setSliderPosition(percentage);
        }
      }
    }, 10);

    slider.addEventListener("mousedown", startSlide);
    document.addEventListener("mouseup", endSlide);
    document.addEventListener("mousemove", slide);
  },
};
