const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
  const posts = await Post.find().sort('-createdAt');
  res.render('index', { posts });
};

exports.updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.title = req.body.title;
  post.detail = req.body.detail;

  post.save();
  res.redirect('/');
};
exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', { post });
};

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndRemove(req.params.id);
  res.redirect('/');
};
