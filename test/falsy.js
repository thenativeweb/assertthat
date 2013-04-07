'use strict';

var assert = require('../lib/assert.js');

suite('is.falsy', function () {
  test('falsy => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(null, is.falsy());
    });
  });
  test('not-falsy => exception', function () {
    assert.throws(function () {
      assert.that(23, is.falsy());
    });
  });
});

suite('is.not.falsy', function () {
  test('falsy => exception', function () {
    assert.throws(function () {
      assert.that(null, is.not.falsy());
    });
  });
  test('not-falsy => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(23, is.not.falsy());
    });
  });
});