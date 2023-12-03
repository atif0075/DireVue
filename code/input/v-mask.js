const setMaxLength = (el, length = 10) => {
  el.maxLength = length;
};

// mask string
const string = (el, event) => {
  isAlphabetic(event);
  el.value = el.value.replace(/[^A-Za-z]/g, "");
};

// mask number
const number = (el, event) => {
  isNumeric(event);
  // remove max length
  el.removeAttribute("maxlength");
  el.value = el.value.replace(/\D/g, "");
  // No fixed length for number
};

// mask time
const time = (el, event) => {
  isNumeric(event);
  el.value = el.value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1:$2")
    .replace(/(\d{2})(\d)/, "$1:$2");
  // control the length of the time
  setMaxLength(el, 8);
};

// mask date
const date = (el, event) => {
  isNumeric(event);
  el.value = el.value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2");
  // control the length of the date
  setMaxLength(el, 10);
};

// mask credit card
const creditCard = (el, event) => {
  isNumeric(event);
  el.value = el.value
    .replace(/\D/g, "")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2");

  setMaxLength(el, 19);
};

const allPatterns = [
  {
    name: "credit-card",
    function: creditCard,
  },
  {
    name: "date",
    function: date,
  },
  {
    name: "time",
    function: time,
  },
  {
    name: "number",
    function: number,
  },
  {
    name: "string",
    function: string,
  },
];

function handleInput(el, binding, e) {
  if (el) {
    const mask = binding.value;
    const pattern = allPatterns.find((item) => item.name === mask);
    if (pattern) {
      pattern.function(el, e);
    }
  }
}
function isNumeric(event) {
  const keyCode = event.keyCode || event.which;
  const keyValue = String.fromCharCode(keyCode);

  // Allow numeric keys, backspace, delete, and decimal point
  const numericRegex = /[0-9]|\.|Backspace|Delete/;

  if (!numericRegex.test(keyValue)) {
    event.preventDefault();
    return false;
  }
}
function isAlphabetic(event) {
  const keyCode = event.keyCode || event.which;
  const keyValue = String.fromCharCode(keyCode);

  // Allow alphabetic keys, backspace, delete
  const alphabeticRegex = /[a-zA-Z]|Backspace|Delete/;

  if (!alphabeticRegex.test(keyValue)) {
    event.preventDefault();
    return false;
  }
}

export const vMask = {
  mounted(el, binding) {
    const handleInputFunction = (e) => handleInput(el, binding, e);

    el.addEventListener("input", handleInputFunction);

    // Store the reference to the handleInput function on the element
    el._handleInputFunction = handleInputFunction;
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      el.value = "";
      el.removeAttribute("maxlength");

      // Remove the previous event listener
      if (el._handleInputFunction) {
        el.removeEventListener("input", el._handleInputFunction);
      }

      // Create a new handleInput function and add the event listener
      const handleInputFunction = (e) => handleInput(el, binding, e);
      el._handleInputFunction = handleInputFunction;
      el.addEventListener("input", handleInputFunction);
    }
  },
};
