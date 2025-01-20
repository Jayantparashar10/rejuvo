import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entries: [],
  isLoading: false,
  error: null,
};

const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    fetchEntriesStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchEntriesSuccess(state, action) {
      state.isLoading = false;
      state.entries = action.payload;
    },
    fetchEntriesFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addEntryStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    addEntrySuccess(state, action) {
      state.isLoading = false;
      state.entries.push(action.payload);
    },
    addEntryFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateEntryStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    updateEntrySuccess(state, action) {
      state.isLoading = false;
      const index = state.entries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      if (index !== -1) {
        state.entries[index] = action.payload;
      }
    },
    updateEntryFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchEntriesStart,
  fetchEntriesSuccess,
  fetchEntriesFailure,
  addEntryStart,
  addEntrySuccess,
  addEntryFailure,
  updateEntryStart,
  updateEntrySuccess,
  updateEntryFailure,
} = journalSlice.actions;

export default journalSlice.reducer;