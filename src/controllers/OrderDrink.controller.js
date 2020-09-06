const uuid = require('uuid');

const DrinkQueueService = require('../services/DrinkQueue.service');

module.exports = (req, res) => {
  const drink = req.body;
  drink.id = uuid.v4();
  drink.timestamp = new Date().getTime();
  DrinkQueueService.addDrink(drink);
  console.log(`drink ordered: ${JSON.stringify(drink)}`);
  res.json(drink);
}
