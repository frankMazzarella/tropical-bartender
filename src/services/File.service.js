const fs = require('fs');

const readJSONFileSync = (filePath) => {
  try {
    return JSON.parse(fs.readFileSync(filePath));
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { readJSONFileSync };
