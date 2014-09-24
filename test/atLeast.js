'use strict';

var assert = require('../lib/assert.js');

suite('is.atLeast', function () {
  test('greater than => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(42, is.atLeast(23));
    });
    done();
  });

  test('equal => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(23, is.atLeast(23));
    });
    done();
  });

  test('less than => exception', function (done) {
    assert.throws(function () {
      assert.that(23, is.atLeast(42));
    });
    done();
  });
});

suite('is.not.atLeast', function () {
  test('greater than => exception', function (done) {
    assert.throws(function () {
      assert.that(42, is.not.atLeast(23));
    });
    done();
  });

  test('equal => exception', function (done) {
    assert.throws(function () {
      assert.that(23, is.not.atLeast(23));
    });
    done();
  });

  test('less than => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(23, is.not.atLeast(42));
    });
    done();
  });
});
