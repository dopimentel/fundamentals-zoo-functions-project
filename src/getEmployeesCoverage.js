const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

function getEmployeesCoverage({ name, id}) {
  const employeeInfo = employees.find(
    (employee) =>
      employee.firstName === name || employee.lastName === name || employee.id === id,
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

const employeeInfo = employees
  .find((employee) => employee.firstName === 'Nigel' || employee.lastName === 'Nigel');

const {id, firstName, lastName, responsibleFor} = employeeInfo;
console.log(responsibleFor)
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const speciesNames = responsibleFor.map((specieId) => getSpeciesByIds(specieId).reduce((specie) => specie).name);
console.log(speciesNames);
const locations = responsibleFor.map((specieId) => getSpeciesByIds(specieId).reduce((specie) => specie).location);
console.log(locations);
const resultado = { id, fullName, 'species': speciesNames, locations };
console.log(resultado)
// console.log(
//   employees.find(
//     (employee) =>
//       employee.id === 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'
//   )
// );
