const config = require('config');
const constants = require('api-node-common/constants');

module.exports = new Map([
  // '/api/example', '0.0.0.0:3001'
  [constants.ECO.EXAMPLE, config.eco.example.baseUrl],
  // ... another
])
