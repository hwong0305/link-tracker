import express from 'express';
import db from '../db';
import { encryptURL, decryptURL } from '../auth/crypto';

const { Post } = db;
const postRouter = express.Router();

postRouter.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
    const decryptedPosts = posts.map(post => {
      return {
        ...post.toJSON(),
        link: decryptURL(post.link),
      };
    });
    res.json(decryptedPosts);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error getting all posts');
  }
});

postRouter.get('/:id', async (req, res) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.id } });
    const decryptedUrl = decryptURL(post.link);
    res.json({ title: post.title, link: decryptedUrl });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error getting a post');
  }
});

postRouter.post('/', async (req, res) => {
  try {
    const { link, title } = req.body;
    if (!link || !title) {
      return res.status(400).send('Title or Link fiels are not filled out');
    }
    const hash = encryptURL(link);
    const { id: UserId } = req.user;
    const post = await Post.create({ link: hash, title, UserId });
    const postJ = { ...post.toJSON(), link };
    res.json(postJ);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error creating a post');
  }
});

export default postRouter;
