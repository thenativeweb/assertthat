'use strict';

var assert = require('../lib/assert.js');

suite('is.greaterThan', function () {
  test('greater than => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(42, is.greaterThan(23));
    });
    done();
  });

  test('equal => exception', function (done) {
    assert.throws(function () {
      assert.that(23, is.greaterThan(23));
    });
    done();
  });

  test('less than => exception', function (done) {
    assert.throws(function () {
      assert.that(23, is.greaterThan(42));
    });
    done();
  });
});

suite('is.not.greaterThan', function () {
  test('greater than => exception', function (done) {
    assert.throws(function () {
      assert.that(42, is.not.greaterThan(23));
    });
    done();
  });

  test('equal => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(23, is.not.greaterThan(23));
    });
    done();
  });

  test('less than => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(23, is.not.greaterThan(42));
    });
    done();
  });
});
