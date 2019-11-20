const fs = require('fs');
const express = require('express');
const app = express();
const axios = require('axios');
const flatCache = require('flat-cache');

const API_BASE_URL = 'https://swapi.co/api';
const API_ENDPOINTS = [
  'films',
  'people',
  'starships',
  'vehicles',
  'species',
  'planets'
];

// TODO: check versioning in flatCache
const cache = flatCache.load('dataCache5');

const flatCacheMiddleware = (req, res, next) => {
  let key = '__express__' + req.originalUrl || req.url;
  let cacheContent = cache.getKey(key);
  if (cacheContent) {
    res.send(cacheContent);
  } else {
    res.sendResponse = res.send;
    res.send = body => {
      cache.setKey(key, body);
      cache.save();
      res.sendResponse(body);
    };
    next();
  }
};

// app.listen(3001, () => console.log('Server is up!'));

app.get('/', (req, res, next) => {
  res.send('API root');
});

async function fetchPaginationAPI(URL, endpoint) {
  const response = await axios.get(`${URL}/${endpoint}`);
  const data = response ? response.data : null;
  const paginationCount = Math.ceil(data.count / 10);
  let promises = [];
  let result = [];

  result.push.apply(result, data.results);

  if (data.next) {
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
      })
    );
  }

  result.forEach(item => {
    let id = item.url.split('/')[item.url.split('/').length - 2];
    let imagePath = `./static/images/${endpoint}/${id}.jpg`;

    item['id'] = id;

    if (fs.existsSync(imagePath)) {
      item['image'] = `/images/${endpoint}/${id}.jpg`;
    } else {
      item['image'] = `/images/placeholder400x550.jpg`;
    }

    delete item['created'];
    delete item['edited'];

    if (endpoint === 'films') {
      item['name'] = item.title;
      delete item.title;
    }
  });

  return result;
}

app.get('/data', flatCacheMiddleware, async (req, res, next) => {
  let promises = [];
  let data = {};

  API_ENDPOINTS.forEach(endpoint =>
    promises.push(fetchPaginationAPI(API_BASE_URL, endpoint)),
  );

  await axios.all(promises).then(
    axios.spread((...responses) => {
      responses.forEach((res, index) => {
        data[API_ENDPOINTS[index]] = res;
      });
    })
  );

  data.people.forEach(person => {
    if (person.species[0]) {
      person.species[0] = data.species.find(
        specie => specie.url == person.species[0]
      ).name;
    }
  });

  res.json(data);
});

module.exports = {
  path: '/api',
  handler: app
};
