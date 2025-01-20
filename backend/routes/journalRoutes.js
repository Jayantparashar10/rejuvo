const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { fetchJournalEntries, addJournalEntry, updateJournalEntry } = require('../controllers/journalController');

// Fetch all journal entries (protected route)
router.get('/', authMiddleware, fetchJournalEntries);

// Add a new journal entry (protected route)
router.post(
  '/',
  authMiddleware,
  [
    body('content').notEmpty().withMessage('Content is required'),
  ],
  validateRequest,
  addJournalEntry
);

// Update an existing journal entry (protected route)
router.put(
  '/:id',
  authMiddleware,
  [
    body('content').notEmpty().withMessage('Content is required'),
  ],
  validateRequest,
  updateJournalEntry
);

module.exports = router;