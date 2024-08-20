// create web server
// 1. import express
// 2. create express object
// 3. create route
// 4. listen on port

// 1. import express
const express = require('express');

// 2. create express object
const app = express();

// 3. create route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// 4. listen on port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// run node comments.js
// open browser and type localhost:3000

// create comments
// 1. create comments array
// 2. create route to get comments
// 3. create route to add comment

// 1. create comments array
const comments = [
    { username: 'Alice', comment: 'I love cats' },
    { username: 'Bob', comment: 'I love dogs' }
];

// 2. create route to get comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// 3. create route to add comment
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.json(comments);
});

// run node comments.js
// open Postman
// GET localhost:3000/comments
// POST localhost:3000/comments
// body -> raw -> JSON -> { "username": "Charlie", "comment": "I love birds" } -> send