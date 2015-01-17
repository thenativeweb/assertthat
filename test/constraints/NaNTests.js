'use strict';

var chai = require('chai').assert;

var isNan = require('../../lib/constraints/nan');

suite('false', function () {
  test('is a function.', function (done) {
    chai.typeOf(isNan, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(isNan(Number.NaN), 'function');
    done();
  });

  suite('constraint', function () {
    test('does not throw an error if actual is NaN.', function (done) {
      chai.doesNotThrow(function () {
        isNan(Number.NaN)();
      });
      done();
    });

    test('throws an error if actual is not NaN.', function (done) {
      chai.throw(function () {
        isNan(23)();
      }, 'Expected 23 to be NaN.');
      done();
    });
  });
});
