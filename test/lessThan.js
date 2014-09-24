'use strict';

var assert = require('../lib/assert.js');

suite('is.lessThan', function () {
  test('less than => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(23, is.lessThan(42));
    });
    done();
  });

  test('equal => exception', function (done) {
    assert.throws(function () {
      assert.that(23, is.lessThan(23));
    });
    done();
  });

  test('greater than => exception', function (done) {
    assert.throws(function () {
      assert.that(42, is.lessThan(23));
    });
    done();
  });
});

suite('is.not.lessThan', function () {
  test('less than => exception', function (done) {
    assert.throws(function () {
      assert.that(23, is.not.lessThan(42));
    });
    done();
  });

  test('equal => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(23, is.not.lessThan(23));
    });
    done();
  });

  test('greater than => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(42, is.not.lessThan(23));
    });
    done();
  });
});
