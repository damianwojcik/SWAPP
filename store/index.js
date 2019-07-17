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
    const updatedCharacters = film.characters.map(
      url => state.data.people.find(item => item.url === url).name,
    );
    const updatedPlanets = film.planets.map(
      url => state.data.planets.find(item => item.url === url).name,
    );
    const updatedStarships = film.starships.map(
      url => state.data.starships.find(item => item.url === url).name,
    );
    const updatedVehicles = film.vehicles.map(
      url => state.data.vehicles.find(item => item.url === url).name,
    );
    const updatedSpecies = film.species.map(
      url => state.data.species.find(item => item.url === url).name,
    );

    const updatedFilm = {
      ...film,
      characters: updatedCharacters,
      planets: updatedPlanets,
      starships: updatedStarships,
      vehicles: updatedVehicles,
      species: updatedSpecies,
    };

    delete updatedFilm.created;
    delete updatedFilm.edited;
    delete updatedFilm.url;
    // TODO: .

    return updatedFilm;
  },
  getPersonByName: state => name => {
    const person = state.data.people.find(
      person => person.name.toLowerCase() === name,
    );

    const updatedFilms = person.films.map(
      url => state.data.films.find(item => item.url === url).title,
    );
    const updatedHomeworld = state.data.planets.find(
      item => item.url === person.homeworld,
    ).name;
    const updatedSpecies = person.species.map(
      url => state.data.species.find(item => item.url === url).name,
    );
    const updatedVehicles = person.vehicles.map(
      url => state.data.vehicles.find(item => item.url === url).name,
    );
    const updatedStarships = person.starships.map(
      url => state.data.starships.find(item => item.url === url).name,
    );

    const updatedPerson = {
      ...person,
      films: updatedFilms,
      homeworld: updatedHomeworld,
      species: updatedSpecies,
      starships: updatedStarships,
      vehicles: updatedVehicles,
    };

    delete updatedPerson.created;
    delete updatedPerson.edited;
    delete updatedPerson.url;

    return updatedPerson;
  },
  getStarshipByName: state => name => {
    const starship = state.data.starships.find(
      starship => starship.name.toLowerCase() === name,
    );

    const updatedFilms = starship.films.map(
      url => state.data.films.find(item => item.url === url).title,
    );
    const updatedPilots = starship.pilots.map(
      url => state.data.people.find(item => item.url === url).name,
    );
    const updatedStarship = {
      ...starship,
      films: updatedFilms,
      pilots: updatedPilots,
    };

    delete updatedStarship.created;
    delete updatedStarship.edited;
    delete updatedStarship.url;

    return updatedStarship;
  },
  getVehicleByName: state => name => {
    const vehicle = state.data.vehicles.find(
      vehicle => vehicle.name.toLowerCase() === name,
    );

    const updatedFilms = vehicle.films.map(
      url => state.data.films.find(item => item.url === url).title,
    );
    const updatedPilots = vehicle.pilots.map(
      url => state.data.people.find(item => item.url === url).name,
    );

    const updatedVehicle = {
      ...vehicle,
      films: updatedFilms,
      pilots: updatedPilots,
    };

    delete updatedVehicle.created;
    delete updatedVehicle.edited;
    delete updatedVehicle.url;

    return updatedVehicle;
  },
  getSpecieByName: state => name => {
    const specie = state.data.species.find(
      specie => specie.name.toLowerCase() === name,
    );

    const updatedFilms = specie.films.map(
      url => state.data.films.find(item => item.url === url).title,
    );
    const updatedPeople = specie.people.map(
      url => state.data.people.find(item => item.url === url).name,
    );
    const updatedHomeworld = state.data.planets.find(
      item => item.url === specie.homeworld,
    ).name;

    const updatedSpecie = {
      ...specie,
      films: updatedFilms,
      people: updatedPeople,
      homeworld: updatedHomeworld,
    };

    delete updatedSpecie.created;
    delete updatedSpecie.edited;
    delete updatedSpecie.url;

    return updatedSpecie;
  },
  getPlanetByName: state => name => {
    const planet = state.data.planets.find(
      planet => planet.name.toLowerCase() === name,
    );

    const updatedFilms = planet.films.map(
      url => state.data.films.find(item => item.url === url).title,
    );
    const updatedResidents = planet.residents.map(
      url => state.data.people.find(item => item.url === url).name,
    );

    const updatedPlanet = {
      ...planet,
      films: updatedFilms,
      residents: updatedResidents,
    };

    delete updatedPlanet.created;
    delete updatedPlanet.edited;
    delete updatedPlanet.url;

    return updatedPlanet;
  },
};
