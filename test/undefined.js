'use strict';

var assert = require('../lib/assert.js');

suite('is.undefined', function () {
  test('undefined => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(undefined, is.undefined());
    });
    done();
  });

  test('not undefined => exception', function (done) {
    assert.throws(function () {
      assert.that(null, is.undefined());
    });
    done();
  });
});

suite('is.not.undefined', function () {
  test('undefined => exception', function (done) {
    assert.throws(function () {
      assert.that(undefined, is.not.undefined());
    });
    done();
  });

  test('not undefined => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(null, is.not.undefined());
    });
    done();
  });
});
