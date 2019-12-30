import express from 'express';
import cors from 'cors';
import adminRouter from './routers/adminRouter';
import authRouter from './routers/authRouter';
import config from './config/config';
import { sequelize } from './db';

const { PORT } = config;

const app = express();
app.use(cors());
app.use(express.json()); // This replaces body-parser

app.use('/admin', adminRouter);
app.use('/users', authRouter);
app.get('/', (req, res) => {
  res.send('Hello World');
});

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening on Port ${PORT}`);
  });
});
