(function () {
  const roleElements = document.querySelectorAll(".role-text");
  const glitchWrapper = document.querySelector(".glitch-wrapper");
  let currentIndex = 0;
  let prevIndex = -1;

  // Initialize
  function showRole(index) {
    if (prevIndex >= 0) {
      roleElements[prevIndex].classList.remove("active");
    }
    roleElements[index].classList.add("active");

    // Add glitch effect during transition
    glitchWrapper.classList.add("glitching");
    setTimeout(() => {
      glitchWrapper.classList.remove("glitching");
    }, 400); // Match animation duration

    prevIndex = index;
  }

  // Show the first role initially
  showRole(currentIndex);

  // Change every 3 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % roleElements.length;
    showRole(currentIndex);
  }, 3000);

  // Add random glitch effect occasionally
  setInterval(() => {
    if (Math.random() > 0.7) {
      // 30% chance of a random glitch
      const activeElem = document.querySelector(".role-text.active");
      if (activeElem) {
        activeElem.style.transform = `translate(${(Math.random() - 0.5) * 3}px, ${(Math.random() - 0.5) * 2}px)`;
        setTimeout(() => {
          activeElem.style.transform = "translate(0, 0)";
        }, 100);
      }
    }
  }, 500);
})();
