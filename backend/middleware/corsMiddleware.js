const cors = require('cors');
const corsConfig = require('../config/cors');

/**
 * Configure CORS for the application.
 */
const corsMiddleware = cors(corsConfig);

module.exports = corsMiddleware;