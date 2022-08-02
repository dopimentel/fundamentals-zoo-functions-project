const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) =>
  species
    .filter((specie) => specie.name === animal)
    .reduce((specie) => specie)
    .residents.every((resident) => resident.age >= age);

module.exports = getAnimalsOlderThan;
