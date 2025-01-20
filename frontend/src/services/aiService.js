import api from './api';

export const getAISuggestion = async (userInput) => {
  try {
    const response = await api.post('/ai/suggest', { userInput });
    return response.data.suggestion;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch AI suggestion';
  }
};