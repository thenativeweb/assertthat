'use strict';

var assert = require('../lib/assert.js');

suite('is.atMost', function () {
  test('greater than => exception', function () {
    assert.throws(function () {
      assert.that(42, is.atMost(23));
    });
  });
  test('equal => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(23, is.atMost(23));
    });
  });
  test('less than => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(23, is.atMost(42));
    });
  });
});

suite('is.not.atMost', function () {
  test('greater than => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(42, is.not.atMost(23));
    });
  });
  test('equal => exception', function () {
    assert.throws(function () {
      assert.that(23, is.not.atMost(23));
    });
  });
  test('less than => ok', function () {
    assert.throws(function () {
      assert.that(23, is.not.atMost(42));
    });
  });
});