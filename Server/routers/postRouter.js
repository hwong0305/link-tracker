import express from 'express';
import db from '../db';

const { Post } = db;
const postRouter = express.Router();

postRouter.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error getting all posts');
  }
});

postRouter.get('/:id', async (req, res) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.id } });
    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error getting a post');
  }
});

postRouter.post('/', async (req, res) => {
  try {
    const { link, title } = req.body;
    const { id: UserId } = req.user;
    const post = await Post.create({ link, title, UserId });
    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error creating a post');
  }
});

export default postRouter;
