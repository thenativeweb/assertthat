'use strict';

var chai = require('chai').assert;

var humanReadable = require('../lib/humanReadable');

suite('humanReadable', function () {
  test('is a function.', function (done) {
    chai.typeOf(humanReadable, 'function');
    done();
  });

  test('throws an error when the value is missing.', function (done) {
    chai.throw(function () {
      humanReadable();
    }, 'Value is missing.');
    done();
  });

  test('returns the stringified value when given a number.', function (done) {
    chai.equal(humanReadable(23), '23');
    done();
  });

  test('returns a quoted value when given a string.', function (done) {
    chai.equal(humanReadable('foo'), '\'foo\'');
    done();
  });
});
