'use strict';

var chai = require('chai').assert;

var lessThan = require('../../lib/constraints/lessThan');

suite('lessThan', function () {
  test('is a function.', function (done) {
    chai.typeOf(lessThan, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(lessThan(23), 'function');
    done();
  });

  suite('constraint', function () {
    test('throws an error if expected is missing.', function (done) {
      chai.throw(function () {
        lessThan(23)();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is less than expected.', function (done) {
      chai.doesNotThrow(function () {
        lessThan(23)(42);
      });
      done();
    });

    test('throws an error if actual is not less than expected.', function (done) {
      chai.throw(function () {
        lessThan(42)(23);
      }, 'Expected 42 to be less than 23.');
      done();
    });
  });

  suite('negated', function () {
    test('is a function.', function (done) {
      chai.typeOf(lessThan.negated, 'function');
      done();
    });

    test('returns a constraint.', function (done) {
      chai.typeOf(lessThan.negated(23), 'function');
      done();
    });

    suite('constraint', function () {
      test('throws an error if expected is missing.', function (done) {
        chai.throw(function () {
          lessThan.negated(23)();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual is not less than expected.', function (done) {
        chai.doesNotThrow(function () {
          lessThan.negated(42)(23);
        });
        done();
      });

      test('throws an error if actual is less than expected.', function (done) {
        chai.throw(function () {
          lessThan.negated(23)(42);
        }, 'Expected 23 not to be less than 42.');
        done();
      });
    });
  });
});
