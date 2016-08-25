'use strict';

const parser = require('./parser');
const expect = require('chai').expect;

describe('When age is parsed', function() {
  let data;

  beforeEach(function() {
    data = {
      person: {
        age: '70'
      }
    };
  });

  it('should return age in numeric format', function() {
    const age = parser.getAge(data);
    expect(age).to.equal(70);
  });

  describe('and age is not given', function() {
    beforeEach(function() {
      data = {};
    });

    it('should return null', function() {
      const age = parser.getAge(data);
      expect(age).to.be.null;
    });
  });

  describe('and age is not in numeric format', function() {
    beforeEach(function() {
      data = {
        person: {
          age: 'foobar'
        }
      };
    });

    it('should return null', function() {
      const age = parser.getAge(data);
      expect(age).to.be.null;
    });
  });
});
