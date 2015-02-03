'use strict';

var chai = require('chai').assert;

var isUndefined = require('../../lib/constraints/undefined');

suite('undefined', function () {
  test('is a function.', function (done) {
    chai.typeOf(isUndefined, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(isUndefined(undefined), 'function');
    done();
  });

  suite('constraint', function () {
    test('does not throw an error if actual is undefined.', function (done) {
      chai.doesNotThrow(function () {
        isUndefined(undefined)();
      });
      done();
    });

    test('throws an error if actual is not undefined.', function (done) {
      chai.throw(function () {
        isUndefined(23)();
      }, 'Expected 23 to be undefined.');
      done();
    });
  });

  suite('negated', function () {
    test('is a function.', function (done) {
      chai.typeOf(isUndefined.negated, 'function');
      done();
    });

    test('returns a constraint.', function (done) {
      chai.typeOf(isUndefined.negated(undefined), 'function');
      done();
    });

    suite('constraint', function () {
      test('does not throw an error if actual is not undefined.', function (done) {
        chai.doesNotThrow(function () {
          isUndefined.negated(23)();
        });
        done();
      });

      test('throws an error if actual is undefined.', function (done) {
        chai.throw(function () {
          isUndefined.negated(undefined)();
        }, 'Expected undefined not to be undefined.');
        done();
      });
    });
  });
});
