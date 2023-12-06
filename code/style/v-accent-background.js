function shades(rgbSplit) {
  let rgb = rgbSplit.replace(/[^\d,]/g, "").split(",");
  console.log(rgb);
  let r = rgb[0];
  let g = rgb[1];
  let b = rgb[2];
  let shade = [];

  for (let i = 0; i < 5; i++) {
    shade.push(`rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`);
    r = Math.round(r / 1.5);
    g = Math.round(g / 1.5);
    b = Math.round(b / 1.5);
  }

  return shade;
}

export const vAccentBackground = {
  mounted(el, binding) {
    let bgColor = window.getComputedStyle(el).backgroundColor;
    console.log(bgColor);
    // Create shade color: 20% darker than bgColor, closer to black
    const shade = shades(bgColor);
    console.log(shade);
    // Colors for hover and active states
    const hoverColor = binding.value
      ? binding.value.hover
        ? binding.value.hover
        : shade[1]
      : shade[1];
    const activeColor = binding.value
      ? binding.value.active
        ? binding.value.active
        : shade[2]
      : shade[2];

    // Add hover listener
    el.addEventListener("mouseenter", () => {
      el.style.backgroundColor = hoverColor;
    });

    // Remove hover listener
    el.addEventListener("mouseleave", () => {
      el.style.backgroundColor = bgColor;
    });

    // Add active listener
    el.addEventListener("mousedown", () => {
      el.style.backgroundColor = activeColor;
    });

    // Remove active listener
    el.addEventListener("mouseup", () => {
      el.style.backgroundColor = bgColor;
    });
  },
};
