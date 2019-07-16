const express = require('express');
const app = express();
const axios = require('axios');

const API_BASE_URL = 'https://swapi.co/api';

app.get('/', (req, res, next) => {
  res.send('API root');
});

async function fetchPaginationAPI(URL) {
  let response = await axios.get(URL);
  let data = response ? response.data : null;
  let result = [];
  result.push.apply(result, data.results);

  while (data.next !== null) {
    response = await axios.get(data.next);
    data = response ? response.data : null;
    result.push.apply(result, data.results);
  }
  return result;
}

app.get('/films', async (req, res, next) => {
  const response = await axios.get(`${API_BASE_URL}/films`);
  const films = response.data.results;

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
