const express = require('express');

const DrinkQueueController = require('./controllers/DrinkQueue.controller');
const OrderDrinkController = require('./controllers/OrderDrink.controller');
const RemoveDrinkController = require('./controllers/RemoveDrink.controller');

const router = express.Router();

router.get('/drinkqueue', DrinkQueueController);
router.post('/orderdrink', OrderDrinkController);
router.post('/removedrink', RemoveDrinkController);

module.exports = router;
