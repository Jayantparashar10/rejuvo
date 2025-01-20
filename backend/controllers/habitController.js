const Habit = require('../models/Habit');

/**
 * Fetch all habits for the authenticated user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const fetchHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ userId: req.userId });
    res.status(200).json(habits);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch habits' });
  }
};

/**
 * Add a new habit.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const addHabit = async (req, res) => {
  const { name, frequency } = req.body;

  try {
    const habit = new Habit({ name, frequency, userId: req.userId });
    await habit.save();
    res.status(201).json(habit);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add habit' });
  }
};

/**
 * Update an existing habit.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const updateHabit = async (req, res) => {
  const { id } = req.params;
  const { name, frequency, streak } = req.body;

  try {
    const habit = await Habit.findById(id);
    if (!habit) {
      return res.status(404).json({ message: 'Habit not found' });
    }

    if (habit.userId.toString() !== req.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    habit.name = name || habit.name;
    habit.frequency = frequency || habit.frequency;
    habit.streak = streak || habit.streak;

    await habit.save();
    res.status(200).json(habit);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update habit' });
  }
};

module.exports = { fetchHabits, addHabit, updateHabit };