const { name } = require('faker/locale/pt_BR');
const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  return entrants.reduce(
    (acc, curr) => {
      if (curr.age < 18) {
        acc.child += 1;
        return acc;
      }
      if (curr.age < 50) {
        acc.adult += 1;
        return acc;
      }
      acc.senior += 1;
      return acc;
    },
    { adult: 0, child: 0, senior: 0 },
  );
};

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
}

module.exports = { calculateEntry, countEntrants };
