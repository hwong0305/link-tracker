import express from 'express';
import { hashPassword, comparePassword } from '../auth/crypto';
import db from '../db';
import { signJwtToken } from '../auth/jwt';
import isAuthenticated from '../auth/authentication';

const { Post, User } = db;
const userRouter = express.Router();

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

userRouter.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).send('User does not exist');
    }
    const { password: hash } = user;
    const match = comparePassword(password, hash);
    if (!match) {
      return res.status(400).send('Invalid Password');
    }
    // Sequelize doesn't return a plain object. toJSON method converts it to JSON
    const userJSON = user.toJSON();
    const token = signJwtToken(userJSON);
    res.json({ user: userJSON, token });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error logging in');
  }
});

userRouter.post('/register', async (req, res) => {
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
    res.json({
      user: userJSON,
      token,
    });
    return res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error registering a user');
  }
});

export default userRouter;
