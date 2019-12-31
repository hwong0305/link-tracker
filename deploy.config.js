module.exports = {
  apps: {
    name: 'link.freedomains.dev',
    script:
      'npm run start:myproxy << /home/myproxy/.pm2/logs/link.freedomains.dev-out.log',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3024,
      ADMIN: 'A3uPmSvEs5H7FfgmjCUsqD3vsshwuRMwezneqXdA',
      WORKPATH: '/home/myproxy',
      API_URL: 'https://linksrv.hireme.fun',
    },
    error_file: '/home/myproxy/.pm2/logs/link.freedomains.dev-err.log',
    merge_logs: true,
  },
};
