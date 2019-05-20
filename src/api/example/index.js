/**
 * Define gateway routes.
 */

// const ApiRouter = require('api-node-common/resources/router');
// const router = new ApiRouter();
// or
const express = require('express');
const router = express.Router();

const constants = require('api-node-common/constants');
const ApiAdapter = require('api-node-common/resources/apiAdapter');
/*
  const axios = require('axios');

  module.exports = (baseURL) => {
    return axios.create({
      baseURL: baseURL,
    });
  }

  apiAdapter.js
*/

const ecosystem = require('../../ecosystem');

const api = apiAdapter(ecosystem.get(constants.ECO.EXAMPLE));

export default router
  .get('/', (req, res) => {
    api.get(req.path)
      .then(resp => {
        res.send(resp.data);
      });
  })
  .get('/:id', (req, res) => {
    api.get(req.path)
      .then(resp => {
        res.send(resp.data);
      });
  })
  .router();
