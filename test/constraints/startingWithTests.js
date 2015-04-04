'use strict';

var chai = require('chai').assert;

var startingWith = require('../../lib/constraints/startingWith');

suite('startingWith', function () {
  test('is a function.', function (done) {
    chai.typeOf(startingWith, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(startingWith('foobar'), 'function');
    done();
  });

  suite('constraint', function () {
    test('throws an error if expected is missing.', function (done) {
      chai.throw(function () {
        startingWith('foobar')();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual starts with expected.', function (done) {
      chai.doesNotThrow(function () {
        startingWith('foobar')('foo');
      });
      done();
    });

    test('throws an error if actual does not start with expected.', function (done) {
      chai.throw(function () {
        startingWith('foobar')('bar');
      }, 'Expected \'foobar\' to start with \'bar\'.');
      done();
    });
  });

  suite('negated', function () {
    test('is a function.', function (done) {
      chai.typeOf(startingWith.negated, 'function');
      done();
    });

    test('returns a constraint.', function (done) {
      chai.typeOf(startingWith.negated('foobar'), 'function');
      done();
    });

    suite('constraint', function () {
      test('throws an error if expected is missing.', function (done) {
        chai.throw(function () {
          startingWith.negated('foobar')();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual does not start with expected.', function (done) {
        chai.doesNotThrow(function () {
          startingWith.negated('foobar')('bar');
        });
        done();
      });

      test('throws an error if actual starts with expected.', function (done) {
        chai.throw(function () {
          startingWith.negated('foobar')('foo');
        }, 'Expected \'foobar\' not to start with \'foo\'.');
        done();
      });
    });
  });
});
