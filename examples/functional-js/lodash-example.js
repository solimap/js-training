'use strict';

const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];
let foo;

const sum = _.reduce(numbers, (total, num) => total + num, 0);
console.log(sum);
const doubles = _.map(numbers, (num) => 2*num);
_.forEach(doubles, num => console.log(num));

if (_.isUndefined(foo)) {
  console.log('Foo is not defined');
}
