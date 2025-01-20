const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { fetchGoals, addGoal, updateGoal } = require('../controllers/goalController');

// Fetch all goals (protected route)
router.get('/', authMiddleware, fetchGoals);

// Add a new goal (protected route)
router.post(
  '/',
  authMiddleware,
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').optional().trim(),
  ],
  validateRequest,
  addGoal
);

// Update an existing goal (protected route)
router.put(
  '/:id',
  authMiddleware,
  [
    body('title').optional().trim(),
    body('description').optional().trim(),
    body('status').optional().isIn(['Not Started', 'In Progress', 'Completed']),
  ],
  validateRequest,
  updateGoal
);

module.exports = router;