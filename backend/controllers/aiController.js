const { getAISuggestion } = require('../services/aiService');

/**
 * Get AI-generated suggestions.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getAISuggestionHandler = async (req, res) => {
  const { userInput } = req.body;

  try {
    const suggestion = await getAISuggestion(userInput);
    res.status(200).json({ suggestion });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch AI suggestion' });
  }
};

module.exports = { getAISuggestionHandler };