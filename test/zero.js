'use strict';

var assert = require('../lib/assert.js');

suite('is.equalTo(0)', function () {
  test('equal => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(0, is.equalTo(0));
    });
  });
  test('not equal => exception', function () {
    assert.throws(function () {
      assert.that(23, is.equalTo(0));
    });
  });
});

suite('is.not.equalTo(0)', function () {
  test('equal => exception', function () {
    assert.throws(function () {
      assert.that(0, is.not.equalTo(0));
    });
  });
  test('not equal => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(0, is.not.equalTo(23));
    });
  });
});