import axios from 'axios';

const API_BASE_URL = 'https://swapi.co/api';
const ENDPOINT_FILMS = `${API_BASE_URL}/films`;
const ENDPOINT_PEOPLE = `${API_BASE_URL}/people`;

export const state = () => ({
  films: null
});

export const mutations = {
  SET_FILMS: (state, payload) => {
    state.films = payload;
  }
};

export const actions = {
  async fetchFilms({ commit }) {
    const { data } = await axios.get(`${ENDPOINT_FILMS}`);
    commit('SET_FILMS', data.results);
  }
};

export const getters = {
  getFilmByTitle: state => title => {
    return state.films.find(film => film.title === title);
  }
};
