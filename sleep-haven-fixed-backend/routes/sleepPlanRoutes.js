const express = require('express');
const router = express.Router();

// Mock sleep plan data - in a real app, this would come from a database
const sleepPlans = [
  { 
    id: 1, 
    name: 'Basic Sleep Plan', 
    description: 'A simple sleep plan for beginners',
    duration: '8 hours',
    steps: [
      'Go to bed at the same time every night',
      'Avoid screens 1 hour before bedtime',
      'Keep your bedroom cool and dark'
    ]
  },
  { 
    id: 2, 
    name: 'Advanced Sleep Plan', 
    description: 'An advanced sleep plan for those with sleep issues',
    duration: '7-9 hours',
    steps: [
      'Practice meditation before sleep',
      'Use white noise machine',
      'Maintain consistent wake-up time',
      'Avoid caffeine after noon'
    ]
  }
];

// @route   GET /api/sleep-plans
// @desc    Get all sleep plans
// @access  Public
router.get('/', (req, res) => {
  res.json(sleepPlans);
});

// @route   GET /api/sleep-plans/:id
// @desc    Get sleep plan by ID
// @access  Public
router.get('/:id', (req, res) => {
  const sleepPlan = sleepPlans.find(p => p.id === parseInt(req.params.id));
  if (!sleepPlan) {
    return res.status(404).json({ message: 'Sleep plan not found' });
  }
  res.json(sleepPlan);
});

module.exports = router;
