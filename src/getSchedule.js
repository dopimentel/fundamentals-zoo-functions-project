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

const isAnimal = (param) =>
  species
    .reduce((animalsList, specie) => {
      animalsList.push(specie.name);
      return animalsList;
    }, [])
    .some((animal) => animal === param);

const isWeekDay = (param) => Object.keys(hours).some((day) => day === param);

const schedulePerDay = (weekDay) => {
  const schedule = {};
  schedule[weekDay] = {
    officeHour: officeHour(weekDay),
    exhibition: exhibition(weekDay),
  };
  return schedule;
};
const completeSchedule = (scheduleTarget) => {
  if ((!isAnimal(scheduleTarget) && !isWeekDay(scheduleTarget)) || !scheduleTarget) {
    return Object.keys(hours).reduce((acc, weekDay) => {
      acc[weekDay] = {
        officeHour: officeHour(weekDay),
        exhibition: exhibition(weekDay),
      };
      return acc;
    }, {});
  }
};

function getSchedule(scheduleTarget) {
  if (isAnimal(scheduleTarget)) {
    return species
      .filter((specie) => specie.name === scheduleTarget)
      .reduce((specie) => specie).availability;
  }
  if (isWeekDay(scheduleTarget)) {
    return schedulePerDay(scheduleTarget);
  }
  return completeSchedule(scheduleTarget);
}

module.exports = getSchedule;
