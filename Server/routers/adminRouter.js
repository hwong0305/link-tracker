import express from 'express';
import db from '../db';

const { User } = db;

const adminRouter = express.Router();

adminRouter.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

export default adminRouter;
