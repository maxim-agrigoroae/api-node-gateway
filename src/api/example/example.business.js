const constants = require('api-node-common/constants');
const apiAdapter = require('api-node-common/resources/apiAdapter');
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

module.exports = {
  list() {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  }
}
