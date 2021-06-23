let drinkQueue = [];
let drinkList = [];

// TODO: persist queue to disk

const updateDrinkList = (list) => {
  drinkList = list;
};
// TODO: this should be two files - Drink.service.js and Order.service.js

const getDrinkList = () => drinkList;

const addDrinkOrder = (drink) => drinkQueue.push(drink);

const getDrinkQueue = () => drinkQueue;

const removeDrinkOrder = (id) => {
  drinkQueue = drinkQueue.filter((drink) => drink.id !== id);
};

module.exports = {
  addDrinkOrder,
  getDrinkQueue,
  removeDrinkOrder,
  updateDrinkList,
  getDrinkList,
};
