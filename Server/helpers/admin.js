import config from '../../config/config';

const { ADMIN_KEY } = config;

export default (req, res, next) => {
  if (req.headers.admin === ADMIN_KEY) {
    return next();
  }
  return res.status(401).send('Unauthorized');
};
