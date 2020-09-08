const uuid = require('uuid');

const SocketService = require('../services/Socket.service');

module.exports = (req, res) => {
  const drink = req.body;
  drink.id = uuid.v4();
  drink.timestamp = new Date().getTime();
  SocketService.addDrink(drink);
  console.log(`drink ordered: ${JSON.stringify(drink)}`);
  res.json(drink);
}
