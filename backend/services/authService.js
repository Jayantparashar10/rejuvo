const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { jwtSecret, jwtExpiration } = require('../config/auth');

/**
 * Register a new user.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<Object>} - The created user and a JWT token.
 */
const signup = async (email, password) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new User({ email, password: hashedPassword });
  await user.save();

  const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: jwtExpiration });
  return { user, token };
};

/**
 * Log in an existing user.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<Object>} - The logged-in user and a JWT token.
 */
const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: jwtExpiration });
  return { user, token };
};

module.exports = { signup, login };