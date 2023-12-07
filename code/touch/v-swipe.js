export const vSwipe = {
    mounted(el, binding) {
      let startX, startY;
      const allowedDirection = binding.arg || "all";
  
      function handleStart(e) {
        startX = e.clientX || (e.touches && e.touches[0].clientX);
        startY = e.clientY || (e.touches && e.touches[0].clientY);
  
        // Disable transitions when the user starts swiping
        el.style.transition = "none";
      }
  
      function handleMove(e) {
        if (startX === undefined || startY === undefined) {
          return;
        }
  
        const currentX = e.clientX || (e.touches && e.touches[0].clientX);
        const currentY = e.clientY || (e.touches && e.touches[0].clientY);
  
        const deltaX = currentX - startX;
        const deltaY = currentY - startY;
  
        if (
          (allowedDirection === "left" && deltaX < 0 && Math.abs(deltaX) > Math.abs(deltaY)) ||
          (allowedDirection === "right" && deltaX > 0 && Math.abs(deltaX) > Math.abs(deltaY)) ||
          (allowedDirection === "up" && deltaY < 0 && Math.abs(deltaY) > Math.abs(deltaX)) ||
          (allowedDirection === "down" && deltaY > 0 && Math.abs(deltaY) > Math.abs(deltaX)) ||
          allowedDirection === "all"
        ) {
          el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        }
      }
  
      function handleEnd(e) {
        if (startX === undefined || startY === undefined) {
          return;
        }
  
        const currentX =
          e.clientX || (e.changedTouches && e.changedTouches[0].clientX);
        const currentY =
          e.clientY || (e.changedTouches && e.changedTouches[0].clientY);
  
        const deltaX = currentX - startX;
        const deltaY = currentY - startY;
  
        // Enable transitions again
        el.style.transition = "";
  
        if (allowedDirection === "left" && deltaX < 0 && Math.abs(deltaX) > Math.abs(deltaY)) {
          binding.value("left");
        } else if (allowedDirection === "right" && deltaX > 0 && Math.abs(deltaX) > Math.abs(deltaY)) {
          binding.value("right");
        } else if (allowedDirection === "up" && deltaY < 0 && Math.abs(deltaY) > Math.abs(deltaX)) {
          binding.value("up");
        } else if (allowedDirection === "down" && deltaY > 0 && Math.abs(deltaY) > Math.abs(deltaX)) {
          binding.value("down");
        } else if (
          (allowedDirection === "horizontal" && Math.abs(deltaX) > Math.abs(deltaY)) ||
          (allowedDirection === "all" && Math.abs(deltaX) > Math.abs(deltaY))
        ) {
          binding.value(deltaX > 0 ? "right" : "left");
        } else if (
          (allowedDirection === "vertical" && Math.abs(deltaY) > Math.abs(deltaX)) ||
          (allowedDirection === "all" && Math.abs(deltaY) > Math.abs(deltaX))
        ) {
          binding.value(deltaY > 0 ? "down" : "up");
        } else {
          binding.value("none");
        }
  
        // Reset the position
        el.style.transform = "translate(0, 0)";
        startX = undefined;
        startY = undefined;
      }
  
      el.addEventListener("mousedown", handleStart);
      el.addEventListener("touchstart", handleStart);
  
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("touchmove", handleMove);
  
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchend", handleEnd);
  
      el._swipeCleanup = () => {
        el.removeEventListener("mousedown", handleStart);
        el.removeEventListener("touchstart", handleStart);
        window.removeEventListener("mousemove", handleMove);
        window.removeEventListener("touchmove", handleMove);
        window.removeEventListener("mouseup", handleEnd);
        window.removeEventListener("touchend", handleEnd);
      };
    },
  
    unmounted(el) {
      el._swipeCleanup();
    },
  };
  