const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

const getEmployeeInfos = (employee) => {
  const { id: employeeId, firstName, lastName, responsibleFor } = employee;
  const fullName = `${firstName} ${lastName}`;
  const speciesNames = responsibleFor.map(
    (specieId) => getSpeciesByIds(specieId).reduce((specie) => specie).name,
  );
  const locations = responsibleFor.map(
    (specieId) => getSpeciesByIds(specieId).reduce((specie) => specie).location,
  );
  return { id: employeeId, fullName, species: speciesNames, locations };
};

const getEmployeesCoverage = ({ name, id } = {}) => {
  if (name === undefined && id === undefined) {
    return employees.map((getEmployeeInfos));
  }
  const employeeInfo = employees.find(
    (employee) =>
      employee.firstName === name || employee.lastName === name || employee.id === id,
  );
  return getEmployeeInfos(employeeInfo);
};

module.exports = getEmployeesCoverage;
