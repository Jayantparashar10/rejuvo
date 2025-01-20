import api from '../services/api';

/**
 * Fetch data from an API endpoint.
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @returns {Promise<any>} - The fetched data.
 */
export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch data';
  }
};

/**
 * Post data to an API endpoint.
 * @param {string} endpoint - The API endpoint to post data to.
 * @param {any} data - The data to post.
 * @returns {Promise<any>} - The response data.
 */
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to post data';
  }
};