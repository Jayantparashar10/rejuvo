import api from './api';

export const fetchGoals = async () => {
  try {
    const response = await api.get('/goals');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch goals';
  }
};

export const addGoal = async (goal) => {
  try {
    const response = await api.post('/goals', goal);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to add goal';
  }
};

export const updateGoal = async (id, goal) => {
  try {
    const response = await api.put(/goals/${id}, goal);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to update goal';
  }
};