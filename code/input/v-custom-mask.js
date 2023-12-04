const setMaxLength = (el, length) => {
  el.setAttribute("maxlength", length);
};

function applyMask(el, value) {
  let mask = el.getAttribute("mask-data");

  setMaxLength(el, mask.length);
  let maskedValue = "";
  let maskArr = mask.split("");
  let valueArr = value.split("");
  let maskedArr = [];

  for (let i = 0; i < maskArr.length; i++) {
    const currentMaskChar = maskArr[i];
    const currentValueChar = valueArr[i];
    if (currentValueChar === undefined) {
      break;
    } else if (currentMaskChar === "@") {
      if (/^[a-zA-Z]$/.test(currentValueChar)) {
        maskedArr.push(currentValueChar);
        // watch for the next mask char, if not @ or #, add it to the masked value
        if (i + 1 < maskArr.length) {
          const nextMaskChar = maskArr[i + 1];
          if (nextMaskChar !== "@" && nextMaskChar !== "#") {
            maskedArr.push(nextMaskChar);
            i++;
          }
        }
      }
    } else if (currentMaskChar === "#") {
      if (/^\d$/.test(currentValueChar)) {
        maskedArr.push(currentValueChar);
        // watch for the next mask char, if not @ or #, add it to the masked value
        if (i + 1 < maskArr.length) {
          const nextMaskChar = maskArr[i + 1];
          if (nextMaskChar !== "@" && nextMaskChar !== "#") {
            maskedArr.push(nextMaskChar);
            i++;
          }
        }
      }
    } else {
      maskedArr.push(currentMaskChar);
    }
  }
  maskedValue = maskedArr.join("");
  return maskedValue;
}

function custom(el, binding, event) {
  if (!el || !binding || !binding.value) {
    return;
  }

  const mask = binding.value;
  if (typeof mask !== "string") {
    console.error("Invalid mask format");
    return;
  }

  function applyMaskOnInput() {
    let value = el.value;

    // Check if there is an existing value before applying the mask
    if (value) {
      let maskedValue = applyMask(el, value, event);
      el.value = maskedValue;
    }
  }

  // Apply the mask on input
  el.addEventListener("input", applyMaskOnInput);
}
export const vCustomMask = {
  mounted(el, binding) {
    el.setAttribute("mask-data", binding.value);
    el.addEventListener("input", () => {
      // check the first value matches the mask, if not then remove it
      let maskVal = el.getAttribute("mask-data");
      let maskArr = maskVal.split("");
      let valueArr = el.value.split("");
      if (maskArr[0] === "@") {
        if (!/^[a-zA-Z]$/.test(valueArr[0])) {
          el.value = "";
        }
      } else if (maskArr[0] === "#") {
        if (!/^\d$/.test(valueArr[0])) {
          el.value = "";
        }
      }
      custom(el, binding);
    });
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      el.setAttribute("mask-data", binding.value);
      let mask = binding.value;
      if (mask[0] != "#" && mask[0] != "@") {
        el.value = mask[0];
      }
    }
    el.addEventListener("input", () => {
      custom(el, binding);
    });
  },
};
