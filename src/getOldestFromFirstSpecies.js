const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecie = employees
    .filter((employee) => employee.id === id)
    .reduce((employee) => employee)
    .responsibleFor.find((firstSpecieId) => firstSpecieId !== undefined);
  const firstSpecieResidents = species
    .filter((specie) => specie.id === firstSpecie)
    .reduce((specie) => specie).residents;
  const oldestResidentInfos = firstSpecieResidents
    .reduce((oldest, resident) => ((oldest.age > resident.age) ? oldest : resident));
  return Object.values(oldestResidentInfos);
}

module.exports = getOldestFromFirstSpecies;
