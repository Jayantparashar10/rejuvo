import React, { useState } from 'react';
import axios from 'axios';

const AISuggestionForm = () => {
  const [input, setInput] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    try {
      const response = await axios.post('/api/ai/suggest', { userInput: input });
      setSuggestion(response.data.suggestion);
    } catch (error) {
      console.error('Error fetching suggestion:', error);
      alert('Failed to fetch suggestion. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ask for suggestions (e.g., How can I reduce my carbon footprint?)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={4}
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Get Suggestion'}
        </button>
      </form>
      {suggestion && (
        <div className="mt-4 p-4 bg-gray-50 rounded">
          <h3 className="font-bold text-lg">AI Suggestion:</h3>
          <p className="mt-2 text-gray-700">{suggestion}</p>
        </div>
      )}
    </div>
  );
};

export default AISuggestionForm;