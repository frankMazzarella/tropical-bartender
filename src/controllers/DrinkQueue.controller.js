const SocketService = require('../services/Socket.service');

module.exports = (req, res) => {
  const drinkQueue = SocketService.getQueue();
  res.json(drinkQueue);
}
