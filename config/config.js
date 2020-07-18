export default {
  API_URL: process.env.API_URL || 'https://linksrv.devwong.com',
  CLIENT_URL: process.env.CLIENT_URL || 'https://link.devwong.com',
  PORT: process.env.PORT || 8888,
  DB_NAME: process.env.DB_NAME || 'linktracker',
  DB_USER: process.env.DB_USER || 'linktracker',
  DB_PW: process.env.DB_PW || 'linktracker',
  SECRET: process.env.SECRET || 'somesecretphrase',
  URL_SECRET: process.env.URL_SECRET || 'secretsanta',
  ADMIN_KEY: process.env.ADMIN_KEY || '123',
};
