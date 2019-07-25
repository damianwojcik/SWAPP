import axios from 'axios';

import {
  updateFilms,
  updatePeople,
  updatePlanets,
  updateStarships,
  updateVehicles,
  updateSpecies,
} from './helpers/updateObjects';

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

    const updatedCharacters = updatePeople(state, film.characters);
    const updatedPlanets = updatePlanets(state, film.planets);
    const updatedStarships = updateStarships(state, film.starships);
    const updatedVehicles = updateVehicles(state, film.vehicles);
    const updatedSpecies = updateSpecies(state, film.species);

    const updatedFilm = {
      ...film,
      characters: updatedCharacters,
      planets: updatedPlanets,
      starships: updatedStarships,
      vehicles: updatedVehicles,
      species: updatedSpecies,
    };

    delete updatedFilm.url;

    return updatedFilm;
  },
  getPersonByName: state => name => {
    const person = state.data.people.find(
      person => person.name.toLowerCase() === name,
    );

    const updatedFilms = updateFilms(state, person.films);
    const updatedHomeworld = updatePlanets(state, person.homeworld);
    const updatedSpecies = updateSpecies(state, person.species);
    const updatedVehicles = updateVehicles(state, person.vehicles);
    const updatedStarships = updateStarships(state, person.starships);

    const updatedPerson = {
      ...person,
      films: updatedFilms,
      homeworld: updatedHomeworld,
      species: updatedSpecies,
      starships: updatedStarships,
      vehicles: updatedVehicles,
    };

    delete updatedPerson.url;

    return updatedPerson;
  },
  getStarshipByName: state => name => {
    const starship = state.data.starships.find(
      starship => starship.name.toLowerCase() === name,
    );

    const updatedFilms = updateFilms(state, starship.films);
    const updatedPilots = updatePeople(state, starship.pilots);

    const updatedStarship = {
      ...starship,
      films: updatedFilms,
      pilots: updatedPilots,
    };

    delete updatedStarship.url;

    return updatedStarship;
  },
  getVehicleByName: state => name => {
    const vehicle = state.data.vehicles.find(
      vehicle => vehicle.name.toLowerCase() === name,
    );

    const updatedFilms = updateFilms(state, vehicle.films);
    const updatedPilots = updatePeople(state, vehicle.pilots);

    const updatedVehicle = {
      ...vehicle,
      films: updatedFilms,
      pilots: updatedPilots,
    };

    delete updatedVehicle.url;

    return updatedVehicle;
  },
  getSpecieByName: state => name => {
    const specie = state.data.species.find(
      specie => specie.name.toLowerCase() === name,
    );

    const updatedFilms = updateFilms(state, specie.films);
    const updatedPeople = updatePeople(state, specie.people);
    const updatedHomeworld = updatePlanets(state, specie.homeworld);

    const updatedSpecie = {
      ...specie,
      films: updatedFilms,
      people: updatedPeople,
      homeworld: updatedHomeworld,
    };

    delete updatedSpecie.url;

    return updatedSpecie;
  },
  getPlanetByName: state => name => {
    const planet = state.data.planets.find(
      planet => planet.name.toLowerCase() === name,
    );

    const updatedFilms = updateFilms(state, planet.films);
    const updatedResidents = updatePeople(state, planet.residents);

    const updatedPlanet = {
      ...planet,
      films: updatedFilms,
      residents: updatedResidents,
    };

    delete updatedPlanet.url;

    return updatedPlanet;
  },
};
