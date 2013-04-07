'use strict';

var assert = require('../lib/assert.js');

suite('is.greaterThan', function () {
  test('greater than => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(42, is.greaterThan(23));
    });
  });
  test('equal => exception', function () {
    assert.throws(function () {
      assert.that(23, is.greaterThan(23));
    });
  });
  test('less than => exception', function () {
    assert.throws(function () {
      assert.that(23, is.greaterThan(42));
    });
  });
});

suite('is.not.greaterThan', function () {
  test('greater than => exception', function () {
    assert.throws(function () {
      assert.that(42, is.not.greaterThan(23));
    });
  });
  test('equal => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(23, is.not.greaterThan(23));
    });
  });
  test('less than => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(23, is.not.greaterThan(42));
    });
  });
});