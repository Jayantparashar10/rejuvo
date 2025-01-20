/**
 * Log a message to the console.
 * @param {string} message - The message to log.
 * @param {string} level - The log level (e.g., "info", "warn", "error").
 */
export const log = (message, level = 'info') => {
    const timestamp = new Date().toISOString();
    switch (level) {
      case 'warn':
        console.warn(`[${timestamp}] WARN: ${message}`);
        break;
      case 'error':
        console.error(`[${timestamp}] ERROR: ${message}`);
        break;
      default:
        console.log(`[${timestamp}] INFO: ${message}`);
    }
  }
  