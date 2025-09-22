// backend/controllers/postController.js
const Post = require("../models/Post");

// crear post
exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body); // requiere author (id de User)
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// listar posts con usuario
exports.getPosts = async (_req, res) => {
  try {
    const posts = await Post.find().populate("author", "name email"); // populate = join con User
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
