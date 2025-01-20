const axios = require('axios');

/**
 * Fetch data from an API endpoint.
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @returns {Promise<any>} - The fetched data.
 */
const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

/**
 * Post data to an API endpoint.
 * @param {string} endpoint - The API endpoint to post data to.
 * @param {any} data - The data to post.
 * @returns {Promise<any>} - The response data.
 */
const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to post data');
  }
};

module.exports = { fetchData, postData };