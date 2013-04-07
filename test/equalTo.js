'use strict';

var assert = require('../lib/assert.js');

suite('is.equalTo', function () {
  test('equal => ok', function () {
    assert.doesNotThrow(function () {
      assert.that('foo', is.equalTo('foo'));
    });
  });
  test('not equal => exception', function () {
    assert.throws(function () {
      assert.that('foo', is.equalTo('bar'));
    });
  });
});

suite('is.not.equalTo', function () {
  test('equal => exception', function () {
    assert.throws(function () {
      assert.that('foo', is.not.equalTo('foo'));
    });
  });
  test('not equal => ok', function () {
    assert.doesNotThrow(function () {
      assert.that('foo', is.not.equalTo('bar'));
    });
  });
});