const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countEntrants = (entrants) => entrants.reduce(
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

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { adult, child, senior } = countEntrants(entrants);
  return (adult * prices.adult) + (child * prices.child) + (senior * prices.senior);
}

module.exports = { calculateEntry, countEntrants };
