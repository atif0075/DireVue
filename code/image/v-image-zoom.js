const closeIcon = `<svg class='closeIconSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"/></svg>`;
export const vImageZoom = {
  mounted(el) {
    let isZoomed = false;
    let originalTransform = null;
    let image;
    function handleImageClick(event) {
      if (isZoomed) {
        el.style.transition = "transform 0.3s ease"; // Apply transition for closing
        el.style.transform = originalTransform;
        isZoomed = false;
        document.querySelector(".v-image-zoom-container").remove();
      } else {
        const body = document.querySelector("body");

        // Create the backdrop container
        const backDrop = document.createElement("div");
        backDrop.classList.add("v-image-zoom-container");
        body.appendChild(backDrop);

        // Create the image wrapper
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("v-image-zoom-imageWrapper");
        backDrop.appendChild(imageWrapper);

        //   close button
        const closeButton = document.createElement("button");
        closeButton.classList.add("close-button");
        closeButton.innerHTML = closeIcon;
        closeButton.addEventListener("click", handleClose);
        imageWrapper.appendChild(closeButton);

        // Clone the clicked image
        image = event.target.cloneNode(true);
        image.classList.add("v-image-zoom-img");
        image.style.transform = "scale(0.5)";
        imageWrapper.appendChild(image);

        // Save the original transform
        originalTransform = getComputedStyle(el).transform;

        // Delay the initial transition until after rendering
        setTimeout(() => {
          image.style.transition = "transform 0.3s ease";
          image.style.transform = "scale(1)"; // Apply transition for opening
          isZoomed = true;
        }, 0);

        // Add click event to close zoom on backdrop
        backDrop.addEventListener("click", handleBackdropClick);
      }
    }
    function handleBackdropClick(event) {
      if (event.target === image || event.target.closest(".close-button")) {
        event.preventDefault(); // Prevent the click from propagating
        return;
      }

      image.style.transition = "transform 0.3s ease"; // Apply transition for closing
      image.style.transform = "scale(0.5)";
      isZoomed = false;

      setTimeout(() => {
        document.querySelector(".v-image-zoom-container").remove();
      }, 250);
    }
    function handleClose() {
      image.style.transition = "transform 0.3s ease"; // Apply transition for closing
      image.style.transform = "scale(0.5)";
      isZoomed = false;

      setTimeout(() => {
        document.querySelector(".v-image-zoom-container").remove();
      }, 250);
    }

    el.addEventListener("click", handleImageClick);

    el.addEventListener("touchstart", handleImageClick);
  },
};
