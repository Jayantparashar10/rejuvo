/**
 * Validate an email address.
 * @param {string} email - The email to validate.
 * @returns {boolean} - True if the email is valid, false otherwise.
 */
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  /**
   * Validate a password.
   * @param {string} password - The password to validate.
   * @returns {boolean} - True if the password is valid, false otherwise.
   */
  const validatePassword = (password) => {
    return password.length >= 8;
  };
  
  /**
   * Validate a goal title.
   * @param {string} title - The title to validate.
   * @returns {boolean} - True if the title is valid, false otherwise.
   */
  const validateGoalTitle = (title) => {
    return title.length >= 3 && title.length <= 100;
  };
  
  /**
   * Validate a habit name.
   * @param {string} name - The name to validate.
   * @returns {boolean} - True if the name is valid, false otherwise.
   */
  const validateHabitName = (name) => {
    return name.length >= 3 && name.length <= 50;
  };
  
  module.exports = {
    validateEmail,
    validatePassword,
    validateGoalTitle,
    validateHabitName,
  };