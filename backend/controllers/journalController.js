
/**
 * Fetch all journal entries for the authenticated user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const fetchJournalEntries = async (req, res) => {
  try {
    const entries = await JournalEntry.find({ userId: req.userId });
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch journal entries' });
  }
};

/**
 * Add a new journal entry.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const addJournalEntry = async (req, res) => {
  const { content } = req.body;

  try {
    const entry = new JournalEntry({ content, userId: req.userId });
    await entry.save();
    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add journal entry' });
  }
};

/**
 * Update an existing journal entry.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const updateJournalEntry = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  try {
    const entry = await JournalEntry.findById(id);
    if (!entry) {
      return res.status(404).json({ message: 'Journal entry not found' });
    }

    if (entry.userId.toString() !== req.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    entry.content = content || entry.content;
    await entry.save();
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update journal entry' });
  }
};

module.exports = { fetchJournalEntries, addJournalEntry, updateJournalEntry };
