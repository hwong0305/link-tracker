import express from 'express';
import db from '../db';
import adminMiddleware from '../helpers/admin';

const { Post, User } = db;

const adminRouter = express.Router();

adminRouter.use(adminMiddleware);
adminRouter.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({ include: [{ all: true }] });
    res.json(users || {});
  } catch (err) {
    res.status(500).send('Error getting users');
  }
});

adminRouter.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll({ include: [{ all: true }] });
    res.json(posts || {});
  } catch (err) {
    res.status(500).send('Error getting users');
  }
});

export default adminRouter;
