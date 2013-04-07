'use strict';

var assert = require('../lib/assert.js');

suite('is.null', function () {
  test('null => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(null, is.null());
    });
  });
  test('not null => exception', function () {
    assert.throws(function () {
      assert.that(undefined, is.null());
    });
  });
});

suite('is.not.null', function () {
  test('null => exception', function () {
    assert.throws(function () {
      assert.that(null, is.not.null());
    });
  });
  test('not null => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(undefined, is.not.null());
    });
  });
});