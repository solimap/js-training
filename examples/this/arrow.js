'use strict';

const calculator = {
  factor: 5,
  multiply: function(numbers) {
    return numbers.map((num) => {
      return this.factor*num;
    });
  }
};

console.log(calculator.multiply([1, 2, 3]));
