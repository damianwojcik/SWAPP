const express = require('express');
const app = express();
const axios = require('axios');

const API_BASE_URL = 'https://swapi.co/api';
const API_ENDPOINTS = [
  'films',
  'people',
  'starships',
  'vehicles',
  'species',
  'planets',
];

app.get('/', (req, res, next) => {
  res.send('API root');
});

async function fetchPaginationAPI(URL) {
  const response = await axios.get(URL);
  const data = response ? response.data : null;
  const paginationCount = Math.ceil(data.count / 10);
  let promises = [];
  let result = [];

  result.push.apply(result, data.results);

  if (!data.next) return result;

  const nextUrl = data.next.split('=')[0];

  for (let page = 2; page <= paginationCount; page++) {
    let url = `${nextUrl}=${page}`;
    promises.push(axios.get(url));
  }

  await axios.all(promises).then(
    axios.spread((...responses) => {
      responses.forEach(res => {
        result.push.apply(result, res.data.results);
      });
    }),
  );

  return result;
}

app.get('/data', async (req, res, next) => {
  let promises = [];
  let data = {};

  API_ENDPOINTS.forEach(endpoint =>
    promises.push(fetchPaginationAPI(`${API_BASE_URL}/${endpoint}`)),
  );

  await axios.all(promises).then(
    axios.spread((...responses) => {
      responses.forEach((res, index) => {
        data[API_ENDPOINTS[index]] = res;
      });
    }),
  );

  res.json(data);
});

module.exports = {
  path: '/api',
  handler: app,
};
