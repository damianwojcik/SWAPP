import axios from 'axios';

const API_BASE_URL = 'https://swapi.co/api';

export const state = () => ({
  films: null,
  people: null
});

export const mutations = {
  SET_FILMS: (state, payload) => {
    state.films = payload;
  },
  SET_PEOPLE: (state, payload) => {
    state.people = payload;
  }
};

export const actions = {
  async fetchFilms({ commit }) {
    const { data } = await axios.get(`${API_BASE_URL}/films`);
    commit('SET_FILMS', data.results);
  },
  async fetchPeople({ commit }) {
    const { data } = await axios.get(`http://localhost:3000/api/people`);
    commit('SET_PEOPLE', data);
  }
};

export const getters = {
  getFilmByTitle: state => title => {
    return state.films.find(film => film.title.toLowerCase() === title);
  },
  getPersonByName: state => name => {
    return state.people.find(person => person.name.toLowerCase() === name);
  }
};
