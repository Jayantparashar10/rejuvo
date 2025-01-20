module.exports = {
    azureInferenceKey: process.env.AZURE_INFERENCE_KEY || 'your_azure_inference_key',
    azureInferenceEndpoint: process.env.AZURE_INFERENCE_ENDPOINT || 'https://models.inference.ai.azure.com',
    modelName: process.env.MODEL_NAME || 'Llama-3.3-70B-Instruct',
  };