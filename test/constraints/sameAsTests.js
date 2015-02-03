'use strict';

var chai = require('chai').assert;

var sameAs = require('../../lib/constraints/sameAs');

suite('sameAs', function () {
  test('is a function.', function (done) {
    chai.typeOf(sameAs, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(sameAs(23), 'function');
    done();
  });

  suite('constraint', function () {
    test('throws an error if expected is missing.', function (done) {
      chai.throw(function () {
        sameAs(23)();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is same as expected.', function (done) {
      chai.doesNotThrow(function () {
        sameAs(23)(23);
      });
      done();
    });

    test('throws an error if actual is not same as expected.', function (done) {
      chai.throw(function () {
        sameAs(23)(42);
      }, 'Expected 23 to be same as 42.');
      done();
    });
  });

  suite('negated', function () {
    test('is a function.', function (done) {
      chai.typeOf(sameAs.negated, 'function');
      done();
    });

    test('returns a constraint.', function (done) {
      chai.typeOf(sameAs.negated(23), 'function');
      done();
    });

    suite('constraint', function () {
      test('throws an error if expected is missing.', function (done) {
        chai.throw(function () {
          sameAs.negated(23)();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual is not same as expected.', function (done) {
        chai.doesNotThrow(function () {
          sameAs.negated(23)(42);
        });
        done();
      });

      test('throws an error if actual is same as expected.', function (done) {
        chai.throw(function () {
          sameAs.negated(23)(23);
        }, 'Expected 23 not to be same as 23.');
        done();
      });
    });
  });
});
