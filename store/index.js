import axios from 'axios';

const API_BASE_URL = 'https://swapi.co/api';

export const state = () => ({
  films: null,
  people: null,
  starships: null,
  vehicles: null,
  species: null,
  planets: null,
});

export const mutations = {
  SET_FILMS: (state, payload) => {
    state.films = payload;
  },
  SET_PEOPLE: (state, payload) => {
    state.people = payload;
  },
  SET_STARSHIPS: (state, payload) => {
    state.starships = payload;
  },
  SET_VEHICLES: (state, payload) => {
    state.vehicles = payload;
  },
  SET_SPECIES: (state, payload) => {
    state.species = payload;
  },
  SET_PLANETS: (state, payload) => {
    state.planets = payload;
  },
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('fetchFilms');
    await dispatch('fetchPeople');
    await dispatch('fetchStarships');
    await dispatch('fetchVehicles');
    await dispatch('fetchSpecies');
    await dispatch('fetchPlanets');
  },
  async fetchFilms({ commit }) {
    const { data } = await axios.get(`http://localhost:3000/api/films`);
    commit('SET_FILMS', data);
  },
  async fetchPeople({ commit }) {
    const { data } = await axios.get(`http://localhost:3000/api/people`);
    commit('SET_PEOPLE', data);
  },
  async fetchStarships({ commit }) {
    const { data } = await axios.get(`http://localhost:3000/api/starships`);
    commit('SET_STARSHIPS', data);
  },
  async fetchVehicles({ commit }) {
    const { data } = await axios.get(`http://localhost:3000/api/vehicles`);
    commit('SET_VEHICLES', data);
  },
  async fetchSpecies({ commit }) {
    const { data } = await axios.get(`http://localhost:3000/api/species`);
    commit('SET_SPECIES', data);
  },
  async fetchPlanets({ commit }) {
    const { data } = await axios.get(`http://localhost:3000/api/planets`);
    commit('SET_PLANETS', data);
  },
};

export const getters = {
  getFilmByTitle: state => title => {
    const film = state.films.find(film => film.title.toLowerCase() === title);

    // TODO: make a helper function
    const updatedPeople = film.people.map(url => {
      return state.people.find(person => person.url === url).name;
    });
    const updatedPlanets = film.planets.map(url => {
      return state.planets.find(item => item.url === url).name;
    });
    const updatedStarships = film.starships.map(url => {
      return state.starships.find(item => item.url === url).name;
    });
    const updatedVehicles = film.vehicles.map(url => {
      return state.vehicles.find(item => item.url === url).name;
    });
    const updatedSpecies = film.species.map(url => {
      return state.species.find(item => item.url === url).name;
    });
    // TODO: .

    const updatedFilm = {
      ...film,
      people: updatedPeople,
      planets: updatedPlanets,
      starships: updatedStarships,
      vehicles: updatedVehicles,
      species: updatedSpecies,
    };

    return updatedFilm;
  },
  getPersonByName: state => name => {
    const person = state.people.find(
      person => person.name.toLowerCase() === name,
    );
    const updatedFilms = person.films.map(movie => {
      const film = state.films.find(film => film.url == movie);
      return film.title;
    });
    const updatedPerson = { ...person, films: updatedFilms };
    return updatedPerson;
  },
  getStarshipByName: state => name => {
    const starship = state.starships.find(
      starship => starship.name.toLowerCase() === name,
    );
    const updatedFilms = starship.films.map(movie => {
      const film = state.films.find(film => film.url == movie);
      return film.title;
    });
    const updatedStarship = { ...starship, films: updatedFilms };
    return updatedStarship;
  },
  getVehicleByName: state => name => {
    const vehicle = state.vehicles.find(
      vehicle => vehicle.name.toLowerCase() === name,
    );
    const updatedFilms = vehicle.films.map(movie => {
      const film = state.films.find(film => film.url == movie);
      return film.title;
    });
    const updatedVehicle = { ...vehicle, films: updatedFilms };
    return updatedVehicle;
  },
  getSpecieByName: state => name => {
    const specie = state.species.find(
      specie => specie.name.toLowerCase() === name,
    );
    const updatedFilms = specie.films.map(movie => {
      const film = state.films.find(film => film.url == movie);
      return film.title;
    });
    const updatedSpecie = { ...specie, films: updatedFilms };
    return updatedSpecie;
  },
  getPlanetByName: state => name => {
    const planet = state.planets.find(
      planet => planet.name.toLowerCase() === name,
    );
    const updatedFilms = planet.films.map(movie => {
      const film = state.films.find(film => film.url == movie);
      return film.title;
    });
    const updatedPlanet = { ...planet, films: updatedFilms };
    return updatedPlanet;
  },
};
