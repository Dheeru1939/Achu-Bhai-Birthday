// api/index.js
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from "public"
app.use(express.static(path.join(__dirname, '../public')));

// Example route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
