import api from './api';

export const fetchHabits = async () => {
  try {
    const response = await api.get('/habits');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch habits';
  }
};

export const addHabit = async (habit) => {
  try {
    const response = await api.post('/habits', habit);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to add habit';
  }
};

export const updateHabit = async (id, habit) => {
  try {
    const response = await api.put(/habits/${id}, habit);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to update habit';
  }
};