'use strict';

var assert = require('../lib/assert.js');

suite('is.between', function () {
  test('greater than => exception', function () {
    assert.throws(function () {
      assert.that(65, is.between(23, 42));
    });
  });
  test('in between => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(35, is.between(23, 42));
    });
  });
  test('less than => exception', function () {
    assert.throws(function () {
      assert.that(7, is.between(23, 42));
    });
  });
});

suite('is.not.between', function () {
  test('greater than => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(65, is.not.between(23, 42));
    });
  });
  test('in between => exception', function () {
    assert.throws(function () {
      assert.that(35, is.not.between(23, 42));
    });
  });
  test('less than => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(7, is.not.between(23, 42));
    });
  });
});
