'use strict';

var chai = require('chai').assert;

var ofType = require('../../lib/constraints/ofType');

suite('ofType', function () {
  test('is a function.', function (done) {
    chai.typeOf(ofType, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(ofType(23), 'function');
    done();
  });

  suite('constraint', function () {
    test('throws an exception if expected is missing.', function (done) {
      chai.throw(function () {
        ofType(23)();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an exception if actual is equal to expected.', function (done) {
      chai.doesNotThrow(function () {
        ofType(23)('number');
      });
      done();
    });

    test('throws an exception if actual is not equal to expected.', function (done) {
      chai.throw(function () {
        ofType(23)('string');
      }, 'Expected \'23\' to be of type \'string\'.');
      done();
    });
  });
});
