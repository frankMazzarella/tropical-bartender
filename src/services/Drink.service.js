const uuid = require('uuid');

let drinkQueue = [];
let drinkList = [];

const initDrinkList = (list) => {
  drinkList = list.map((drink) => {
    const drinkItem = drink;
    drinkItem.id = uuid.v4();
    drinkItem.active = true;
    return drinkItem;
  });
};

// TODO: this should be two files - Drink.service.js and Order.service.js

const getDrinkList = () => drinkList;

const addDrinkOrder = (drink) => drinkQueue.push(drink);

const getDrinkQueue = () => drinkQueue;

const removeDrinkOrder = (id) => {
  drinkQueue = drinkQueue.filter((drink) => drink.id !== id);
};

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
  addDrinkOrder,
  getDrinkQueue,
  removeDrinkOrder,
  initDrinkList,
  getDrinkList,
  toggleDrinkActive,
};
