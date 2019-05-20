/**
 * API gateway server setup.
 */
const http = require('http');
const express = require('express');
// Or another way to process config
const config = require('config');

const configureExpress = 'api-node-common/resources/express'

const gatewayRoutes = require('./api/routes');

// Setup server
const app = express();
const server = http.createServer(app);

configureExpress(app);
// configureAuth(app);
// .. all stuff

gatewayRoutes(app);

server.listen(config.port, config.ip, () => {
  console.info(`Express server gateway listening on ${config.port}, in ${app.get('env')} mode`);
});

module.exports = app
