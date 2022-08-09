const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsByLocation = (location) => species
  .filter((specie) => specie.location === location)
  .map((specie) => specie.name);

const getResidentsBySpecie = (animalSpecie) => species
  .filter((specie) => specie.name === animalSpecie)
  .reduce((specie) => specie).residents;

const getResidentsNames = (animalSpecie, sex, callback) => callback(animalSpecie, sex)
  .reduce((acc, resident) => {
    acc.push(resident.name);
    return acc;
  }, []);

const filterResidentsBySex = (animalSpecie, sex) => getResidentsBySpecie(animalSpecie)
  .filter((resident) => resident.sex === sex);

const sorter = (names, boolean) => (boolean ? names.sort() : names);

const nameIncluser = (animals, sex, sorted) => {
  if (sex !== undefined) {
    return animals.map((animal) => {
      const result = {};
      result[animal] = getResidentsNames(animal, sex, filterResidentsBySex);
      sorter(result[animal], sorted);
      return result;
    });
  }
  return animals.map((animal) => {
    const result = {};
    result[animal] = getResidentsNames(animal, sex, getResidentsBySpecie);
    sorter(result[animal], sorted);
    return result;
  });
};

const getAnimalMap = (options = {}) => {
  const { includeNames, sex, sorted } = options;
  const arrayLocations = ['NE', 'NW', 'SE', 'SW'];
  const result = arrayLocations.reduce((acc, location) => {
    acc[location] = includeNames
      ? nameIncluser(getAnimalsByLocation(location), sex, sorted)
      : getAnimalsByLocation(location);
    return acc;
  }, {});
  return result;
};

module.exports = getAnimalMap;
