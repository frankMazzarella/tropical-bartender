const uuid = require('uuid');

let drinkList = [];

const initDrinkList = (list) => {
  drinkList = list.map((drink) => {
    const drinkItem = drink;
    drinkItem.id = uuid.v4();
    drinkItem.active = true;
    return drinkItem;
  });
};

const getDrinkList = () => drinkList;

const toggleDrinkActive = (id) => {
  let updatedDrink;
  drinkList.forEach((drink, index) => {
    if (drink.id === id) {
      updatedDrink = drink;
      updatedDrink.active = !updatedDrink.active;
      drinkList[index] = updatedDrink;
    }
  });
  return updatedDrink;
};

module.exports = {
  initDrinkList,
  getDrinkList,
  toggleDrinkActive,
};
