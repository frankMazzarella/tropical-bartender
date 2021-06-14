const socketIO = require('socket.io');
const uuid = require('uuid');

const DrinkService = require('./Drink.service');

let io;
const QUEUE_UPDATE = 'queue update';
const DELETE_DRINK_ORDER = 'delete drink order';
const ADD_DRINK_ORDER = 'add drink order';
const DRINK_LIST = 'drink list';
const CONNECTION = 'connection';
const DRINK_LIST_NAMESPACE = '/drink-list';
const ORDER_QUEUE_NAMESPACE = '/order-queue';

const init = (httpServer) => {
  io = socketIO(httpServer, { cors: { origin: '*' } });

  io.of(DRINK_LIST_NAMESPACE).on(CONNECTION, (socket) => {
    socket.emit(DRINK_LIST, DrinkService.getDrinkList());
    handleAddDrinkOrder(socket);
    handleDeleteDrinkOrder(socket);
  });

  io.of(ORDER_QUEUE_NAMESPACE).on(CONNECTION, (socket) => {
    socket.emit(QUEUE_UPDATE, DrinkService.getDrinkQueue());
  });
};

const handleAddDrinkOrder = (socket) => {
  socket.on(ADD_DRINK_ORDER, (drink, callback) => {
    const drinkOrder = drink;
    drinkOrder.id = uuid.v4();
    drinkOrder.timestamp = new Date().getTime();
    DrinkService.addDrinkOrder(drinkOrder);
    console.log(`add drink order: ${JSON.stringify(drinkOrder)}`);
    io.emit(QUEUE_UPDATE, DrinkService.getDrinkQueue());
    callback();
  });
};

const handleDeleteDrinkOrder = (socket) => {
  socket.on(DELETE_DRINK_ORDER, (id, callback) => {
    DrinkService.removeDrinkOrder(id);
    console.log(`deleting drink order with id: ${id}`);
    io.emit(QUEUE_UPDATE, DrinkService.getDrinkQueue());
    callback();
  });
};

module.exports = { init };
