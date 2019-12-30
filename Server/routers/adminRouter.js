import express from 'express';
import db from '../db';

const { User } = db;

const adminRouter = express.Router();

adminRouter.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    console.log(users);
    res.json(users || {});
  } catch (err) {
    res.status(500).send('Error getting users');
  }
});

export default adminRouter;
