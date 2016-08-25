'use strict';

function validator(parser) {
  function validateAge(data) {
    const age = parser.getAge(data);
    return age === null ? false : age >= 0;
  }

  return {
    validateAge: validateAge
  };
}

module.exports = validator;
