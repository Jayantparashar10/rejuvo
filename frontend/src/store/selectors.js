export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectGoals = (state) => state.goals.goals;
export const selectHabits = (state) => state.habits.habits;
export const selectJournalEntries = (state) => state.journal.entries;
export const selectIsLoading = (state) =>
  state.auth.isLoading || state.goals.isLoading || state.habits.isLoading || state.journal.isLoading;
export const selectError = (state) =>
  state.auth.error || state.goals.error || state.habits.error || state.journal.error;