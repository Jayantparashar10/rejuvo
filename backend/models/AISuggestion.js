const mongoose = require('mongoose');

const aiSuggestionSchema = new mongoose.Schema({
  query: {
    type: String,
    required: true,
    trim: true,
  },
  response: {
    type: String,
    required: true,
    trim: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('AISuggestion', aiSuggestionSchema);