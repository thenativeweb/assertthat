'use strict';

var assert = require('../lib/assert.js');

suite('is.null', function () {
  test('null => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(null, is.null());
    });
    done();
  });

  test('not null => exception', function (done) {
    assert.throws(function () {
      assert.that(undefined, is.null());
    });
    done();
  });
});

suite('is.not.null', function () {
  test('null => exception', function (done) {
    assert.throws(function () {
      assert.that(null, is.not.null());
    });
    done();
  });

  test('not null => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(undefined, is.not.null());
    });
    done();
  });
});
