const DrinkListService = require('../services/DrinkList.service');

module.exports = (req, res) => {
  const drinkList = DrinkListService.getList();
  res.json(drinkList);
}
