/**
 * Default configuration file.
 */

const path = require('path');

const constants = require('../constants');

const root = path.normalize(`${__dirname}/../`);

module.exports = {
  env: process.env.NODE_ENV || constants.ENV.LOCAL,

  port: process.env.PORT || 3000,
  ip: process.env.IP || '0.0.0.0',

  root,

  paths: {
    tmpPath: path.join(root, './tmp'),
    uploadPath: path.join(root, './files'),
  },

  log: 'debug'
}
