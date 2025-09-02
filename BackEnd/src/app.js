const express = require('express');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

// mount ai routes
app.use('/ai', aiRoutes);

module.exports = app;
