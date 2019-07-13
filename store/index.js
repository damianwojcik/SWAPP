import axios from 'axios';

const API_BASE_URL = 'https://swapi.co/api';
const ENDPOINT_PEOPLE = `${API_BASE_URL}/people`;

export const state = () => ({
  people: []
});

export const mutations = {
  SET_PEOPLE: (state, payload) => {
    state.people = payload;
  }
};

export const actions = {
  async fetchPeople({ commit }) {
    const response = await axios
      .get(`${ENDPOINT_PEOPLE}`)
      .catch(error => console.log(error));

    if (response.data) {
      commit('SET_PEOPLE', response.data);
    } else {
      // TODO: error handler
    }
  }
};
