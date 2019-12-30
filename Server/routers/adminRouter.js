import express from 'express';
import db from '../db';

const { Post, User } = db;

const adminRouter = express.Router();

adminRouter.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({ include: [{ all: true }] });
    console.log(users);
    res.json(users || {});
  } catch (err) {
    res.status(500).send('Error getting users');
  }
});

adminRouter.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll({ include: [{ all: true }] });
    console.log(posts);
    res.json(posts || {});
  } catch (err) {
    res.status(500).send('Error getting users');
  }
});

export default adminRouter;
