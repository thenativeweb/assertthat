'use strict';

var chai = require('chai').assert;

var isNull = require('../../lib/constraints/null');

suite('null', function () {
  test('is a function.', function (done) {
    chai.typeOf(isNull, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(isNull(null), 'function');
    done();
  });

  suite('constraint', function () {
    test('does not throw an error if actual is null.', function (done) {
      chai.doesNotThrow(function () {
        isNull(null)();
      });
      done();
    });

    test('throws an error if actual is not null.', function (done) {
      chai.throw(function () {
        isNull(23)();
      }, 'Expected 23 to be null.');
      done();
    });
  });

  suite('negated', function () {
    test('is a function.', function (done) {
      chai.typeOf(isNull.negated, 'function');
      done();
    });

    test('returns a constraint.', function (done) {
      chai.typeOf(isNull.negated(null), 'function');
      done();
    });

    suite('constraint', function () {
      test('does not throw an error if actual is not null.', function (done) {
        chai.doesNotThrow(function () {
          isNull.negated(23)();
        });
        done();
      });

      test('throws an error if actual is null.', function (done) {
        chai.throw(function () {
          isNull.negated(null)();
        }, 'Expected null not to be null.');
        done();
      });
    });
  });
});
