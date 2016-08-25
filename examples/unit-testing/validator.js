'use strict';

let parser = require('./parser');

function validateAge(data) {
  const age = parser.getAge(data);
  return age === null ? false : age >= 0;
}

module.exports = {
  validateAge: validateAge
};
