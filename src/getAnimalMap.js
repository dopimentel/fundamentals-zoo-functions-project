const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsByLocation = (location) => species
  .filter((specie) => specie.location === location)
  .map((specie) => specie.name);

function getAnimalMap(options) {
  return {
    NE: getAnimalsByLocation('NE'),
    NW: getAnimalsByLocation('NW'),
    SE: getAnimalsByLocation('SE'),
    SW: getAnimalsByLocation('SW'),
  };
}

module.exports = getAnimalMap;
