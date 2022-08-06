const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

const getEmployeeInfos = (employee) => {
  const { id, firstName, lastName, responsibleFor } = employee;
  const fullName = `${firstName} ${lastName}`;
  const species = responsibleFor.map(
    (specieId) => getSpeciesByIds(specieId).reduce((specie) => specie).name,
  );
  const locations = responsibleFor.map(
    (specieId) => getSpeciesByIds(specieId).reduce((specie) => specie).location,
  );
  return { id, fullName, species, locations };
};

const getEmployeesCoverage = ({ name, id } = {}) => {
  if (name === undefined && id === undefined) {
    return employees.map((getEmployeeInfos));
  }
  const employeeInfo = employees.find(
    (employee) =>
      employee.firstName === name || employee.lastName === name || employee.id === id,
  );
  if (employeeInfo === undefined) {
    throw new Error('Informações inválidas');
  }
  return getEmployeeInfos(employeeInfo);
};

module.exports = getEmployeesCoverage;
