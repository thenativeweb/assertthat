'use strict';

var chai = require('chai').assert;

var containing = require('../../lib/constraints/containing');

suite('containing', function () {
  test('is a function.', function (done) {
    chai.typeOf(containing, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(containing('foobar'), 'function');
    done();
  });

  suite('constraint', function () {
    test('throws an error if expected is missing.', function (done) {
      chai.throw(function () {
        containing('foobar')();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual contains expected.', function (done) {
      chai.doesNotThrow(function () {
        containing('foobar')('ooba');
      });
      done();
    });

    test('throws an error if actual does not contain expected.', function (done) {
      chai.throw(function () {
        containing('foobar')('nufta');
      }, 'Expected \'foobar\' to contain \'nufta\'.');
      done();
    });
  });

  suite('negated', function () {
    test('is a function.', function (done) {
      chai.typeOf(containing.negated, 'function');
      done();
    });

    test('returns a constraint.', function (done) {
      chai.typeOf(containing.negated('foobar'), 'function');
      done();
    });

    suite('constraint', function () {
      test('throws an error if expected is missing.', function (done) {
        chai.throw(function () {
          containing.negated('foobar')();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual does not contain expected.', function (done) {
        chai.doesNotThrow(function () {
          containing.negated('foobar')('nufta');
        });
        done();
      });

      test('throws an error if actual contains expected.', function (done) {
        chai.throw(function () {
          containing.negated('foobar')('ooba');
        }, 'Expected \'foobar\' not to contain \'ooba\'.');
        done();
      });
    });
  });
});
