require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');
const express = require('express');
const path = require('path');

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, '../../frontend/build')));

// For any route not handled by API routes, serve index.html
app.get('*', (req, res) => {
  console.log(path.join(__dirname, '../../frontend/build', 'index.html'))
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

// Database connection
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

