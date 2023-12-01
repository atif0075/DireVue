export const vImageGallery = {
  mounted(el, binding) {
    const images = binding.value;
    const showItems = binding.arg || 4;
    const displayImages = images.slice(0, showItems);

    const mainElements = displayImages.map((item, index) => {
      const mainElement = document.createElement("main");

      mainElement.classList.add("v-image-gallery-mainElement");

      if (index === 3 && images.length > 3) {
        mainElement.classList.add("relative");
      } else if (index === showItems - 1 && images.length > showItems) {
        mainElement.classList.add("relative");
      } else if (images.length === 1) {
        mainElement.classList.add("col-span-2");
      } else {
        mainElement.classList.add("col-span-1");
      }

      if (images.length === 3 && index === 2) {
        mainElement.classList.remove("col-span-1");
        mainElement.classList.add("col-span-2");
      }

      const imgElement = document.createElement("img");
      imgElement.src = item;
      imgElement.alt = "";
      imgElement.classList.add("v-image-gallery-element");

      if (images.length === 3 && index === 2) {
        imgElement.classList.add("col-span-2");
      }

      if (index >= showItems) {
        imgElement.classList.add("v-image-gallery-blur");
      }

      imgElement.style.display = index < showItems ? "block" : "none";

      imgElement.addEventListener("click", () => {
        if (index === showItems - 1 && images.length > showItems) {
          this.OpenPreview();
        }
      });

      const divElement = document.createElement("div");
      divElement.className = "black-overlay";
      divElement.style.display =
        index === showItems - 1 && images.length > showItems ? "flex" : "none";

      const spanElement = document.createElement("span");
      spanElement.className = "v-image-gallery-spanElement";
      spanElement.textContent = `+${images.length - showItems}`;

      divElement.appendChild(spanElement);

      mainElement.appendChild(imgElement);
      mainElement.appendChild(divElement);

      return mainElement.outerHTML;
    });

    const html = `
          <div class="v-image-gallery-mainJoin">
            ${mainElements.join("")}
          </div>
        `;

    el.innerHTML = html;
  },
};
