import orderBy from 'lodash.orderby';

const updateFilms = (state, films) => {
  const updatedFilms = films.map(url => {
    const film = state.data.films.find(item => item.url === url);

    return {
      id: film.id,
      name: film.title,
      image: film.image,
      episode_id: film.episode_id,
    };
  });

  return orderBy(updatedFilms, 'episode_id');
};

const updatePeople = (state, people) => {
  const updatedPeople = people.map(url => {
    const person = state.data.people.find(item => item.url === url);

    return {
      id: person.id,
      name: person.name,
      image: person.image,
    };
  });

  return orderBy(updatedPeople, 'name');
};

const updatePlanets = (state, planets) => {
  if (planets === null) {
    return;
  }

  if (typeof planets === 'object') {
    const updatedPlanets = planets.map(url => {
      const planet = state.data.planets.find(item => item.url === url);

      return {
        id: planet.id,
        name: planet.name,
        image: planet.image,
      };
    });

    return orderBy(updatedPlanets, 'name');
  }
  const planet = state.data.planets.find(item => item.url == planets);
  const updatedPlanet = {
    id: planet.id,
    name: planet.name,
    image: planet.image,
  };

  return [updatedPlanet];
};

const updateStarships = (state, starships) => {
  const updatedStarships = starships.map(url => {
    const starship = state.data.starships.find(item => item.url === url);

    return {
      id: starship.id,
      name: starship.name,
      image: starship.image,
    };
  });

  return orderBy(updatedStarships, 'name');
};

const updateVehicles = (state, vehicles) => {
  const updatedVehicles = vehicles.map(url => {
    const vehicle = state.data.vehicles.find(item => item.url === url);

    return {
      id: vehicle.id,
      name: vehicle.name,
      image: vehicle.image,
    };
  });

  return orderBy(updatedVehicles, 'name');
};

const updateSpecies = (state, species) => {
  const updatedSpecies = species.map(url => {
    const specie = state.data.species.find(item => item.url === url);

    return {
      id: specie.id,
      name: specie.name,
      image: specie.image,
    };
  });

  return orderBy(updatedSpecies, 'name');
};

export {
  updateFilms,
  updatePeople,
  updatePlanets,
  updateStarships,
  updateVehicles,
  updateSpecies,
};
