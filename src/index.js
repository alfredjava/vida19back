'use strict'
const server = require('./server/server');
const Service = require('./repository/repository');
const config = require('./config/');

process.on('uncaughtException', (err) => {
  console.log('Unhandled Exception', err);
});

process.on('uncaughtRejection', (err, promise) => {
  console.error('Unhandled Rejection', err)
});

const repo = new Service(config.repositorySettings);
server.start(config.serverSettings.url, config.serverSettings.port, repo);
