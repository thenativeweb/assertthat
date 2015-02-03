'use strict';

var chai = require('chai').assert;

var falsy = require('../../lib/constraints/falsy');

suite('falsy', function () {
  test('is a function.', function (done) {
    chai.typeOf(falsy, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(falsy(0), 'function');
    done();
  });

  suite('constraint', function () {
    test('does not throw an error if actual is falsy.', function (done) {
      chai.doesNotThrow(function () {
        falsy(0)();
      });
      done();
    });

    test('throws an error if actual is not falsy.', function (done) {
      chai.throw(function () {
        falsy(23)();
      }, 'Expected 23 to be falsy.');
      done();
    });
  });

  suite('negated', function () {
    test('is a function.', function (done) {
      chai.typeOf(falsy.negated, 'function');
      done();
    });

    test('returns a constraint.', function (done) {
      chai.typeOf(falsy.negated(0), 'function');
      done();
    });

    suite('constraint', function () {
      test('does not throw an error if actual is not falsy.', function (done) {
        chai.doesNotThrow(function () {
          falsy.negated(23)();
        });
        done();
      });

      test('throws an error if actual is falsy.', function (done) {
        chai.throw(function () {
          falsy.negated(0)();
        }, 'Expected 0 not to be falsy.');
        done();
      });
    });
  });
});
