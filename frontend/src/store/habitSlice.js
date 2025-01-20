import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habits: [],
  isLoading: false,
  error: null,
};

const habitSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    fetchHabitsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchHabitsSuccess(state, action) {
      state.isLoading = false;
      state.habits = action.payload;
    },
    fetchHabitsFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addHabitStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    addHabitSuccess(state, action) {
      state.isLoading = false;
      state.habits.push(action.payload);
    },
    addHabitFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateHabitStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    updateHabitSuccess(state, action) {
      state.isLoading = false;
      const index = state.habits.findIndex(
        (habit) => habit.id === action.payload.id
      );
      if (index !== -1) {
        state.habits[index] = action.payload;
      }
    },
    updateHabitFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchHabitsStart,
  fetchHabitsSuccess,
  fetchHabitsFailure,
  addHabitStart,
  addHabitSuccess,
  addHabitFailure,
  updateHabitStart,
  updateHabitSuccess,
  updateHabitFailure,
} = habitSlice.actions;

export default habitSlice.reducer;