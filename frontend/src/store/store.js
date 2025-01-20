import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import goalReducer from './goalSlice';
import habitReducer from './habitSlice';
import journalReducer from './journalSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    habits: habitReducer,
    journal: journalReducer,
  },
});

export default store;