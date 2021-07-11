const DrinkService = require('./Drink.service');

const OLDEST_DRINK_ORDER_AGE = 'oldest drink order age';

const startPoll = (drinkListNamespace) => {
  poll(drinkListNamespace);
  const tenSeconds = 1000 * 10;
  setInterval(() => poll(drinkListNamespace), tenSeconds);
};

const poll = (drinkListNamespace) => {
  const drinkQueue = DrinkService.getDrinkQueue();
  const drinkAges = drinkQueue.map((drink) => {
    const now = new Date();
    const drinkAge = now.getTime() - drink.timestamp;
    return drinkAge;
  });
  if (drinkAges[0]) {
    drinkListNamespace.emit(OLDEST_DRINK_ORDER_AGE, drinkAges[0]);
  } else {
    drinkListNamespace.emit(OLDEST_DRINK_ORDER_AGE, 0);
  }
};

module.exports = { startPoll };
