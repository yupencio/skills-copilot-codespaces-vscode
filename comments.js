// Create web server
const express = require('express');
const app = express();

// Create a comment
app.post('/comments', (req, res) => {
  res.json({ message: 'Comment created' });
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  res.json({ message: 'Comment updated' });
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.json({ message: 'Comment deleted' });
});

// Get a list of comments
app.get('/comments', (req, res) => {
  res.json({ message: 'Comments' });
});

// Get a single comment
app.get('/comments/:id', (req, res) => {
  res.json({ message: 'Comment' });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});