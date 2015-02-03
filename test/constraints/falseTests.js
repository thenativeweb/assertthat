'use strict';

var chai = require('chai').assert;

var isFalse = require('../../lib/constraints/false');

suite('false', function () {
  test('is a function.', function (done) {
    chai.typeOf(isFalse, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(isFalse(false), 'function');
    done();
  });

  suite('constraint', function () {
    test('does not throw an error if actual is false.', function (done) {
      chai.doesNotThrow(function () {
        isFalse(false)();
      });
      done();
    });

    test('throws an error if actual is not false.', function (done) {
      chai.throw(function () {
        isFalse(true)();
      }, 'Expected true to be false.');
      done();
    });
  });

  suite('negated', function () {
    test('is a function.', function (done) {
      chai.typeOf(isFalse.negated, 'function');
      done();
    });

    test('returns a constraint.', function (done) {
      chai.typeOf(isFalse.negated(false), 'function');
      done();
    });

    suite('constraint', function () {
      test('does not throw an error if actual is not false.', function (done) {
        chai.doesNotThrow(function () {
          isFalse.negated(true)();
        });
        done();
      });

      test('throws an error if actual is false.', function (done) {
        chai.throw(function () {
          isFalse.negated(false)();
        }, 'Expected false not to be false.');
        done();
      });
    });
  });
});
