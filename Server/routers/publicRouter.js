import express from 'express';
import db from '../db';

const publicRouter = express.Router();
const { Post } = db;

publicRouter.get('/', (req, res) => {
  res.send('Hello World');
});

publicRouter.get('/post/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findOne({ where: { id } });

    if (!post) {
      return res.status(404).send('Not Found');
    }
    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error getting post');
  }
});

export default publicRouter;
