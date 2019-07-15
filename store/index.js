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
  async fetchFilms({ commit }) {
    const { data } = await axios.get(`${API_BASE_URL}/films`);

    if (data) {
      const films = data.results;
      commit('SET_FILMS', films);
    }
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
    const updatedCharacters = film.characters.map(character => {
      const person = state.people.find(person => person.url == character);
      return person.name;
    });
    const updatedFilm = { ...film, characters: updatedCharacters };
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
    return state.starships.find(
      starship => starship.name.toLowerCase() === name,
    );
  },
};
