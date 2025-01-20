const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

/**
 * Log a message.
 * @param {string} message - The message to log.
 * @param {string} level - The log level (e.g., "info", "warn", "error").
 */
const log = (message, level = 'info') => {
  logger.log({ level, message });
};

module.exports = { log, logger };