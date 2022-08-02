const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function getRelatedEmployees(managerId) {
  const manageredList = employees
    .filter((employee) => employee.managers
    .some((manager) => manager === managerId));
  return manageredList.map((managered) => `${managered.firstName} ${managered.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };

// console.log(employees.filter((employee) => {
//   return employee.managers.some((managerId) => managerId === "9e7d4524-363c-416a-8759-8aa7e50c0992")}))


// const gerenciados = employees.filter((employee) => {
//   return employee.managers.some((managerId) => managerId === "9e7d4524-363c-416a-8759-8aa7e50c0992")});

// console.log(gerenciados.map((gerenciado) => `${gerenciado.firstName} ${gerenciado.lastName}`))

console.log(getRelatedEmployees("9e7d4524-363c-416a-8759-8aa7e50c0992"));