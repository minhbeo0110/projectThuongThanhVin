// Common utility functions for the application

/**
 * Common redirect function
 * @param {string} path - The URL or path to redirect to
 * @param {boolean} newTab - Whether to open in new tab (default: false)
 */
export const redirectTo = (path, newTab = false) => {
  if (newTab) {
    window.open(path, '_blank');
  } else {
    window.location.href = path;
  }
};

/**
 * Scroll to a specific section with smooth behavior
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Offset from top (default: 80)
 */
export const scrollToSection = (sectionId, offset = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Scroll to top of the page with smooth behavior
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};