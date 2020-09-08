const SocketService = require('../services/Socket.service');

module.exports = (req, res) => {
  const id = req.body.id;
  SocketService.removeDrink(id);
  console.log(`removing drink with id: ${id}`);
  res.json(SocketService.getQueue());
}
