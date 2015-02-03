'use strict';

var chai = require('chai').assert;

var isTrue = require('../../lib/constraints/true');

suite('true', function () {
  test('is a function.', function (done) {
    chai.typeOf(isTrue, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(isTrue(true), 'function');
    done();
  });

  suite('constraint', function () {
    test('does not throw an error if actual is true.', function (done) {
      chai.doesNotThrow(function () {
        isTrue(true)();
      });
      done();
    });

    test('throws an error if actual is not true.', function (done) {
      chai.throw(function () {
        isTrue(false)();
      }, 'Expected false to be true.');
      done();
    });
  });

  suite('negated', function () {
    test('is a function.', function (done) {
      chai.typeOf(isTrue.negated, 'function');
      done();
    });

    test('returns a constraint.', function (done) {
      chai.typeOf(isTrue.negated(true), 'function');
      done();
    });

    suite('constraint', function () {
      test('does not throw an error if actual is not true.', function (done) {
        chai.doesNotThrow(function () {
          isTrue.negated(false)();
        });
        done();
      });

      test('throws an error if actual is true.', function (done) {
        chai.throw(function () {
          isTrue.negated(true)();
        }, 'Expected true not to be true.');
        done();
      });
    });
  });
});
