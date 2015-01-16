'use strict';

var chai = require('chai').assert;

var equalTo = require('../../lib/constraints/equalTo'),
    fail = require('../../lib/fail');

suite('equalTo', function () {
  test('is a function.', function (done) {
    chai.typeOf(equalTo, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(equalTo(23, fail), 'function');
    done();
  });

  suite('constraint', function () {
    test('throws an error if expected is missing.', function (done) {
      chai.throw(function () {
        equalTo(23, fail)();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is equal to expected.', function (done) {
      chai.doesNotThrow(function () {
        equalTo(23, fail)(23);
      });
      done();
    });

    test('throws an error if actual is not equal to expected.', function (done) {
      chai.throw(function () {
        equalTo(23, fail)(42);
      }, 'Expected 23 to equal 42.');
      done();
    });
  });
});
