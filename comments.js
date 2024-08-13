// Create web server using express
const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Array to store comments
const comments = [];

// Route to get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Route to add a comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json(comment);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});