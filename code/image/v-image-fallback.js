const loader = `<svg id='vLoader' xmlns="http://www.w3.org/2000/svg" class='animate-spin' viewBox="0 0 16 16"><path fill="currentColor" d="M2 8a6 6 0 1 1 6 6a.5.5 0 0 0 0 1a7 7 0 1 0-7-7a.5.5 0 0 0 1 0Z"/></svg>`;

export const VImageFallback = {
  mounted(el, binding) {
    el.classList.add("hidden"); // Hide the image until it loads

    // Set loader options
    const loaderOptions = binding.value && binding.value.loaderOptions;

    // Insert the loader (either custom or default) before the image
    if (loaderOptions && loaderOptions.value) {
      el.insertAdjacentHTML("beforebegin", loaderOptions.value);
      const customLoader = document.getElementById("vLoader");
      customLoader.style.width = loaderOptions.width || "32px";
      customLoader.style.height = loaderOptions.height || "32px";
    } else {
      el.insertAdjacentHTML("beforebegin", loader);
      const defaultLoader = document.getElementById("vLoader");
      defaultLoader.style.width = loaderOptions.width || "32px";
      defaultLoader.style.height = loaderOptions.height || "32px";
    }

    el.addEventListener("load", () => {
      // Remove the loading state if an image successfully loads
      const loaderElement = document.getElementById("vLoader");
      if (loaderElement) {
        loaderElement.remove();
      }
      el.classList.remove("hidden");
    });

    el.addEventListener("error", () => {
      // Set fallback image if provided, otherwise use a default placeholder
      const fallbacks = binding.value && binding.value.fallbacks;

      if (fallbacks && fallbacks.length > 0) {
        // Loop through the fallback images
        let fallbackIndex = 0;

        const tryFallback = () => {
          el.src = fallbacks[fallbackIndex];

          // Check if the current fallback image loaded successfully
          el.addEventListener("load", () => {
            el.classList.remove("hidden"); // Show the image
          });

          el.addEventListener("error", () => {
            // If the current fallback fails to load, try the next one
            fallbackIndex++;
            if (fallbackIndex < fallbacks.length) {
              tryFallback();
            } else {
              // If none of the fallbacks load, set the source to a default placeholder
              el.src = "https://placehold.it/200x200?text=404";
            }
          });
        };

        // Start trying the fallbacks
        tryFallback();
      } else {
        // If no fallbacks are provided, set the source to a default placeholder
        el.src = "https://placehold.it/200x200?text=404";
      }
    });
  },
};
