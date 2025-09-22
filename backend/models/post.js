// backend/models/Post.js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // título de publicación/servicio
    content: { type: String, required: true }, // descripción
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // relación con usuario
    category: { type: String, enum: ["web", "design", "remote", "other"], default: "other" }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
