'use strict';

var chai = require('chai').assert;

var assert = require('../lib/assertThat');

suite.only('assert', function () {
  test('is an object.', function (done) {
    chai.typeOf(assert, 'object');
    done();
  });

  suite('that', function () {
    test('is a function.', function (done) {
      chai.typeOf(assert.that, 'function');
      done();
    });

    test('throws an exception if actual is missing.', function (done) {
      chai.throw(function () {
        assert.that();
      }, 'Actual is missing.');
      done();
    });

    test('does not throw an exception if actual is undefined.', function (done) {
      chai.doesNotThrow(function () {
        assert.that(undefined);
      });
      done();
    });

    test('returns an object.', function (done) {
      chai.typeOf(assert.that(23), 'object');
      done();
    });

    suite('is', function () {
      test('is an object.', function (done) {
        chai.typeOf(assert.that(23).is, 'object');
        done();
      });

      suite('ofType', function () {
        test('is a function.', function (done) {
          chai.typeOf(assert.that(23).is.ofType, 'function');
          done();
        });

        test('throws an exception if expected is missing.', function (done) {
          chai.throw(function () {
            assert.that(23).is.ofType();
          }, 'Expected is missing.');
          done();
        });

        test('does not throw an exception if actual is equal to expected.', function (done) {
          chai.doesNotThrow(function () {
            assert.that(23).is.ofType('number');
          });
          done();
        });

        test('throws an exception if actual is not equal to expected.', function (done) {
          chai.throw(function () {
            assert.that(23).is.ofType('string');
          }, 'Expected \'23\' to be of type \'string\'.');
          done();
        });
      });

      suite('equalTo', function () {
        test('is a function.', function (done) {
          chai.typeOf(assert.that(23).is.equalTo, 'function');
          done();
        });

        test('throws an exception if expected is missing.', function (done) {
          chai.throw(function () {
            assert.that(23).is.equalTo();
          }, 'Expected is missing.');
          done();
        });

        test('does not throw an exception if actual is equal to expected.', function (done) {
          chai.doesNotThrow(function () {
            assert.that(23).is.equalTo(23);
          });
          done();
        });

        test('throws an exception if actual is not equal to expected.', function (done) {
          chai.throw(function () {
            assert.that(23).is.equalTo(42);
          }, 'Expected \'23\' to equal \'42\'.');
          done();
        });
      });
    });
  });
});
