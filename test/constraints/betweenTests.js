'use strict';

var chai = require('chai').assert;

var between = require('../../lib/constraints/between');

suite('between', function () {
  test('is a function.', function (done) {
    chai.typeOf(between, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(between(23), 'function');
    done();
  });

  suite('constraint', function () {
    test('throws an error if expected lower bound is missing.', function (done) {
      chai.throw(function () {
        between(23)();
      }, 'Expected lower bound is missing.');
      done();
    });

    test('throws an error if expected upper bound is missing.', function (done) {
      chai.throw(function () {
        between(23)(7);
      }, 'Expected upper bound is missing.');
      done();
    });

    test('does not throw an error if actual is between the expected lower and upper bounds.', function (done) {
      chai.doesNotThrow(function () {
        between(23)(7, 42);
      });
      done();
    });

    test('throws an error if actual is not between the expected lower and upper bounds.', function (done) {
      chai.throw(function () {
        between(7)(23, 42);
      }, 'Expected 7 to be between 23 and 42.');
      done();
    });
  });

  suite('negated', function () {
    test('is a function.', function (done) {
      chai.typeOf(between.negated, 'function');
      done();
    });

    test('returns a constraint.', function (done) {
      chai.typeOf(between.negated(23), 'function');
      done();
    });

    suite('constraint', function () {
      test('throws an error if expected lower bound is missing.', function (done) {
        chai.throw(function () {
          between.negated(23)();
        }, 'Expected lower bound is missing.');
        done();
      });

      test('throws an error if expected upper bound is missing.', function (done) {
        chai.throw(function () {
          between.negated(23)(7);
        }, 'Expected upper bound is missing.');
        done();
      });

      test('does not throw an error if actual is not between the expected lower and upper bounds.', function (done) {
        chai.doesNotThrow(function () {
          between.negated(42)(7, 23);
        });
        done();
      });

      test('throws an error if actual is between the expected lower and upper bounds.', function (done) {
        chai.throw(function () {
          between.negated(23)(7, 42);
        }, 'Expected 23 not to be between 7 and 42.');
        done();
      });
    });
  });
});
