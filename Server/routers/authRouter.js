import express from 'express';
import { hashPassword } from '../auth/crypto';

const authRouter = express.Router();

authRouter.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hash = await hashPassword(password);

  res.json({ username, password: hash });
});

export default authRouter;
