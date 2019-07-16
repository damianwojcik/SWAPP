const express = require('express');
const app = express();
const axios = require('axios');

const API_BASE_URL = 'https://swapi.co/api';

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

// TODO: create single endpoint based on store fetchData
app.get('/films', async (req, res, next) => {
  const response = await fetchPaginationAPI(`${API_BASE_URL}/films`);
  const films = response;

  // TODO: rename without changing order in JSON
  const updatedFilms = films.map(film => {
    film['people'] = film['characters'];
    delete film['characters'];
    return film;
  });

  res.json(updatedFilms);
});

app.get('/people', async (req, res, next) => {
  const response = await fetchPaginationAPI(`${API_BASE_URL}/people`);

  res.json(response);
});

app.get('/starships', async (req, res, next) => {
  let response = await fetchPaginationAPI(`${API_BASE_URL}/starships`);

  res.json(response);
});

app.get('/vehicles', async (req, res, next) => {
  let response = await fetchPaginationAPI(`${API_BASE_URL}/vehicles`);

  res.json(response);
});

app.get('/species', async (req, res, next) => {
  let response = await fetchPaginationAPI(`${API_BASE_URL}/species`);

  res.json(response);
});

app.get('/planets', async (req, res, next) => {
  let response = await fetchPaginationAPI(`${API_BASE_URL}/planets`);

  res.json(response);
});

module.exports = {
  path: '/api',
  handler: app,
};
