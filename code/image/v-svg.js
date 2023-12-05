// Function to load and append SVG files to a specified element
function loadSVGFile(filePath, targetElement) {
  const defaultOptionsKey = "defaultOptionsKey"; // Unique key for each element

  // Use XMLHttpRequest for browser compatibility
  const xhr = new XMLHttpRequest();
  xhr.open("GET", filePath, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Check if the response text is empty
        if (xhr.responseText.trim() === "") {
          // Dispatch an "error" event on empty response
          targetElement.dispatchEvent(new Event("error"));
          console.error(
            `Error loading SVG file from ${filePath}: Empty response`
          );
          return;
        }

        // Verify if the path is a valid SVG
        if (xhr.responseText.trim().indexOf("<svg") !== 0) {
          // Dispatch an "error" event on invalid SVG
          targetElement.dispatchEvent(new Event("error"));
          console.log(
            "Error loading SVG file from " + filePath + ": Invalid SVG"
          );
          // Show default SVG
          targetElement.innerHTML = targetElement[defaultOptionsKey].svg;
          return;
        }

        // Create a new DOMParser
        const parser = new DOMParser();

        try {
          // Parse the SVG text to create a document
          const svgDoc = parser.parseFromString(
            xhr.responseText,
            "image/svg+xml"
          );

          // Get the root SVG element from the parsed document
          const svgElement = svgDoc.documentElement;

          // Get the default options specific to this element
          const elementDefaultOptions = targetElement[defaultOptionsKey];

          // Set the SVG element attributes
          svgElement.setAttribute("width", elementDefaultOptions.width);
          svgElement.setAttribute("height", elementDefaultOptions.height);
          svgElement.setAttribute("class", elementDefaultOptions.class);
          svgElement.setAttribute("style", elementDefaultOptions.style);
          svgElement.setAttribute("randomId", Math.random() + 1);

          // Replace the target element with the SVG element if keepParent is false
          if (!elementDefaultOptions.keepParent) {
            targetElement.parentNode.replaceChild(svgElement, targetElement);
          } else {
            // Add the SVG element to the target element if keepParent is true
            targetElement.appendChild(svgElement);
          }

          // Dispatch a "loaded" event
          targetElement.dispatchEvent(new Event("loaded"));
        } catch (parseError) {
          // Dispatch an "error" event on parsing error
          targetElement.dispatchEvent(new Event("error"));
          console.error(
            `Error parsing SVG file from ${filePath}: ${parseError.message}`
          );
        }
      } else {
        // Dispatch an "error" event on HTTP error
        targetElement.dispatchEvent(new Event("error"));
        console.error(
          `Error loading SVG file from ${filePath}: Status ${xhr.status}`
        );
      }
    }
  };
  xhr.send();
}

// Function to set default options for an element
function setDefaultOptions(el) {
  const width = el.getAttribute("svgWidth");
  const height = el.getAttribute("svgHeight");
  const style = el.getAttribute("svgStyle");
  const classAttr = el.getAttribute("svgClass");
  const keepParent = el.getAttribute("svgKeepParent");

  // Attach the default options to the element using a unique key
  el["defaultOptionsKey"] = {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m0 7l-1.333-1l-1.334 1L12 15l-1.333 1l-1.334-1L8 16"/></g></svg>`,
    width: width ? width : 24,
    height: height ? height : 24,
    style: style ? style : "",
    class: classAttr ? classAttr : "",
    keepParent: keepParent ? keepParent : false,
  };
}

export const VSvg = {
  mounted(el, binding) {
    // Set the default options for this element
    setDefaultOptions(el);
    // Use the binding value as the SVG file path
    loadSVGFile(`/assets/${binding.value}.svg`, el);
  },
};
