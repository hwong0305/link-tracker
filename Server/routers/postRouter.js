import express from 'express';
import db from '../db';
import { validatePost } from '../helpers/validation';

const ONE_MONTH = 1000 * 60 * 60 * 24 * 30;
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
    res.json({ title: post.title, link: post.link });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error getting a post');
  }
});

postRouter.post(
  '/',
  (req, res, next) => {
    const { link, title } = req.body;
    const { error } = validatePost({ link, title });
    if (error) {
      return res.status(400).send('Post information is not valid');
    }
    next();
  },
  async (req, res) => {
    try {
      const { expiration, link, title } = req.body;
      if (!link || !title || !expiration) {
        return res.status(400).send('Title or Link fields are not filled out');
      }
      const expirationDate =
        Date.now() + Number(expiration) * 1000 * 60 * 60 * 24;
      const { id: UserId } = req.user;
      const post = await Post.create({
        expiration: expirationDate,
        link,
        title,
        UserId,
      });
      const postJ = { ...post.toJSON(), link };
      res.json(postJ);
    } catch (err) {
      console.log(err);
      res.status(500).send('Error creating a post');
    }
  }
);

postRouter.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      return res.json({ status: 'Failed', error: 'Invalid Post ID' });
    }
    await post.destroy();
    res.json({
      status: 'Success',
      id: req.params.id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error deleting a post');
  }
});

postRouter.put('/:id', async (req, res) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      return res.status(400).send('Post does not exist');
    }
    const { shared } = req.body;
    post.shared = shared;
    post.save().then(() => {
      res.json(post);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error updating a post');
  }
});

postRouter.put('/extend/:id', async (req, res) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      return res.status(400).send('Post does not exist');
    }
    post.expiration = Date.now() + ONE_MONTH;
    await post.save();
    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error extending post');
  }
});

export default postRouter;
