'use strict';

var chai = require('chai').assert;

var atLeast = require('../../lib/constraints/atLeast');

suite('atLeast', function () {
  test('is a function.', function (done) {
    chai.typeOf(atLeast, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(atLeast(23), 'function');
    done();
  });

  suite('constraint', function () {
    test('throws an error if expected is missing.', function (done) {
      chai.throw(function () {
        atLeast(23)();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is at least expected.', function (done) {
      chai.doesNotThrow(function () {
        atLeast(23)(23);
      });
      done();
    });

    test('throws an error if actual is not at least expected.', function (done) {
      chai.throw(function () {
        atLeast(23)(42);
      }, 'Expected 23 to be at least 42.');
      done();
    });
  });

  suite('negated', function () {
    test('is a function.', function (done) {
      chai.typeOf(atLeast.negated, 'function');
      done();
    });

    test('returns a constraint.', function (done) {
      chai.typeOf(atLeast.negated(23), 'function');
      done();
    });

    suite('constraint', function () {
      test('throws an error if expected is missing.', function (done) {
        chai.throw(function () {
          atLeast.negated(23)();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual is not at least expected.', function (done) {
        chai.doesNotThrow(function () {
          atLeast.negated(23)(42);
        });
        done();
      });

      test('throws an error if actual is at least expected.', function (done) {
        chai.throw(function () {
          atLeast.negated(23)(23);
        }, 'Expected 23 not to be at least 23.');
        done();
      });
    });
  });
});
