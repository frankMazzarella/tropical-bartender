let drinkQueue = [];

const addDrinkOrder = (drink) => drinkQueue.push(drink);

const getDrinkQueue = () => drinkQueue;

const removeDrinkOrder = (id) => {
  drinkQueue = drinkQueue.filter((drink) => drink.id !== id);
};

module.exports = {
  addDrinkOrder,
  getDrinkQueue,
  removeDrinkOrder,
};
