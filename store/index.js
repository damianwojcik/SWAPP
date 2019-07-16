import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const state = () => ({
  data: null,
});

export const mutations = {
  SET_DATA: (state, payload) => {
    state.data = payload;
  },
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('fetchData');
  },
  async fetchData({ commit }) {
    const { data } = await axios.get(`${API_BASE_URL}/data`);
    commit('SET_DATA', data);
  },
};

export const getters = {
  getFilmByTitle: state => title => {
    const film = state.data.films.find(
      film => film.title.toLowerCase() === title,
    );

    // TODO: make a helper function
    const updatedPeople = film.characters.map(url => {
      return state.data.people.find(person => person.url === url).name;
    });
    const updatedPlanets = film.planets.map(url => {
      return state.data.planets.find(item => item.url === url).name;
    });
    const updatedStarships = film.starships.map(url => {
      return state.data.starships.find(item => item.url === url).name;
    });
    const updatedVehicles = film.vehicles.map(url => {
      return state.data.vehicles.find(item => item.url === url).name;
    });
    const updatedSpecies = film.species.map(url => {
      return state.data.species.find(item => item.url === url).name;
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
    const person = state.data.people.find(
      person => person.name.toLowerCase() === name,
    );
    const updatedFilms = person.films.map(movie => {
      const film = state.data.films.find(film => film.url == movie);
      return film.title;
    });
    const updatedPerson = { ...person, films: updatedFilms };
    return updatedPerson;
  },
  getStarshipByName: state => name => {
    const starship = state.data.starships.find(
      starship => starship.name.toLowerCase() === name,
    );
    const updatedFilms = starship.films.map(movie => {
      const film = state.data.films.find(film => film.url == movie);
      return film.title;
    });
    const updatedStarship = { ...starship, films: updatedFilms };
    return updatedStarship;
  },
  getVehicleByName: state => name => {
    const vehicle = state.data.vehicles.find(
      vehicle => vehicle.name.toLowerCase() === name,
    );
    const updatedFilms = vehicle.films.map(movie => {
      const film = state.data.films.find(film => film.url == movie);
      return film.title;
    });
    const updatedVehicle = { ...vehicle, films: updatedFilms };
    return updatedVehicle;
  },
  getSpecieByName: state => name => {
    const specie = state.data.species.find(
      specie => specie.name.toLowerCase() === name,
    );
    const updatedFilms = specie.films.map(movie => {
      const film = state.data.films.find(film => film.url == movie);
      return film.title;
    });
    const updatedSpecie = { ...specie, films: updatedFilms };
    return updatedSpecie;
  },
  getPlanetByName: state => name => {
    const planet = state.data.planets.find(
      planet => planet.name.toLowerCase() === name,
    );
    const updatedFilms = planet.films.map(movie => {
      const film = state.data.films.find(film => film.url == movie);
      return film.title;
    });
    const updatedPlanet = { ...planet, films: updatedFilms };
    return updatedPlanet;
  },
};
