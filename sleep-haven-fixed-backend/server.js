const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route - simple response to verify it's working
app.get('/', (req, res) => {
  res.json({
    message: 'Sleep Haven Backend API is working!',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'success', 
    message: 'Sleep Haven API is running',
    timestamp: new Date().toISOString()
  });
});

// User routes
app.use('/api/users', require('./routes/userRoutes'));

// Sleep plans routes
app.use('/api/sleep-plans', require('./routes/sleepPlanRoutes'));

// Set port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
