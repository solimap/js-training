'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

const rewire = require('rewire');
const validator = rewire('./validator');

describe('When age is parsed', function() {
  const data = {foo: 'bar'};
  let mockParser;

  describe('and age is null', function() {
    beforeEach(function() {
      mockParser = {
        getAge: sinon.stub().withArgs(data).returns(null)
      };
      validator.__set__('parser', mockParser);
    });

    it('should return false', function() {
      expect(validator.validateAge(data)).to.be.false;
    });
  });

  describe('and age is negative', function() {
    beforeEach(function() {
      mockParser = {
        getAge: sinon.stub().withArgs(data).returns(-1)
      };
      validator.__set__('parser', mockParser);
    });

    it('should return false', function() {
      expect(validator.validateAge(data)).to.be.false;
    });
  });

  describe('and age is non-negative', function() {
    beforeEach(function() {
      mockParser = {
        getAge: sinon.stub().withArgs(data).returns(1)
      };
      validator.__set__('parser', mockParser);
    });

    it('should return true', function() {
      expect(validator.validateAge(data)).to.be.true;
    });
  });
});
