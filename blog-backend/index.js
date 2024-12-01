// index.js
const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');  // Importing the MySQL pool connection

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Route to fetch all posts from the database
app.get('/api/posts', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM posts');
    res.json(rows); // Send the result as JSON response
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send('Server Error');
  }
});

// Route to create a new post in the database
app.post('/api/posts', async (req, res) => {
  const { title, content } = req.body;
  try {
    const [result] = await pool.execute('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content]);
    res.status(201).json({ id: result.insertId, title, content });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).send('Server Error');
  }
});

// Route to delete a post
app.delete('/api/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.execute('DELETE FROM posts WHERE id = ?', [id]);
    res.status(200).send('Post deleted successfully');
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).send('Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
