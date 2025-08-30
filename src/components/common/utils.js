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
