'use strict';

var _ = require('lodash');

var calculator = {
  factor: 5,
  multiply: function(numbers) {
    var _this = this;
    return _.map(numbers, function(num) {
      return _this.factor*num;
    });
  }
};

var calculator2 = {
  factor: 5,
  multiply: function(numbers) {
    var multiplierFunction = function(num) {
      return this.factor*num;
    };
    return _.map(numbers, multiplierFunction.bind(this));
  }
};

console.log(calculator.multiply([1, 2, 3]));
console.log(calculator2.multiply([1, 2, 3]));
