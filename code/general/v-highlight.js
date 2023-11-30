export const vHighlight = {
  mounted(el, binding) {
    handleHighlight(el, binding);
  },
  updated(el, binding) {
    handleHighlight(el, binding);
  },
};

function handleHighlight(el, binding) {
  // Get the target text content
  const textContent = el.innerText;

  // Remove existing highlights
  el.innerHTML = textContent;

  // Initialize the count to zero
  let matchCount = 0;

  // Ensure that the binding value is provided and not empty
  if (binding.value) {
    // Get modifiers
    const { caseSensitive } = binding.modifiers;

    // Create a regular expression with modifiers for matching
    const flags = `${caseSensitive ? "" : "i"}g`;
    const regex = new RegExp(escapeRegExp(binding.value), flags);

    // Replace matching words with a span for highlighting
    const highlightedText = el.innerHTML.replace(regex, (match) => {
      matchCount++;
      return `<span class="highlight">${match}</span>`;
    });

    // Set the innerHTML of the element with the highlighted text
    el.innerHTML = highlightedText;
  }

  // Emit custom event to indicate how many matches were found
  // and the text that was searched for
  el.dispatchEvent(
    new CustomEvent("highlight", {
      detail: matchCount,
    })
  );
}

// Function to escape special characters in a string to use in a regular expression
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
