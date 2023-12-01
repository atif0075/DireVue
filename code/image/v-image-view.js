const closeIcon = `<svg class='closeIconSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"/></svg>`;
const prevIcon = `<svg class='prevIconSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"/></svg>`;

function createButton(className, icon) {
  const button = document.createElement("button");
  button.classList.add(className);
  button.innerHTML = icon;
  return button;
}

export const vImageView = {
  mounted(el, binding) {
    const images = binding.value;
    const thumbnails = binding.modifiers.thumbnails;
    const loop = binding.modifiers.loop;

    el.addEventListener("click", () => {
      const currentIndex = { value: 0 };
      let fullscreenElement;
      let imgContainer;

      createFullscreenElement();

      function createFullscreenElement() {
        fullscreenElement = document.createElement("div");
        fullscreenElement.classList.add("fullscreen");

        // Container for images
        imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");
        fullscreenElement.appendChild(imgContainer);

        createImage();
        if (thumbnails) {
          createThumbnailBar();
        }

        document.body.appendChild(fullscreenElement);

        // Close fullscreen on backdrop click
        fullscreenElement.addEventListener("click", (event) => {
          if (event.target === fullscreenElement) {
            document.body.removeChild(fullscreenElement);
          }
        });
      }

      function createImage() {
        const img = document.createElement("img");
        img.src = images[currentIndex.value];
        img.classList.add("fullscreen-image");
        imgContainer.appendChild(img);

        // Create navigation buttons inside the img-container
        createNavigationButtons(img, currentIndex);
      }

      function createThumbnailBar() {
        const thumbnailBar = document.createElement("div");
        thumbnailBar.classList.add("thumbnail-bar");

        const thumbnailContainer = document.createElement("div");
        thumbnailContainer.classList.add("thumbnail-container");
        thumbnailBar.appendChild(thumbnailContainer);

        images.forEach((image, index) => {
          const thumbnail = createThumbnail(image, index);
          thumbnailContainer.appendChild(thumbnail);
        });

        fullscreenElement.appendChild(thumbnailBar);
      }

      function createThumbnail(image, index) {
        const thumbnail = document.createElement("div");
        thumbnail.classList.add("thumbnail");
        thumbnail.innerHTML = `<img src="${image}" alt="Thumbnail ${index}" />`;
        thumbnail.addEventListener("click", () => {
          currentIndex.value = index;
          updateImageVisibility();
        });
        return thumbnail;
      }

      function createNavigationButtons(img, currentIndex) {
        // Create close button
        const closeButton = createButton("close-button", closeIcon);
        closeButton.addEventListener("click", () => {
          document.body.removeChild(fullscreenElement);
        });
        imgContainer.appendChild(closeButton);

        // Create navigation buttons
        const nextButton = createButton("next-button", prevIcon);
        nextButton.addEventListener("click", () => {
          currentIndex.value = loop
            ? (currentIndex.value + 1) % images.length
            : Math.min(currentIndex.value + 1, images.length - 1);
          updateImageVisibility();
        });
        imgContainer.appendChild(nextButton);

        const prevButton = createButton("prev-button", prevIcon);
        prevButton.addEventListener("click", () => {
          currentIndex.value = loop
            ? (currentIndex.value - 1 + images.length) % images.length
            : Math.max(currentIndex.value - 1, 0);
          updateImageVisibility();
        });
        imgContainer.appendChild(prevButton);
      }

      function updateImageVisibility() {
        imgContainer.querySelector(".fullscreen-image").src =
          images[currentIndex.value];
      }
    });
  },
};
