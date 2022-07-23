const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const postContorller = require('./controllers/post');
const pageContorller = require('./controllers/page');

const app = express();

const connect = async () => {
  try {
    mongoose.connect('mongodb://localhost/cleanblog-test-db');
    console.log('DB Connect');
  } catch (error) {
    console.log(error);
  }
};

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//ROUTES
app.get('/', postContorller.getPosts);
app.put('/post/edit/:id', postContorller.updatePost);
app.get('/posts/:id', postContorller.getPost);

app.post('/posts', postContorller.createPost);

app.delete('/post/:id', postContorller.deletePost);

app.get('/post/edit/:id', pageContorller.getEditPage);

app.get('/about', pageContorller.getAboutPage);
app.get('/add_post', pageContorller.getAddPage);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server is up');
  connect();
});
