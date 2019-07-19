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
    const updatedCharacters = film.characters.map(url => {
      const person = state.data.people.find(item => item.url === url);

      return {
        id: person.id,
        name: person.name,
        image: person.image,
      };
    });
    const updatedPlanets = film.planets.map(url => {
      const planet = state.data.planets.find(item => item.url === url);

      return {
        id: planet.id,
        name: planet.name,
        image: planet.image,
      };
    });
    const updatedStarships = film.starships.map(url => {
      const starship = state.data.starships.find(item => item.url === url);

      return {
        id: starship.id,
        name: starship.name,
        image: starship.image,
      };
    });
    const updatedVehicles = film.vehicles.map(url => {
      const vehicle = state.data.vehicles.find(item => item.url === url);

      return {
        id: vehicle.id,
        name: vehicle.name,
        image: vehicle.image,
      };
    });
    const updatedSpecies = film.species.map(url => {
      const specie = state.data.species.find(item => item.url === url);

      return {
        id: specie.id,
        name: specie.name,
        image: specie.image,
      };
    });

    const updatedFilm = {
      ...film,
      characters: updatedCharacters,
      planets: updatedPlanets,
      starships: updatedStarships,
      vehicles: updatedVehicles,
      species: updatedSpecies,
    };

    delete updatedFilm.url;
    // TODO: .

    return updatedFilm;
  },
  getPersonByName: state => name => {
    const person = state.data.people.find(
      person => person.name.toLowerCase() === name,
    );

    const updatedFilms = person.films.map(url => {
      const film = state.data.films.find(item => item.url === url);

      return {
        id: film.id,
        title: film.title,
        image: film.image,
      };
    });
    const homeworld = state.data.planets.find(
      item => item.url === person.homeworld,
    );
    const updatedHomeworld = {
      id: homeworld.id,
      name: homeworld.name,
      image: homeworld.image,
    };
    const updatedSpecies = person.species.map(url => {
      const specie = state.data.species.find(item => item.url === url);

      return {
        id: specie.id,
        name: specie.name,
        image: specie.image,
      };
    });
    const updatedVehicles = person.vehicles.map(url => {
      const vehicle = state.data.vehicles.find(item => item.url === url);

      return {
        id: vehicle.id,
        name: vehicle.name,
        image: vehicle.image,
      };
    });
    const updatedStarships = person.starships.map(url => {
      const starship = state.data.starships.find(item => item.url === url);

      return {
        id: starship.id,
        name: starship.name,
        image: starship.image,
      };
    });

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

    const updatedFilms = starship.films.map(url => {
      const film = state.data.films.find(item => item.url === url);

      return {
        id: film.id,
        title: film.title,
        image: film.image,
      };
    });
    const updatedPilots = starship.pilots.map(url => {
      const person = state.data.people.find(item => item.url === url);

      return {
        id: person.id,
        name: person.name,
        image: person.image,
      };
    });

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

    const updatedFilms = vehicle.films.map(url => {
      const film = state.data.films.find(item => item.url === url);

      return {
        id: film.id,
        title: film.title,
        image: film.image,
      };
    });
    const updatedPilots = vehicle.pilots.map(url => {
      const person = state.data.people.find(item => item.url === url);

      return {
        id: person.id,
        name: person.name,
        image: person.image,
      };
    });

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

    const updatedFilms = specie.films.map(url => {
      const film = state.data.films.find(item => item.url === url);

      return {
        id: film.id,
        title: film.title,
        image: film.image,
      };
    });
    const updatedPeople = specie.people.map(url => {
      const person = state.data.people.find(item => item.url === url);

      return {
        id: person.id,
        name: person.name,
        image: person.image,
      };
    });
    const homeworld = state.data.planets.find(
      item => item.url === specie.homeworld,
    );
    const updatedHomeworld = {
      id: homeworld.id,
      name: homeworld.name,
      image: homeworld.image,
    };

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

    const updatedFilms = planet.films.map(url => {
      const film = state.data.films.find(item => item.url === url);

      return {
        id: film.id,
        title: film.title,
        image: film.image,
      };
    });
    const updatedResidents = planet.residents.map(url => {
      const person = state.data.people.find(item => item.url === url);

      return {
        id: person.id,
        name: person.name,
        image: person.image,
      };
    });

    const updatedPlanet = {
      ...planet,
      films: updatedFilms,
      residents: updatedResidents,
    };

    delete updatedPlanet.url;

    return updatedPlanet;
  },
};
