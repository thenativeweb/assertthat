'use strict';

var chai = require('chai').assert;

var equalTo = require('../../lib/constraints/equalTo');

suite('equalTo', function () {
  test('is a function.', function (done) {
    chai.typeOf(equalTo, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(equalTo(23), 'function');
    done();
  });

  suite('constraint', function () {
    test('throws an error if expected is missing.', function (done) {
      chai.throw(function () {
        equalTo(23)();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is equal to expected.', function (done) {
      chai.doesNotThrow(function () {
        equalTo(23)(23);
      });
      done();
    });

    test('throws an error if actual is not equal to expected.', function (done) {
      chai.throw(function () {
        equalTo(23)(42);
      }, 'Expected 23 to equal 42.');
      done();
    });
  });

  suite('negated', function () {
    test('is a function.', function (done) {
      chai.typeOf(equalTo.negated, 'function');
      done();
    });

    test('returns a constraint.', function (done) {
      chai.typeOf(equalTo.negated(23), 'function');
      done();
    });

    suite('constraint', function () {
      test('throws an error if expected is missing.', function (done) {
        chai.throw(function () {
          equalTo.negated(23)();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual is not equal to expected.', function (done) {
        chai.doesNotThrow(function () {
          equalTo.negated(23)(42);
        });
        done();
      });

      test('throws an error if actual is equal to expected.', function (done) {
        chai.throw(function () {
          equalTo.negated(23)(23);
        }, 'Expected 23 not to equal 23.');
        done();
      });
    });
  });
});
