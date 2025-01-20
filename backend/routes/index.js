const express = require('express');
const router = express.Router();

// Import all routes
const authRoutes = require('./authRoutes');
const goalRoutes = require('./goalRoutes');
const habitRoutes = require('./habitRoutes');
const journalRoutes = require('./journalRoutes');
const aiRoutes = require('./aiRoutes');

// Use routes
router.use('/auth', authRoutes);
router.use('/goals', goalRoutes);
router.use('/habits', habitRoutes);
router.use('/journal', journalRoutes);
router.use('/ai', aiRoutes);

module.exports = router;