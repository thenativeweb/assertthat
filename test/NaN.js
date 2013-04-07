'use strict';

var assert = require('../lib/assert.js');

suite('is.NaN', function () {
  test('NaN => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(NaN, is.NaN());
    });
  });
  test('not NaN => exception', function () {
    assert.throws(function () {
      assert.that(undefined, is.NaN());
    });
  });
});

suite('is.not.NaN', function () {
  test('NaN => exception', function () {
    assert.throws(function () {
      assert.that(NaN, is.not.NaN());
    });
  });
  test('not NaN => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(undefined, is.not.NaN());
    });
  });
});