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
});

suite('is.ofType - array test', function () {
  test('[] is.ofType("object")', function () {
    assert.doesNotThrow(function () {
      assert.that([], is.ofType('object'));
    });
  });
  test('[] is.ofType("array")', function () {
    assert.doesNotThrow(function () {
      assert.that([], is.ofType('array'));
    });
  });
  test('no array => is.not.ofType("array")', function () {
    assert.doesNotThrow(function () {
      assert.that('foo', is.not.ofType('array'));
    });
  });
  test('no array => exception', function () {
    assert.throws(function () {
      assert.that('foo', is.ofType('array'));
    });
  });
});


