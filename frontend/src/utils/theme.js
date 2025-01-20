/**
 * Apply a theme to the application.
 * @param {string} theme - The theme to apply (e.g., "light", "dark").
 */
export const applyTheme = (theme) => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };
  
  /**
   * Get the current theme.
   * @returns {string} - The current theme (e.g., "light", "dark").
   */
  export const getCurrentTheme = () => {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  };