'use strict';

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
const doubles = numbers.map((num) => 2*num);
doubles.forEach(num => console.log(num));

