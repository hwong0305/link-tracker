import express from 'express';
import { hashPassword, comparePassword } from '../auth/crypto';
import db from '../db';

const { User } = db;
const authRouter = express.Router();

authRouter.post('/login', async (req, res) => {
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
    return res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error logging in');
  }
});

authRouter.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = User.findOne({ where: { username } });
    if (!existingUser) {
      return res.status(400).send('User already exists');
    }
    const hash = await hashPassword(password);
    const user = await User.create({ username, password: hash });
    return res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error registerting a user');
  }
});

export default authRouter;
