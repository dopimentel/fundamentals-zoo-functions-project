const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

function getEmployeesCoverage({ name, id}) {
  const employeeInfo = employees.find(
    (employee) =>
      employee.firstName === name || employee.lastName === name,
  );
  const { id: employeeId, firstName, lastName, responsibleFor } = employeeInfo;
  const fullName = `${firstName} ${lastName}`;
  const speciesNames = responsibleFor.map(
    (specieId) => getSpeciesByIds(specieId).reduce((specie) => specie).name
  );
  const locations = responsibleFor.map(
    (specieId) => getSpeciesByIds(specieId).reduce((specie) => specie).location
  );
  return { id: employeeId, fullName, species: speciesNames, locations };
}

module.exports = getEmployeesCoverage;
