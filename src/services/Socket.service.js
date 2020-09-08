const socketIO = require('socket.io');

const DrinkQueueService = require('./DrinkQueue.service');

let io;
const QUEUE_UPDATE = 'queue update';

const init = (httpServer) => {
  io = socketIO(httpServer);
  io.on('connection', (socket) => {
    socket.emit(QUEUE_UPDATE, DrinkQueueService.getQueue());
  });
}

const removeDrink = (id) => {
  DrinkQueueService.removeDrink(id);
  io.emit(QUEUE_UPDATE, DrinkQueueService.getQueue());
}

const getQueue = () => {
  return DrinkQueueService.getQueue();
}

const addDrink = (drink) => {
  DrinkQueueService.addDrink(drink);
  io.emit(QUEUE_UPDATE, DrinkQueueService.getQueue());
}

module.exports = { init, removeDrink, addDrink, getQueue };
