const express = require('express');

const DrinkListController = require('./controllers/DrinkList.controller');
const OrderDrinkController = require('./controllers/OrderDrink.controller');

const router = express.Router();

router.get('/drinklist', DrinkListController);
router.post('/orderdrink', OrderDrinkController);

module.exports = router;
