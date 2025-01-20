import api from './api';

export const fetchJournalEntries = async () => {
  try {
    const response = await api.get('/journal');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch journal entries';
  }
};

export const addJournalEntry = async (entry) => {
  try {
    const response = await api.post('/journal', entry);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to add journal entry';
  }
};

export const updateJournalEntry = async (id, entry) => {
  try {
    const response = await api.put('/journal/${id}', entry);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to update journal entry';
  }
};