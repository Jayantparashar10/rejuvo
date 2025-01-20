const Habit = require('../models/Habit');

/**
 * Fetch all habits for a user.
 * @param {string} userId - The user's ID.
 * @returns {Promise<Array>} - The list of habits.
 */
const fetchHabits = async (userId) => {
  return await Habit.find({ userId });
};

/**
 * Add a new habit.
 * @param {string} name - The habit's name.
 * @param {string} frequency - The habit's frequency.
 * @param {string} userId - The user's ID.
 * @returns {Promise<Object>} - The created habit.
 */
const addHabit = async (name, frequency, userId) => {
  const habit = new Habit({ name, frequency, userId });
  await habit.save();
  return habit;
};

/**
 * Update an existing habit.
 * @param {string} id - The habit's ID.
 * @param {Object} updates - The updates to apply.
 * @param {string} userId - The user's ID.
 * @returns {Promise<Object>} - The updated habit.
 */
const updateHabit = async (id, updates, userId) => {
  const habit = await Habit.findById(id);
  if (!habit) {
    throw new Error('Habit not found');
  }

  if (habit.userId.toString() !== userId) {
    throw new Error('Unauthorized');
  }

  Object.assign(habit, updates);
  await habit.save();
  return habit;
};

module.exports = { fetchHabits, addHabit, updateHabit };