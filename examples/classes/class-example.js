'use strict';

class Person {
  constructor(options) {
    options = options || {};
    this.name = options.name || 'no name';
    this.age = options.age || 0;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }
}

const president = new Person();
president.setName('Donald Thumb').setAge(70);
console.log(president);
