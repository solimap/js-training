'use strict';

function calculator(c) {
  var a = 5;

  if (c > 3) {
    var b = 3;
  }

  console.log(b);
  return a + b + c; // works always in Javascript!
}

console.log(calculator(2));
console.log(calculator(5));