'use strict';

var chai = require('chai').assert;

var greaterThan = require('../../lib/constraints/greaterThan');

suite('greaterThan', function () {
  test('is a function.', function (done) {
    chai.typeOf(greaterThan, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(greaterThan(23), 'function');
    done();
  });

  suite('constraint', function () {
    test('throws an error if expected is missing.', function (done) {
      chai.throw(function () {
        greaterThan(23)();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is greater than expected.', function (done) {
      chai.doesNotThrow(function () {
        greaterThan(42)(23);
      });
      done();
    });

    test('throws an error if actual is not greater than expected.', function (done) {
      chai.throw(function () {
        greaterThan(23)(42);
      }, 'Expected 23 to be greater than 42.');
      done();
    });
  });

  suite('negated', function () {
    test('is a function.', function (done) {
      chai.typeOf(greaterThan.negated, 'function');
      done();
    });

    test('returns a constraint.', function (done) {
      chai.typeOf(greaterThan.negated(23), 'function');
      done();
    });

    suite('constraint', function () {
      test('throws an error if expected is missing.', function (done) {
        chai.throw(function () {
          greaterThan.negated(23)();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual is not greater than expected.', function (done) {
        chai.doesNotThrow(function () {
          greaterThan.negated(23)(42);
        });
        done();
      });

      test('throws an error if actual is greater than expected.', function (done) {
        chai.throw(function () {
          greaterThan.negated(42)(23);
        }, 'Expected 42 not to be greater than 23.');
        done();
      });
    });
  });
});
