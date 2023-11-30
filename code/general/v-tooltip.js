import { onBeforeUnmount } from "vue";

export const vToolTip = {
  mounted(el, binding) {
    // Create the tooltip element
    const tooltipEl = document.createElement("div");
    tooltipEl.classList.add("tooltip");
    tooltipEl.style.position = "absolute";
    tooltipEl.style.visibility = "hidden";
    tooltipEl.style.opacity = 0;
    tooltipEl.style.transition = "opacity 0.2s";
    tooltipEl.style.padding = "10px";
    tooltipEl.style.zIndex = 10;
    tooltipEl.style.textAlign = "center"; // Center the text

    // Add the arrow element
    const arrowEl = document.createElement("div");
    arrowEl.classList.add("tooltip-arrow");
    tooltipEl.appendChild(arrowEl);

    // Add the tooltip content
    tooltipEl.textContent = binding.value;

    // Position the tooltip
    const showTooltip = () => {
      tooltipEl.style.visibility = "visible";
      tooltipEl.style.opacity = 1;

      const elRect = el.getBoundingClientRect();
      const tooltipRect = tooltipEl.getBoundingClientRect();
      const arrowSize = 8;

      // handle all 4 positions by modifiers top, right, bottom, left
      if (binding.modifiers.top) {
        tooltipEl.classList.add("tooltip-top");
        tooltipEl.style.top = `${
          elRect.top - tooltipRect.height - arrowSize
        }px`;
        tooltipEl.style.left = `${
          elRect.left + elRect.width / 2 - tooltipRect.width / 2
        }px`;
        arrowEl.style.top = `${tooltipRect.height - 1}px`;
        arrowEl.style.left = `${tooltipRect.width / 2 - arrowSize}px`;
      } else if (binding.modifiers.right) {
        tooltipEl.classList.add("tooltip-right");
        tooltipEl.style.top = `${
          elRect.top + elRect.height / 2 - tooltipRect.height / 2
        }px`;
        tooltipEl.style.left = `${elRect.right + arrowSize}px`;
        arrowEl.style.top = `${tooltipRect.height / 2 - arrowSize}px`;
        arrowEl.style.left = `-${arrowSize}px`;
      } else if (binding.modifiers.bottom) {
        tooltipEl.classList.add("tooltip-bottom");
        tooltipEl.style.top = `${elRect.bottom + arrowSize}px`;
        tooltipEl.style.left = `${
          elRect.left + elRect.width / 2 - tooltipRect.width / 2
        }px`;
        arrowEl.style.top = `-${arrowSize}px`;
        arrowEl.style.left = `${tooltipRect.width / 2 - arrowSize}px`;
      } else if (binding.modifiers.left) {
        tooltipEl.classList.add("tooltip-left");
        tooltipEl.style.top = `${
          elRect.top + elRect.height / 2 - tooltipRect.height / 2
        }px`;
        tooltipEl.style.left = `${
          elRect.left - tooltipRect.width - arrowSize
        }px`;
        arrowEl.style.top = `${tooltipRect.height / 2 - arrowSize}px`;
        arrowEl.style.left = `${tooltipRect.width - 1}px`;
      } else {
        // default to top
        tooltipEl.classList.add("tooltip-top");
        tooltipEl.style.top = `${
          elRect.top - tooltipRect.height - arrowSize
        }px`;
        tooltipEl.style.left = `${
          elRect.left + elRect.width / 2 - tooltipRect.width / 2
        }px`;
        arrowEl.style.top = `${tooltipRect.height - 1}px`;
        arrowEl.style.left = `${tooltipRect.width / 2 - arrowSize}px`;
      }
    };

    const hideTooltip = () => {
      tooltipEl.style.visibility = "hidden";
      tooltipEl.style.opacity = 0;
    };

    el.addEventListener("mouseenter", showTooltip);
    el.addEventListener("mouseleave", hideTooltip);

    el.addEventListener("mouseenter", showTooltip);
    el.addEventListener("mouseleave", hideTooltip);

    // Ensure cleanup when component is unmounted
    onBeforeUnmount(() => {
      el.removeEventListener("mouseenter", showTooltip);
      el.removeEventListener("mouseleave", hideTooltip);
      el.removeChild(tooltipEl);
    });

    // Attach the tooltip and arrow elements to the element
    el.appendChild(tooltipEl);
  },
};
