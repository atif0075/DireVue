export const vImageFilter = {
  mounted(el, binding) {
    const { filter, value, arg } = binding.value;

    const applyFilters = () => {
      console.log("applyFilters");
      el.classList.add(filter);
      el.style.filter = `
        ${filter === "grayscale" ? `grayscale(${value || 100}%) ` : ""}
        ${filter === "blur" ? `blur(${value || 0}px) ` : ""}
        ${filter === "brightness" ? `brightness(${value || 100}%) ` : ""}
        ${filter === "contrast" ? `contrast(${value || 100}%) ` : ""}
        ${filter === "invert" ? "invert(100%) " : ""}
        ${filter === "opacity" ? `opacity(${value || 1}) ` : ""}
        ${filter === "saturate" ? `saturate(${value || 100}%) ` : ""}
        ${filter === "sepia" ? `sepia(${value || 0}%) ` : ""}
        ${filter === "hueRotate" ? `hue-rotate(${value || 0}deg) ` : ""}
        ${
          filter === "dropShadow"
            ? `drop-shadow(${value || "2px 2px 2px rgba(0, 0, 0, 0.5)"})`
            : ""
        }
      `;
    };

    const resetFilters = () => {
      el.style.filter = "none";
    };

    const onHover = binding.arg === "hover";
    const onClick = binding.arg === "click";
    console.log("onHover", onHover);

    if (onHover) {
      el.addEventListener("mouseenter", applyFilters);
      el.addEventListener("mouseleave", resetFilters);
    } else if (onClick) {
      el.addEventListener("click", applyFilters);
      el.addEventListener("dblclick", resetFilters);
    }
  },
};
