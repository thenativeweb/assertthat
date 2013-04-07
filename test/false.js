'use strict';

var assert = require('../lib/assert.js');

suite('is.false', function () {
  test('true => exception', function () {
    assert.throws(function () {
      assert.that(true, is.false());
    });
  });
  test('false => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(false, is.false());
    });
  });
});

suite('is.not.false', function () {
  test('true => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(true, is.not.false());
    });
  });
  test('false => exception', function () {
    assert.throws(function () {
      assert.that(false, is.not.false());
    });
  });
});