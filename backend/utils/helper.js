/**
 * Format a date to a readable string.
 * @param {Date} date - The date to format.
 * @returns {string} - Formatted date string (e.g., "January 1, 2023").
 */
const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  /**
   * Capitalize the first letter of a string.
   * @param {string} str - The string to capitalize.
   * @returns {string} - Capitalized string.
   */
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  /**
   * Truncate a string to a specified length.
   * @param {string} str - The string to truncate.
   * @param {number} maxLength - The maximum length of the string.
   * @returns {string} - Truncated string with ellipsis if necessary.
   */
  const truncate = (str, maxLength) => {
    return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
  };
  
  /**
   * Generate a unique ID.
   * @returns {string} - A unique ID.
   */
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  
  module.exports = { formatDate, capitalize, truncate, generateId };