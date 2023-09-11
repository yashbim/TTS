window.addEventListener('DOMContentLoaded', () => {
    const logoContainer = document.querySelector('.logo-container');
    const logoWrapper = document.querySelector('.logo-wrapper');
    const logoImages = document.querySelectorAll('.logo-wrapper img');
    const logoWidth = 110; // Width of each logo, adjust as needed
  
    // Set the width of the logo wrapper based on the number of logos
    logoWrapper.style.width = `${logoImages.length * logoWidth}px`; // Adjust the width as needed
  
    // Clone the logo images and append them to the logo wrapper
    logoImages.forEach((logoImage) => {
      const clone = logoImage.cloneNode(true);
      logoWrapper.appendChild(clone);
    });
  
    // Adjust the container width if needed
    logoContainer.style.width = '100%';
  
    // Initialize animation variables
    let animationDuration = (logoImages.length * logoWidth) / 60; // Adjust the duration as needed
    let animationPlayState = 'running';
    let animationIterationCount = 'infinite';
    let animationStartTime = 0;
  
    // Start the animation
    startLogoAnimation();
  
    // Pause the animation on hover
    logoContainer.addEventListener('mouseenter', () => {
      stopLogoAnimation();
    });
  
    // Resume the animation on mouse leave
    logoContainer.addEventListener('mouseleave', () => {
      resumeLogoAnimation();
    });
  
    function startLogoAnimation() {
      logoWrapper.style.animation = `scroll ${animationDuration}s linear ${animationPlayState} ${animationIterationCount}`;
      logoWrapper.style.animationDelay = `-${animationStartTime}s`;
    }
  
    function stopLogoAnimation() {
      const computedStyle = window.getComputedStyle(logoWrapper);
      animationPlayState = computedStyle.getPropertyValue('animation-play-state');
      animationIterationCount = computedStyle.getPropertyValue('animation-iteration-count');
      animationStartTime = parseFloat(computedStyle.getPropertyValue('animation-delay'));
  
      logoWrapper.style.animationPlayState = 'paused';
    }
  
    function resumeLogoAnimation() {
      logoWrapper.style.animationPlayState = 'running';
    }
  });
  