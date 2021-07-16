const socketIO = require('socket.io');
const uuid = require('uuid');

const DrinkService = require('./Drink.service');
const OrderService = require('./Order.service');
const DrinkAgeService = require('./DrinkAge.service');
const LoggingService = require('./Logging.service');

let io;
let orderQueueNamespace;
let drinkListNamespace;
const QUEUE_UPDATE = 'queue update';
const DELETE_DRINK_ORDER = 'delete drink order';
const ADD_DRINK_ORDER = 'add drink order';
const DRINK_LIST = 'drink list';
const CONNECTION = 'connection';
const TOGGLE_DRINK_ACTIVE = 'toggle drink active';
const DRINK_LIST_NAMESPACE = '/drink-list';
const ORDER_QUEUE_NAMESPACE = '/order-queue';

// TODO: considering separating into 3 files. Socket.service.js, and one for each of the 2 namespaces

const init = (httpServer) => {
  io = socketIO(httpServer, { cors: { origin: '*' } });

  drinkListNamespace = io.of(DRINK_LIST_NAMESPACE).on(CONNECTION, (socket) => {
    socket.emit(DRINK_LIST, DrinkService.getDrinkList());
    handleAddDrinkOrder(socket);
    handleToggleDrinkActive(socket);
  });

  orderQueueNamespace = io.of(ORDER_QUEUE_NAMESPACE).on(CONNECTION, (socket) => {
    socket.emit(QUEUE_UPDATE, OrderService.getDrinkQueue());
    handleDeleteDrinkOrder(socket);
  });

  DrinkAgeService.startPoll(drinkListNamespace);
};

const handleAddDrinkOrder = (socket) => {
  socket.on(ADD_DRINK_ORDER, (drink, callback) => {
    const drinkOrder = drink;
    drinkOrder.id = uuid.v4();
    drinkOrder.timestamp = new Date().getTime();
    OrderService.addDrinkOrder(drinkOrder);
    LoggingService.green(`${drinkOrder.name} ordered by ${drinkOrder.recipient} with ID: ${drinkOrder.id}`);
    orderQueueNamespace.emit(QUEUE_UPDATE, OrderService.getDrinkQueue());
    callback();
  });
};

const handleDeleteDrinkOrder = (socket) => {
  socket.on(DELETE_DRINK_ORDER, (id, callback) => {
    OrderService.removeDrinkOrder(id);
    LoggingService.red(`deleting drink order with id: ${id}`);
    orderQueueNamespace.emit(QUEUE_UPDATE, OrderService.getDrinkQueue());
    callback();
  });
};

const handleToggleDrinkActive = (socket) => {
  socket.on(TOGGLE_DRINK_ACTIVE, (id, callback) => {
    const updatedDrink = DrinkService.toggleDrinkActive(id);
    LoggingService.blue(`drink ${updatedDrink.id} was toggled to active = ${updatedDrink.active}`);
    drinkListNamespace.emit(DRINK_LIST, DrinkService.getDrinkList());
    callback(updatedDrink);
  });
};

module.exports = { init };
