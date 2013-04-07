'use strict';

var assert = require('../lib/assert.js');

suite('is.true', function () {
  test('true => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(true, is.true());
    });
  });
  test('false => exception', function () {
    assert.throws(function () {
      assert.that(false, is.true());
    });
  });
});

suite('is.not.true', function () {
  test('true => exception', function () {
    assert.throws(function () {
      assert.that(true, is.not.true());
    });
  });
  test('false => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(false, is.not.true());
    });
  });
});