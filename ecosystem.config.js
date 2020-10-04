module.exports = {
  apps: [
    {
      name: 'tropical-bartender',
      script: 'src/app.js',
      watch: false,
      instances: 1,
      exec_mode: 'cluster'
    }
  ]
};
