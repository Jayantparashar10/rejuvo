import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goals: [],
  isLoading: false,
  error: null,
};

const goalSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    fetchGoalsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchGoalsSuccess(state, action) {
      state.isLoading = false;
      state.goals = action.payload;
    },
    fetchGoalsFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addGoalStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    addGoalSuccess(state, action) {
      state.isLoading = false;
      state.goals.push(action.payload);
    },
    addGoalFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateGoalStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    updateGoalSuccess(state, action) {
      state.isLoading = false;
      const index = state.goals.findIndex(
        (goal) => goal.id === action.payload.id
      );
      if (index !== -1) {
        state.goals[index] = action.payload;
      }
    },
    updateGoalFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchGoalsStart,
  fetchGoalsSuccess,
  fetchGoalsFailure,
  addGoalStart,
  addGoalSuccess,
  addGoalFailure,
  updateGoalStart,
  updateGoalSuccess,
  updateGoalFailure,
} = goalSlice.actions;

export default goalSlice.reducer;