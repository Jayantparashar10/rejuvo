const { log } = require('./logger');
/**
 * Save data to local storage.
 * @param {string} key - The key under which to store the data.
 * @param {any} value - The data to store.
 */
const saveToLocalStorage = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    log('Failed to save to local storage', 'error');
  }
};

/**
 * Load data from local storage.
 * @param {string} key - The key under which the data is stored.
 * @returns {any} - The stored data, or null if not found.
 */
const loadFromLocalStorage = (key) => {
  try {
    const serializedValue = localStorage.getItem(key);
    return serializedValue ? JSON.parse(serializedValue) : null;
  } catch (error) {
    log('Failed to load from local storage', 'error');
    return null;
  }
};

/**
 * Remove data from local storage.
 * @param {string} key - The key under which the data is stored.
 */
const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    log('Failed to remove from local storage', 'error');
  }
};

module.exports = { saveToLocalStorage, loadFromLocalStorage, removeFromLocalStorage };