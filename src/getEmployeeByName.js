const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => (!employeeName ? {} : employees
  .filter((employee) => employee.firstName === employeeName || employee.lastName === employeeName)
  .reduce((employee) => employee));

module.exports = getEmployeeByName;
