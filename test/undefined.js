'use strict';

var assert = require('../lib/assert.js');

suite('is.undefined', function () {
  test('undefined => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(undefined, is.undefined());
    });
  });
  test('not undefined => exception', function () {
    assert.throws(function () {
      assert.that(null, is.undefined());
    });
  });
});

suite('is.not.undefined', function () {
  test('undefined => exception', function () {
    assert.throws(function () {
      assert.that(undefined, is.not.undefined());
    });
  });
  test('not undefined => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(null, is.not.undefined());
    });
  });
});