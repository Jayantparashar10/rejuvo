const Goal = require('../models/Goal');

/**
 * Fetch all goals for the authenticated user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const fetchGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.userId });
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch goals' });
  }
};

/**
 * Add a new goal.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const addGoal = async (req, res) => {
  const { title, description } = req.body;

  try {
    const goal = new Goal({ title, description, userId: req.userId });
    await goal.save();
    res.status(201).json(goal);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add goal' });
  }
};

/**
 * Update an existing goal.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const updateGoal = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    const goal = await Goal.findById(id);
    if (!goal) {
      return res.status(404).json({ message: 'Goal not found' });
    }

    if (goal.userId.toString() !== req.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    goal.title = title || goal.title;
    goal.description = description || goal.description;
    goal.status = status || goal.status;

    await goal.save();
    res.status(200).json(goal);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update goal' });
  }
};

module.exports = { fetchGoals, addGoal, updateGoal };