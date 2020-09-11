const socketIO = require('socket.io');

const DrinkQueueService = require('./DrinkQueue.service');

let io;
const QUEUE_UPDATE = 'queue update';
const DELETE_DRINK_ORDER = 'delete drink order';

const init = (httpServer) => {
  io = socketIO(httpServer);
  io.on('connection', (socket) => {
    socket.emit(QUEUE_UPDATE, DrinkQueueService.getQueue());
    registerEventHandlers(socket);
  });
}

const removeDrink = (id) => {
  console.log(`deleting drink order with id: ${id}`);
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

function registerEventHandlers(socket) {
  socket.on(DELETE_DRINK_ORDER, (id, callback) => {
    removeDrink(id);
    callback();
  });
}

module.exports = { init, removeDrink, addDrink, getQueue };
