const express = require('express');
const cors = require('cors');
const app = express();

// Import routes
const applicationsRouter = require('./routes/applications');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', applicationsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
// mars-applications?retryWrites=true&w=majority