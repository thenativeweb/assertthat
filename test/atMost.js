'use strict';

var assert = require('../lib/assert.js');

suite('is.atMost', function () {
  test('greater than => exception', function (done) {
    assert.throws(function () {
      assert.that(42, is.atMost(23));
    });
    done();
  });

  test('equal => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(23, is.atMost(23));
    });
    done();
  });

  test('less than => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(23, is.atMost(42));
    });
    done();
  });
});

suite('is.not.atMost', function () {
  test('greater than => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(42, is.not.atMost(23));
    });
    done();
  });

  test('equal => exception', function (done) {
    assert.throws(function () {
      assert.that(23, is.not.atMost(23));
    });
    done();
  });

  test('less than => ok', function (done) {
    assert.throws(function () {
      assert.that(23, is.not.atMost(42));
    });
    done();
  });
});
