'use strict';

var Person = function(options) {
  options = options || {};
  this.name = options.name || 'no name';
  this.age = options.age || 0;
}

Person.prototype.getName = function() {
  return this.name;
}

Person.prototype.setName = function(name) {
  this.name = name;
  return this;
}

Person.prototype.setAge = function(age) {
  this.age = age;
  return this;
}

var president = new Person({name: "Default name"});
console.log(president);
president.setName('Donald Thumb').setAge(70);
console.log(president);
