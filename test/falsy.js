'use strict';

var assert = require('../lib/assert.js');

suite('is.falsy', function () {
  test('falsy => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(null, is.falsy());
    });
    done();
  });

  test('not-falsy => exception', function (done) {
    assert.throws(function () {
      assert.that(23, is.falsy());
    });
    done();
  });
});

suite('is.not.falsy', function () {
  test('falsy => exception', function (done) {
    assert.throws(function () {
      assert.that(null, is.not.falsy());
    });
    done();
  });

  test('not-falsy => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(23, is.not.falsy());
    });
    done();
  });
});
