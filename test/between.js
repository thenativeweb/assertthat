'use strict';

var assert = require('../lib/assert.js');

suite('is.between', function () {
  test('greater than => exception', function (done) {
    assert.throws(function () {
      assert.that(65, is.between(23, 42));
    });
    done();
  });

  test('in between => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(35, is.between(23, 42));
    });
    done();
  });

  test('less than => exception', function (done) {
    assert.throws(function () {
      assert.that(7, is.between(23, 42));
    });
    done();
  });
});

suite('is.not.between', function () {
  test('greater than => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(65, is.not.between(23, 42));
    });
    done();
  });

  test('in between => exception', function (done) {
    assert.throws(function () {
      assert.that(35, is.not.between(23, 42));
    });
    done();
  });

  test('less than => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(7, is.not.between(23, 42));
    });
    done();
  });
});
