const drinkList = [];

const addDrink = (drink) => drinkList.push(drink);
const getList = () => drinkList;

module.exports = { addDrink, getList };
