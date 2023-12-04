export const VAvatar = {
  mounted(el, binding) {
    el.addEventListener("error", () => {
      const img = el;

      // Get width and height from inline styles
      let width = img.style.width;
      let height = img.style.height;
      let borderRadius = img.style.borderRadius; 

      // If not set via inline styles, try to get from computed styles
      if (!width || !height || !borderRadius || !backgroundColor) {
        const computedStyle = window.getComputedStyle(img);
        width = computedStyle.getPropertyValue("width");
        height = computedStyle.getPropertyValue("height");
        borderRadius = computedStyle.getPropertyValue("border-radius"); 
      }

      // If still not available, use naturalWidth and naturalHeight properties
      if (!width || !height) {
        const naturalWidth = img.naturalWidth;
        const naturalHeight = img.naturalHeight;
        width = naturalWidth ? `${naturalWidth}px` : null;
        height = naturalHeight ? `${naturalHeight}px` : null;
      }

      // Convert width and height to numbers
      const parsedWidth = parseFloat(width);
      const parsedHeight = parseFloat(height);

      // Convert border-radius to a number or percentage to pixels
      let parsedRadius;
      if (borderRadius.includes("%")) {
        console.log("borderRadius:", borderRadius);
        parsedRadius =
          (parseFloat(borderRadius) / 100) *
          Math.min(parsedWidth, parsedHeight);
      } else {
        parsedRadius = parseFloat(borderRadius);
      }

      // Check if parsing was successful and the values are valid
      if (
        !isNaN(parsedWidth) &&
        !isNaN(parsedHeight) &&
        parsedWidth > 0 &&
        parsedHeight > 0 &&
        !isNaN(parsedRadius)
      ) {
        // Create a div element to replace the img element
        const div = document.createElement("div");
        div.style.width = width;
        div.style.height = height;
        div.style.borderRadius = borderRadius; 
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        if (binding.arg) {
          let classes = binding.arg.split(" ");
          for (let i = 0; i < classes.length; i++) {
            div.classList.add(classes[i]);
          }
        }

        // Create text element
        const text = document.createElement("span");
        text.textContent = img.alt || "Avatar";
        text.style.width = "100%";
        text.style.height = "100%";
        text.style.display = "flex";
        text.style.justifyContent = "center";
        text.style.alignItems = "center";
        text.style.overflow = "hidden";
        text.style.userSelect = "none";

        // Append text to div
        div.appendChild(text);

        // Replace img with div
        img.parentNode.replaceChild(div, img);

        // Remove event listener
        el.removeEventListener("error", () => {});
      } else {
        console.log("Invalid width, height, or radius");
      }
    });
  },
  updated(el, binding) {
    //    watch for color changes
    console.log("updated", binding.value);
  },
};
