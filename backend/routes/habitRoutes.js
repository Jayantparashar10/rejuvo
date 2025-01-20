const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { fetchHabits, addHabit, updateHabit } = require('../controllers/habitController');

// Fetch all habits (protected route)
router.get('/', authMiddleware, fetchHabits);

// Add a new habit (protected route)
router.post(
  '/',
  authMiddleware,
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('frequency').isIn(['Daily', 'Weekly']).withMessage('Invalid frequency'),
  ],
  validateRequest,
  addHabit
);

// Update an existing habit (protected route)
router.put(
  '/:id',
  authMiddleware,
  [
    body('name').optional().trim(),
    body('frequency').optional().isIn(['Daily', 'Weekly']),
    body('streak').optional().isInt({ min: 0 }),
  ],
  validateRequest,
  updateHabit
);

module.exports = router;