const DrinkQueueService = require('../services/DrinkQueue.service');

module.exports = (req, res) => {
  const id = req.body.id;
  DrinkQueueService.removeDrink(id);
  console.log(`removing drink with id: ${id}`);
  res.json(DrinkQueueService.getQueue());
}
