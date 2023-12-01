// vImageView.js
const closeIcon = `<svg class='closeIconSvg' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"/></svg>`;
const nextIcon = `<svg class='nextIconSvg' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7"/></svg>`;
const prevIcon = `<svg class='prevIconSvg' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 5l-6 7l6 7"/></svg>`;

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

      createFullscreenElement();

      function createFullscreenElement() {
        fullscreenElement = document.createElement("div");
        fullscreenElement.classList.add("fullscreen");

        createImages();
        if (thumbnails) {
          createThumbnailBar();
        }
        createCloseButton();
        createNavigationButtons();

        document.body.appendChild(fullscreenElement);

        // Close fullscreen on backdrop click
        fullscreenElement.addEventListener("click", (event) => {
          if (event.target === fullscreenElement) {
            document.body.removeChild(fullscreenElement);
          }
        });
      }

      function createImages() {
        images.forEach((image, index) => {
          const img = document.createElement("img");
          img.src = image;
          img.classList.add("fullscreen-image");
          if (index !== 0) {
            img.classList.add("hidden");
          }
          fullscreenElement.appendChild(img);
        });
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

      function createCloseButton() {
        const closeButton = createButton("close-button", closeIcon);
        closeButton.addEventListener("click", () => {
          document.body.removeChild(fullscreenElement);
        });
        fullscreenElement.appendChild(closeButton);
      }

      function createNavigationButtons() {
        const nextButton = createButton("next-button", nextIcon);
        nextButton.addEventListener("click", () => {
          currentIndex.value = loop
            ? (currentIndex.value + 1) % images.length
            : Math.min(currentIndex.value + 1, images.length - 1);
          updateImageVisibility();
        });
        fullscreenElement.appendChild(nextButton);

        const prevButton = createButton("prev-button", prevIcon);
        prevButton.addEventListener("click", () => {
          currentIndex.value = loop
            ? (currentIndex.value - 1 + images.length) % images.length
            : Math.max(currentIndex.value - 1, 0);
          updateImageVisibility();
        });
        fullscreenElement.appendChild(prevButton);
      }

      function updateImageVisibility() {
        fullscreenElement
          .querySelectorAll(".fullscreen-image")
          .forEach((img, index) => {
            img.classList.toggle("hidden", index !== currentIndex.value);
          });
      }
    });
  },
};
