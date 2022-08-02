const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees
  .some((employee) => employee.managers.some((manager) => manager === id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const manageredList = employees.filter((employee) =>
      employee.managers.some((manager) => manager === managerId));
    return manageredList.map((managered) => `${managered.firstName} ${managered.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
