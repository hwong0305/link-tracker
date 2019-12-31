import jwt from 'jsonwebtoken';
import config from '../../config/config';

const { SECRET } = config;

const ONE_WEEK = 60 * 60 * 24 * 7;

export const signJwtToken = obj => {
  return jwt.sign(obj, SECRET, { expiresIn: ONE_WEEK });
};
