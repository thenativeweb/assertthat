'use strict';

var chai = require('chai').assert;

var endingWith = require('../../lib/constraints/endingWith');

suite('endingWith', function () {
  test('is a function.', function (done) {
    chai.typeOf(endingWith, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(endingWith('foobar'), 'function');
    done();
  });

  suite('constraint', function () {
    test('throws an error if expected is missing.', function (done) {
      chai.throw(function () {
        endingWith('foobar')();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual ends with expected.', function (done) {
      chai.doesNotThrow(function () {
        endingWith('foobar')('bar');
      });
      done();
    });

    test('throws an error if actual does not end with expected.', function (done) {
      chai.throw(function () {
        endingWith('foobar')('foo');
      }, 'Expected \'foobar\' to end with \'foo\'.');
      done();
    });
  });

  suite('negated', function () {
    test('is a function.', function (done) {
      chai.typeOf(endingWith.negated, 'function');
      done();
    });

    test('returns a constraint.', function (done) {
      chai.typeOf(endingWith.negated('foobar'), 'function');
      done();
    });

    suite('constraint', function () {
      test('throws an error if expected is missing.', function (done) {
        chai.throw(function () {
          endingWith.negated('foobar')();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual does not end with expected.', function (done) {
        chai.doesNotThrow(function () {
          endingWith.negated('foobar')('foo');
        });
        done();
      });

      test('throws an error if actual ends with expected.', function (done) {
        chai.throw(function () {
          endingWith.negated('foobar')('bar');
        }, 'Expected \'foobar\' not to end with \'bar\'.');
        done();
      });
    });
  });
});
