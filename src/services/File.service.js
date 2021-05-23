const fs = require('fs');
const path = require('path');

const readDrinkList = () => {
  const drinkListPath = path.join(__dirname, '..', '..', 'drinks.json');
  try {
    return JSON.parse(fs.readFileSync(drinkListPath));
  } catch (err) {
    return [];
  }
};

module.exports = { readDrinkList };
