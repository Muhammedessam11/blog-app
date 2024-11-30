const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Post');

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://mongo:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

app.post('/posts', async (req, res) => {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
});

// Server
app.listen(5000, () => console.log('Backend running on port 5000'));

