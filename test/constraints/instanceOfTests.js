'use strict';

var chai = require('chai').assert;

var instanceOf = require('../../lib/constraints/instanceOf');

suite('instanceOf', function () {
  test('is a function.', function (done) {
    chai.typeOf(instanceOf, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(instanceOf(new Error()), 'function');
    done();
  });

  suite('constraint', function () {
    test('throws an error if expected is missing.', function (done) {
      chai.throw(function () {
        instanceOf(new Error())();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is an instance of expected.', function (done) {
      chai.doesNotThrow(function () {
        instanceOf(new Error())(Error);
      });
      done();
    });

    test('throws an error if actual is not an instance of expected.', function (done) {
      chai.throw(function () {
        instanceOf({})(Error);
      }, 'Expected {} to be an instance of Error.');
      done();
    });
  });

  suite('negated', function () {
    test('is a function.', function (done) {
      chai.typeOf(instanceOf.negated, 'function');
      done();
    });

    test('returns a constraint.', function (done) {
      chai.typeOf(instanceOf.negated(new Error()), 'function');
      done();
    });

    suite('constraint', function () {
      test('throws an error if expected is missing.', function (done) {
        chai.throw(function () {
          instanceOf.negated(new Error())();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual is not an instance of expected.', function (done) {
        chai.doesNotThrow(function () {
          instanceOf.negated({})(Error);
        });
        done();
      });

      test('throws an error if actual is an instance of expected.', function (done) {
        chai.throw(function () {
          instanceOf.negated(new Error())(Error);
        }, 'Expected {} not to be an instance of Error.');
        done();
      });
    });
  });
});
