const Goal = require('../models/Goal');

/**
 * Fetch all goals for a user.
 * @param {string} userId - The user's ID.
 * @returns {Promise<Array>} - The list of goals.
 */
const fetchGoals = async (userId) => {
  return await Goal.find({ userId });
};

/**
 * Add a new goal.
 * @param {string} title - The goal's title.
 * @param {string} description - The goal's description.
 * @param {string} userId - The user's ID.
 * @returns {Promise<Object>} - The created goal.
 */
const addGoal = async (title, description, userId) => {
  const goal = new Goal({ title, description, userId });
  await goal.save();
  return goal;
};

/**
 * Update an existing goal.
 * @param {string} id - The goal's ID.
 * @param {Object} updates - The updates to apply.
 * @param {string} userId - The user's ID.
 * @returns {Promise<Object>} - The updated goal.
 */
const updateGoal = async (id, updates, userId) => {
  const goal = await Goal.findById(id);
  if (!goal) {
    throw new Error('Goal not found');
  }

  if (goal.userId.toString() !== userId) {
    throw new Error('Unauthorized');
  }

  Object.assign(goal, updates);
  await goal.save();
  return goal;
};

module.exports = { fetchGoals, addGoal, updateGoal };