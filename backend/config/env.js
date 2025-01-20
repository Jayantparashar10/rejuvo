const { error } = require('winston');

const validateEnv = () => {
  const requiredEnvVars = [
    'MONGO_URI',
    'JWT_SECRET',
    'AZURE_INFERENCE_KEY',
    'AZURE_INFERENCE_ENDPOINT',
    'MODEL_NAME',
  ];

  const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);

  if (missingVars.length > 0) {
    winston.error(`Missing required environment variables: ${missingVars.join(', ')}`);
    process.exit(1);
  }
};

module.exports = validateEnv;