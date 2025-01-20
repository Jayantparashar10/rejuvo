const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getAISuggestionHandler } = require('../controllers/aiController');

// Get AI-generated suggestions (protected route)
router.post(
  '/suggest',
  authMiddleware,
  [
    body('userInput').notEmpty().withMessage('User input is required'),
  ],
  validateRequest,
  getAISuggestionHandler
);

module.exports = router;