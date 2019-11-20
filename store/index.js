import axios from 'axios';

import {
  updateFilms,
  updatePeople,
  updatePlanets,
  updateStarships,
  updateVehicles,
  updateSpecies
} from './helpers/updateObjects';

const API_BASE_URL = 'https://swapp-nuxt.herokuapp.com/api';

export const state = () => ({
  data: null
});

export const mutations = {
  SET_DATA: (state, payload) => {
    state.data = payload;
  }
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('fetchData');
  },
  async fetchData({ commit }) {
    const { data } = await axios.get(`${API_BASE_URL}/data`);
    commit('SET_DATA', data);
  }
};

export const getters = {
  getFilmByName: state => name => {
    const film = state.data.films.find(
      film => film.name.toLowerCase() === name
    );
    const updatedPeople = updatePeople(state, film.characters);
    const updatedStarships = updateStarships(state, film.starships);
    const updatedVehicles = updateVehicles(state, film.vehicles);
    const updatedSpecies = updateSpecies(state, film.species);
    const updatedPlanets = updatePlanets(state, film.planets);
    let updatedFilm = { ...film };

    delete updatedFilm.starships;
    delete updatedFilm.vehicles;
    delete updatedFilm.species;
    delete updatedFilm.planets;

    delete updatedFilm.url;
    delete updatedFilm.characters;

    const sortedFilm = {
      ...updatedFilm,
      people: updatedPeople,
      starships: updatedStarships,
      vehicles: updatedVehicles,
      species: updatedSpecies,
      planets: updatedPlanets
    };

    return sortedFilm;
  },
  getPersonByName: state => name => {
    const person = state.data.people.find(
      person => person.name.toLowerCase() === name
    );
    const updatedFilms = updateFilms(state, person.films);
    const updatedStarships = updateStarships(state, person.starships);
    const updatedVehicles = updateVehicles(state, person.vehicles);
    const updatedSpecies = updateSpecies(state, person.species);
    const updatedPlanets = updatePlanets(state, person.homeworld);
    let updatedPerson = { ...person };

    delete updatedPerson.films;
    delete updatedPerson.starships;
    delete updatedPerson.vehicles;
    delete updatedPerson.species;
    delete updatedPerson.planets;

    delete updatedPerson.url;
    delete updatedPerson.homeworld;

    const sortedPerson = {
      ...updatedPerson,
      films: updatedFilms,
      starships: updatedStarships,
      vehicles: updatedVehicles,
      species: updatedSpecies,
      planets: updatedPlanets
    };

    return sortedPerson;
  },
  getStarshipByName: state => name => {
    const starship = state.data.starships.find(
      starship => starship.name.toLowerCase() === name
    );
    const updatedFilms = updateFilms(state, starship.films);
    const updatedPeople = updatePeople(state, starship.pilots);
    let updatedStarship = { ...starship };

    delete updatedStarship.films;

    delete updatedStarship.url;
    delete updatedStarship.pilots;

    const sortedStarship = {
      ...updatedStarship,
      films: updatedFilms,
      people: updatedPeople
    };

    return sortedStarship;
  },
  getVehicleByName: state => name => {
    const vehicle = state.data.vehicles.find(
      vehicle => vehicle.name.toLowerCase() === name
    );
    const updatedFilms = updateFilms(state, vehicle.films);
    const updatedPeople = updatePeople(state, vehicle.pilots);
    let updatedVehicle = { ...vehicle };

    delete updatedVehicle.films;

    delete updatedVehicle.url;
    delete updatedVehicle.pilots;

    const sortedVehicle = {
      ...updatedVehicle,
      films: updatedFilms,
      people: updatedPeople
    };

    return sortedVehicle;
  },
  getSpecieByName: state => name => {
    const specie = state.data.species.find(
      specie => specie.name.toLowerCase() === name
    );
    const updatedFilms = updateFilms(state, specie.films);
    const updatedPeople = updatePeople(state, specie.people);
    const updatedPlanets = updatePlanets(state, specie.homeworld);
    let updatedSpecie = { ...specie };

    delete updatedSpecie.films;
    delete updatedSpecie.people;

    delete updatedSpecie.url;
    delete updatedSpecie.homeworld;

    const sortedSpecie = {
      ...updatedSpecie,
      films: updatedFilms,
      people: updatedPeople,
      planets: updatedPlanets
    };

    return sortedSpecie;
  },
  getPlanetByName: state => name => {
    const planet = state.data.planets.find(
      planet => planet.name.toLowerCase() === name
    );
    const updatedFilms = updateFilms(state, planet.films);
    const updatedPeople = updatePeople(state, planet.residents);
    let updatedPlanet = { ...planet };

    delete updatedPlanet.films;

    delete updatedPlanet.url;
    delete updatedPlanet.residents;

    const sortedPlanet = {
      ...updatedPlanet,
      films: updatedFilms,
      people: updatedPeople
    };

    return sortedPlanet;
  },
  getCategories: state => () => {
    return Object.keys(state.data);
  }
};
