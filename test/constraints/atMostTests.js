'use strict';

var chai = require('chai').assert;

var atMost = require('../../lib/constraints/atMost');

suite('atMost', function () {
  test('is a function.', function (done) {
    chai.typeOf(atMost, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(atMost(23), 'function');
    done();
  });

  suite('constraint', function () {
    test('throws an error if expected is missing.', function (done) {
      chai.throw(function () {
        atMost(23)();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is at most expected.', function (done) {
      chai.doesNotThrow(function () {
        atMost(23)(23);
      });
      done();
    });

    test('throws an error if actual is not at most expected.', function (done) {
      chai.throw(function () {
        atMost(42)(23);
      }, 'Expected 42 to be at most 23.');
      done();
    });
  });

  suite('negated', function () {
    test('is a function.', function (done) {
      chai.typeOf(atMost.negated, 'function');
      done();
    });

    test('returns a constraint.', function (done) {
      chai.typeOf(atMost.negated(23), 'function');
      done();
    });

    suite('constraint', function () {
      test('throws an error if expected is missing.', function (done) {
        chai.throw(function () {
          atMost.negated(23)();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual is not at most expected.', function (done) {
        chai.doesNotThrow(function () {
          atMost.negated(42)(23);
        });
        done();
      });

      test('throws an error if actual is at most expected.', function (done) {
        chai.throw(function () {
          atMost.negated(23)(23);
        }, 'Expected 23 to be at most 23.');
        done();
      });
    });
  });
});
