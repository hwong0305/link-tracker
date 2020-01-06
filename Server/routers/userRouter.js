import express from 'express';
import { hashPassword, comparePassword } from '../helpers/crypto';
import db from '../db';
import { signJwtToken } from '../helpers/jwt';
import isAuthenticated from '../helpers/authentication';
import { validateUser } from '../helpers/validation';

const { Post, User } = db;
const userRouter = express.Router();

const validUser = (req, res, next) => {
  const { username, password } = req.body;
  const { error } = validateUser({ username, password });
  if (error) {
    return res.status(400).send('Error with user information');
  }
  next();
};

userRouter.get('/posts', isAuthenticated, async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: {
        UserId: req.user.id,
      },
    });
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).send('Problem getting posts from user');
  }
});

userRouter.post('/login', validUser, async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).send('User does not exist');
    }
    const { password: hash } = user;
    const match = await comparePassword(password, hash);
    if (!match) {
      return res.status(400).send('Invalid Password');
    }
    // Sequelize doesn't return a plain object. toJSON method converts it to JSON
    const userJSON = user.toJSON();
    const token = signJwtToken(userJSON);
    res.json({ username: userJSON.username, token });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error logging in');
  }
});

userRouter.post('/register', validUser, async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }
    const hash = await hashPassword(password);
    const user = await User.create({ username, password: hash });
    // Sequelize doesn't return a plain object. toJSON method converts it to JSON
    const userJSON = user.toJSON();
    const token = signJwtToken(userJSON);
    res.json({ username: userJSON.username, token });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error registering a user');
  }
});

// TODO use bookmark
userRouter.post('/adopt', isAuthenticated, async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.findOne({
      where: { id: req.user.id },
      include: [
        {
          model: Post,
          as: 'posts',
        },
      ],
    });
    const post = await Post.findOne({ where: { id } });
    user.posts.push(post);

    await user.save();
    res.json(user);

    if (!post) {
      return res.status(400).send('Post does not exist');
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Error adopting a song');
  }
});

export default userRouter;
