const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const protect = require('../middleware/authMiddleware');

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new post
router.post('/', protect, async (req, res) => {
  // Create logic
  try {
  const newPost = await Post.create({
    ...req.body,
    author: req.user.userId // assigns logged-in user as author
  });
  res.status(201).json(newPost);
} catch (error) {
  res.status(500).json({ message: error.message });
}

});

// Update a post
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a post
router.delete('/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
