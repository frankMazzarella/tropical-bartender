const socketIO = require('socket.io');
const uuid = require('uuid');

const DrinkQueueService = require('./DrinkQueue.service');

let io;
const QUEUE_UPDATE = 'queue update';
const DELETE_DRINK_ORDER = 'delete drink order';
const ADD_DRINK_ORDER = 'add drink order';

const init = (httpServer) => {
  io = socketIO(httpServer, { cors: { origin: '*' } });
  io.on('connection', (socket) => {
    socket.emit(QUEUE_UPDATE, DrinkQueueService.getQueue());
    registerEventHandlers(socket);
  });
};

function registerEventHandlers(socket) {
  socket.on(DELETE_DRINK_ORDER, (id, callback) => {
    console.log(`deleting drink order with id: ${id}`);
    DrinkQueueService.removeDrink(id);
    io.emit(QUEUE_UPDATE, DrinkQueueService.getQueue());
    callback();
  });

  socket.on(ADD_DRINK_ORDER, (drink, callback) => {
    const drinkOrder = drink;
    drinkOrder.id = uuid.v4();
    drinkOrder.timestamp = new Date().getTime();
    console.log(`add drink order: ${JSON.stringify(drinkOrder)}`);
    DrinkQueueService.addDrink(drinkOrder);
    io.emit(QUEUE_UPDATE, DrinkQueueService.getQueue());
    callback();
  });
}

module.exports = { init };
