'use strict';

var assert = require('../lib/assert.js');

suite('is.atLeast', function () {
  test('greater than => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(42, is.atLeast(23));
    });
  });
  test('equal => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(23, is.atLeast(23));
    });
  });
  test('less than => exception', function () {
    assert.throws(function () {
      assert.that(23, is.atLeast(42));
    });
  });
});

suite('is.not.atLeast', function () {
  test('greater than => exception', function () {
    assert.throws(function () {
      assert.that(42, is.not.atLeast(23));
    });
  });
  test('equal => exception', function () {
    assert.throws(function () {
      assert.that(23, is.not.atLeast(23));
    });
  });
  test('less than => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(23, is.not.atLeast(42));
    });
  });
});