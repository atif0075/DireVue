async function copyTextToClipboard(textToCopy, el) {
  try {
    await navigator.clipboard.writeText(textToCopy);
    el.dispatchEvent(new Event("copied"));
  } catch (error) {
    el.dispatchEvent(new Event("copyerror"));
  }
}

const applyModifiers = (text, modifiers) => {
  let modifiedText = text;
  if (modifiers.uppercase) {
    modifiedText = modifiedText.toUpperCase();
  } else if (modifiers.lowercase) {
    modifiedText = modifiedText.toLowerCase();
  } else if (modifiers.capitalize) {
    modifiedText = modifiedText.charAt(0).toUpperCase() + modifiedText.slice(1);
  } else if (modifiers.capitalizeAll) {
    modifiedText = modifiedText
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return modifiedText;
};

const clickCopyToClipboard = async (el, textToCopy, modifiers) => {
  const modifiedText = applyModifiers(textToCopy, modifiers);
  await copyTextToClipboard(modifiedText, el);
};

const handleCopy = (el, binding) => {
  let textToCopy;
  if (binding.arg === "id") {
    const elem = document.getElementById(binding.value);
    if (elem) {
      textToCopy = elem.innerText;
    }
  } else {
    textToCopy = binding.value;
  }

  const clickHandler = () =>
    clickCopyToClipboard(el, textToCopy, binding.modifiers);

  el.addEventListener("click", clickHandler);

  // Save the reference to the click handler for removal during the update
  el.clickCopyToClipboard = clickHandler;
};

export const vCopy = {
  mounted(el, binding) {
    handleCopy(el, binding);
  },
  updated(el, binding) {
    el.removeEventListener("click", el.clickCopyToClipboard);
    handleCopy(el, binding);
  },
  unmounted(el) {
    // Remove the click event listener when the directive is unmounted
    el.removeEventListener("click", el.clickCopyToClipboard);
  },
};
