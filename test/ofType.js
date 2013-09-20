'use strict';

var assert = require('../lib/assert.js');

suite('is.ofType', function () {
  test('number => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(23, is.ofType('number'));
    });
  });
  test('no number => exception', function () {
    assert.throws(function () {
      assert.that('foo', is.ofType('number'));
    });
  });
  test('array => ok', function () {
    assert.doesNotThrow(function () {
      assert.that([], is.ofType('array'));
    });
  });
  test('no array => exception', function () {
    assert.throws(function () {
      assert.that('foo', is.ofType('array'));
    });
  });
});

suite('is.not.ofType', function () {
  test('number => exception', function () {
    assert.throws(function () {
      assert.that(23, is.not.ofType('number'));
    });
  });
  test('no number => ok', function () {
    assert.doesNotThrow(function () {
      assert.that('foo', is.not.ofType('number'));
    });
  });
  test('array => exception', function () {
    assert.throws(function () {
      assert.that([], is.not.ofType('array'));
    });
  });
  test('no array => ok', function () {
    assert.throws(function () {
      assert.that('foo', is.ofType('array'));
    });
  });
});