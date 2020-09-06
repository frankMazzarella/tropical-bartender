const DrinkQueueService = require('../services/DrinkQueue.service');

module.exports = (req, res) => {
  const drinkQueue = DrinkQueueService.getQueue();
  res.json(drinkQueue);
}
