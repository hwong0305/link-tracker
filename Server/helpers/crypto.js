import bcrypt from 'bcrypt';
// Using less secure crypto method to hash URLs
import CryptoJS from 'crypto-js';
import config from '../../config/config';

const SALT_ROUNDS = 12;
const { AES } = CryptoJS;
const { URL_SECRET } = config;

export const hashPassword = password => bcrypt.hash(password, SALT_ROUNDS);

export const comparePassword = (password, hash) =>
  bcrypt.compare(password, hash);

export const encryptURL = url => AES.encrypt(url, URL_SECRET).toString();

export const decryptURL = hash => {
  const bytes = AES.decrypt(hash, URL_SECRET);
  return bytes.toString(CryptoJS.enc.Utf8);
};
