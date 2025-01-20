const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { jwtSecret, jwtExpiration } = require('../config/auth');

/**
 * Register a new user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const user = new User({ email, password: hashedPassword });
    await user.save();

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: jwtExpiration,
    });

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

/**
 * Log in an existing user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: jwtExpiration,
    });

    res.status(200).json({ user, token });
  } catch (error) {    res.status(500).json({ message: 'Something went wrong' });
}
};

module.exports = { signup, login };