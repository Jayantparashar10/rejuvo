import api from './api';

export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Login failed';
  }
};

export const signup = async (email, password) => {
  try {
    const response = await api.post('/auth/signup', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Signup failed';
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};