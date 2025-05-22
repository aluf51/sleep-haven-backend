const express = require('express');
const router = express.Router();

// Mock user data - in a real app, this would come from a database
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// @route   GET /api/users
// @desc    Get all users
// @access  Public
router.get('/', (req, res) => {
  res.json(users);
});

// @route   GET /api/users/:id
// @desc    Get user by ID
// @access  Public
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

module.exports = router;
