document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  let lastScrollY = window.scrollY;
  let isMouseOverHeader = false;
  let headerTimeout;

  // Set initial position and add transition
  header.style.transition = "transform 0.3s ease";

  // Handle scroll events
  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;

    // Don't hide header if mouse is over it
    if (isMouseOverHeader) return;

    // Scrolling down - hide header
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      header.style.transform = "translateY(-100%)";
    }
    // Scrolling up - show header
    else {
      header.style.transform = "translateY(0)";
    }

    lastScrollY = currentScrollY;
  });

  // Handle mouse enter header area
  header.addEventListener("mouseenter", function () {
    isMouseOverHeader = true;
    header.style.transform = "translateY(0)";

    clearTimeout(headerTimeout);
  });

  // Handle mouse leave header area
  header.addEventListener("mouseleave", function () {
    isMouseOverHeader = false;

    // Set timeout to hide header if scrolled down and mouse leaves
    clearTimeout(headerTimeout);
    headerTimeout = setTimeout(() => {
      if (window.scrollY > 100) {
        header.style.transform = "translateY(-100%)";
      }
    }, 2000); // 2 seconds delay
  });

  // Create an invisible area above where the hidden header would be
  const headerTriggerArea = document.createElement("div");
  headerTriggerArea.style.position = "fixed";
  headerTriggerArea.style.width = "100%";
  headerTriggerArea.style.height = "20px";
  headerTriggerArea.style.top = "0";
  headerTriggerArea.style.left = "0";
  headerTriggerArea.style.zIndex = "99";
  document.body.appendChild(headerTriggerArea);

  // Show header when mouse enters trigger area
  headerTriggerArea.addEventListener("mouseenter", function () {
    header.style.transform = "translateY(0)";
    isMouseOverHeader = true;

    clearTimeout(headerTimeout);
  });
});
