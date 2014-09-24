'use strict';

var assert = require('../lib/assert.js');

suite('is.equalTo(0)', function () {
  test('equal => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(0, is.equalTo(0));
    });
    done();
  });

  test('not equal => exception', function (done) {
    assert.throws(function () {
      assert.that(23, is.equalTo(0));
    });
    done();
  });
});

suite('is.not.equalTo(0)', function () {
  test('equal => exception', function (done) {
    assert.throws(function () {
      assert.that(0, is.not.equalTo(0));
    });
    done();
  });

  test('not equal => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(0, is.not.equalTo(23));
    });
    done();
  });
});
