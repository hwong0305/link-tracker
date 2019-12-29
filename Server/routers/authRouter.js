import express from 'express';
import { hashPassword } from '../auth/crypto';
import db from '../db';

const { User } = db;
const authRouter = express.Router();

authRouter.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = User.findOne({ where: { username } });
    if (!existingUser) {
      return res.status(400).send('User already exists');
    }
    const hash = await hashPassword(password);
    const user = await User.create({ username, password: hash });
    res.json(user);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

export default authRouter;
