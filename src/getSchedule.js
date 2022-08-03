const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSchedule = (scheduleTarget) => species
  .filter((specie) => specie.name === scheduleTarget).reduce((specie) => specie).availability;

module.exports = getSchedule;
