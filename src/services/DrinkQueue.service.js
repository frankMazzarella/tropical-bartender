let drinkQueue = [];

// TODO: persist queue to disk

const addDrink = (drink) => drinkQueue.push(drink);
const getQueue = () => drinkQueue;
const removeDrink = (id) => {
  drinkQueue = drinkQueue.filter((drink) => drink.id !== id);
};

module.exports = { addDrink, getQueue, removeDrink };
