const express = require('express');
const app = express();

const API_BASE_URL = 'https://swapi.co/api';

app.get('/', (req, res, next) => {
  res.send('API root');
});

app.get('/people', async (req, res, next) => {
  const axios = require('axios');
  let response = await axios.get(`${API_BASE_URL}/people`);
  let data = response ? response.data : null;
  let result = [];

  result.push.apply(result, data.results);

  while (data.next !== null) {
    response = await axios.get(data.next);
    data = response ? response.data : null;
    result.push.apply(result, data.results);
  }

  res.json(result);
});

module.exports = {
  path: '/api',
  handler: app
};
