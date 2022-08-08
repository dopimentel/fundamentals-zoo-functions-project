const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsByLocation = (location) => species
  .filter((specie) => specie.location === location)
  .map((specie) => specie.name);
const getResidentsBySpecie = (param) => species
  .filter((specie) => specie.name === param)
  .reduce((specie) => specie).residents;
const residentsNames = (param, callback) => callback(param).reduce((acc, resident) => {
  acc.push(resident.name);
  return acc;
}, []);
getResidentsBySpecie('lions');

const nameIncluser = (arrayAnimals, ordered) =>
  arrayAnimals.map((animal) => {
    const resultado = {};
    resultado[animal] = ordered
      ? residentsNames(animal, getResidentsBySpecie).sort()
      : residentsNames(animal, getResidentsBySpecie);
    return resultado;
  });

function getAnimalMap(options = {}) {
  const { includeNames, sex, sorted } = options;
  const arrayLocations = ['NE', 'NW', 'SE', 'SW'];
  return arrayLocations.reduce((acc, curr) => {
    acc[curr] = includeNames
      ? nameIncluser(getAnimalsByLocation(curr))
      : getAnimalsByLocation(curr);
    return acc;
  }, {});
}

module.exports = getAnimalMap;
