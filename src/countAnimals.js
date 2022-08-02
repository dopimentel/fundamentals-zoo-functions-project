const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  if (animal.sex === undefined) {
    return species.find((element) => element.name === animal.specie).residents
      .length;
  }
  return species.find((element) => element.name === animal.specie).residents.filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
