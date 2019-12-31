module.exports = {
  apps: {
    name: 'link.hireme.fun',
    script:
      'npm run start:myproxy << /home/myproxy/.pm2/logs/link.hireme.fun-out.log',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3024,
      ADMIN: 'A3uPmSvEs5H7FfgmjCUsqD3vsshwuRMwezneqXdA',
      WORKPATH: '/home/myproxy',
      SECRET: 'hard3rc0d3r',
      ADMIN_KEY: 'hard3rc0d3r',
      CLIENT_URL: 'https://link.hireme.fun',
      API_URL: 'https://linksrv.hireme.fun',
    },
    error_file: '/home/myproxy/.pm2/logs/link.hireme.fun-err.log',
    merge_logs: true,
  },
};
