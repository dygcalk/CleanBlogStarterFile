const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
  {
    title: String,
    detail: String,
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
