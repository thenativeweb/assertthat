'use strict';

var assert = require('../lib/assert.js');

suite('array-style', function () {
  suite('is.greaterThan', function () {
    test('greater than => ok', function (done) {
      assert.doesNotThrow(function () {
        assert.that([ 42, 23, 7, 12 ], 0, 3, is.greaterThan(5));
      });
      done();
    });

    test('equal => exception', function (done) {
      assert.throws(function () {
        assert.that([ 42, 23, 7, 12 ], 0, 3, is.greaterThan(7));
      });
      done();
    });

    test('less than => exception', function (done) {
      assert.throws(function () {
        assert.that([ 42, 23, 7, 12 ], 0, 3, is.greaterThan(15));
      });
      done();
    });
  });
});
