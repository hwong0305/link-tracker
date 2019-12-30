import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../config/config';

const db = {};
const { DB_NAME, DB_USER, DB_PW } = config;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PW, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './linktracker.sqlite',
});

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== 'index.js' && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(model => {
  if (db[model].associate) {
    db[model].associate(db);
  }
});

export default db;
