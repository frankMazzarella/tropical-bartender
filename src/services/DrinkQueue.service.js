const drinkQueue = [];

const addDrink = (drink) => drinkQueue.push(drink);
const getQueue = () => drinkQueue;

module.exports = { addDrink, getQueue };
