'use strict';

const _ = require('lodash');

function getAge(data) {
  const ageField =  _.get(data, 'person.age', null);
  const numericAge = ageField !== null ? _.parseInt(ageField) : null;
  return !_.isNaN(numericAge) ? numericAge : null;
}

module.exports = {
  getAge: getAge
};
