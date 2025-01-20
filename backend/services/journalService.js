const JournalEntry = require('../models/JournalEntry');

/**
 * Fetch all journal entries for a user.
 * @param {string} userId - The user's ID.
 * @returns {Promise<Array>} - The list of journal entries.
 */
const fetchJournalEntries = async (userId) => {
  return await JournalEntry.find({ userId });
};

/**
 * Add a new journal entry.
 * @param {string} content - The journal entry's content.
 * @param {string} userId - The user's ID.
 * @returns {Promise<Object>} - The created journal entry.
 */
const addJournalEntry = async (content, userId) => {
  const entry = new JournalEntry({ content, userId });
  await entry.save();
  return entry;
};

/**
 * Update an existing journal entry.
 * @param {string} id - The journal entry's ID.
 * @param {string} content - The updated content.
 * @param {string} userId - The user's ID.
 * @returns {Promise<Object>} - The updated journal entry.
 */
const updateJournalEntry = async (id, content, userId) => {
  const entry = await JournalEntry.findById(id);
  if (!entry) {
    throw new Error('Journal entry not found');
  }

  if (entry.userId.toString() !== userId) {
    throw new Error('Unauthorized');
  }

  entry.content = content;
  await entry.save();
  return entry;
};

module.exports = { fetchJournalEntries, addJournalEntry, updateJournalEntry };