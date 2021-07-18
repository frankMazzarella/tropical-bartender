/* eslint-disable no-console */

// TODO: improve logging with timestamps and try to replace UUIDs with drink names when possible

const chalk = require('chalk');

const red = (log) => {
  console.log(chalk.red(log));
};

const blue = (log) => {
  console.log(chalk.blue(log));
};

const green = (log) => {
  console.log(chalk.green(log));
};

const white = (log) => {
  console.log(chalk.white(log));
};

module.exports = {
  red,
  blue,
  green,
  white,
};
