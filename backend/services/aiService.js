const { ChatCompletionsClient, SystemMessage, UserMessage } = require('azure-ai-inference');
const { AzureKeyCredential } = require('azure-core');
const { azureInferenceKey, azureInferenceEndpoint, modelName } = require('../config/ai');

const client = new ChatCompletionsClient({
  endpoint: azureInferenceEndpoint,
  credential: new AzureKeyCredential(azureInferenceKey),
});

/**
 * Get AI-generated suggestions based on user input.
 * @param {string} userInput - The user's input.
 * @returns {Promise<string>} - The AI-generated suggestion.
 */
const getAISuggestion = async (userInput) => {
  try {
    const response = await client.complete({
      stream: false,
      messages: [
        new SystemMessage({
          content: 'You are a productivity coach. Help users set goals, track habits, and provide actionable insights.',
        }),
        new UserMessage({ content: userInput }),
      ],
      model: modelName,
    });

    return response.choices[0].message.content;
  } catch (error) {
    throw new Error('Failed to fetch AI suggestion');
  } finally {
    client.close();
  }
};

module.exports = { getAISuggestion };