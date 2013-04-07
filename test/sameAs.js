'use strict';

var assert = require('../lib/assert.js');

var o1 = {},
    o2 = {};

suite('is.sameAs', function () {
  test('identical => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(o1, is.sameAs(o1));
    });
  });
  test('not identical => exception', function () {
    assert.throws(function () {
      assert.that(o1, is.sameAs(o2));
    });
  });
});

suite('is.not.sameAs', function () {
  test('identical => exception', function () {
    assert.throws(function () {
      assert.that(o1, is.not.sameAs(o1));
    });
  });
  test('not identical => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(o1, is.not.sameAs(o2));
    });
  });
});