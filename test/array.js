'use strict';

var assert = require('../lib/assert.js');

suite('array-style', function () {
  suite('is.greaterThan', function () {
    test('greater than => ok', function () {
      assert.doesNotThrow(function () {
        assert.that([ 42, 23, 7, 12 ], 0, 3, is.greaterThan(5));
      });
    });
    test('equal => exception', function () {
      assert.throws(function () {
        assert.that([ 42, 23, 7, 12 ], 0, 3, is.greaterThan(7));
      });
    });
    test('less than => exception', function () {
      assert.throws(function () {
        assert.that([ 42, 23, 7, 12 ], 0, 3, is.greaterThan(15));
      });
    });
  });
});