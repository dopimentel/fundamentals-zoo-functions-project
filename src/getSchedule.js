const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const exhibition = (weekDay) => {
  if (weekDay === 'Monday') {
    return 'The zoo will be closed!';
  }
  return species
    .filter((specie) => specie.availability.some((day) => day === weekDay))
    .reduce((availableAnimals, specie) => {
      availableAnimals.push(specie.name);
      return availableAnimals;
    }, []);
};
const officeHour = (weekDay) => {
  if (weekDay === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${hours[`${weekDay}`].open}am until ${
    hours[`${weekDay}`].close
  }pm`;
};

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) {
    return Object.keys(hours).reduce((acc, weekDay) => {
      acc[weekDay] = {
        officeHour: officeHour(weekDay),
        exhibition: exhibition(weekDay),
      };
      return acc;
    }, {});
  }
  return species
    .filter((specie) => specie.name === scheduleTarget)
    .reduce((specie) => specie).availability;
}
module.exports = getSchedule;
