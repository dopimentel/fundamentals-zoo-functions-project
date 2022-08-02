const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids) {
    return [];
  }
  return ids.map((id) => species.filter((specie) => specie.id === id).reduce((specie) => specie));
};

module.exports = getSpeciesByIds;
