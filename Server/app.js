import express from 'express';
import cors from 'cors';
import adminRouter from './routers/adminRouter';
import userRouter from './routers/userRouter';
import config from './config/config';
import { sequelize } from './db';
import postRouter from './routers/postRouter';

const { PORT } = config;

const app = express();
app.use(cors());
app.use(express.json()); // This replaces body-parser

app.use('/admin', adminRouter);
app.use('/posts', postRouter);
app.use('/users', userRouter);
app.get('/', (req, res) => {
  res.send('Hello World');
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening on Port ${PORT}`);
  });
});
