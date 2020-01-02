import express from 'express';
import cors from 'cors';
import cron from 'node-cron';
import Sequelize from 'sequelize';
import adminRouter from './routers/adminRouter';
import userRouter from './routers/userRouter';
import config from '../config/config';
import db, { sequelize } from './db';
import postRouter from './routers/postRouter';
import './helpers/passport';

import isAuthenticated from './helpers/authentication';

const { CLIENT_URL, PORT } = config;
const { Post } = db;
const { Op } = Sequelize;

const app = express();
app.use(
  cors({
    origin: CLIENT_URL,
  })
);
app.use(express.json()); // This replaces body-parser

app.use('/admin', adminRouter);
app.use('/posts', isAuthenticated, postRouter);
app.use('/users', userRouter);
app.get('/', (_req, res) => {
  res.send('Hello World');
});

sequelize.sync({ force: false }).then(() => {
  cron.schedule('0 0 * * 0-6', () => {
    console.log('---------------------');
    console.log('Running Cron Job');
    Post.destroy({
      where: {
        expiration: {
          [Op.lt]: new Date(),
        },
      },
    })
      .then(() => {
        console.log('deleted');
      })
      .catch(err => {
        console.log('error:', err);
      });
  });
  app.listen(PORT, () => {
    console.log(`Now listening on Port ${PORT}`);
  });
});
