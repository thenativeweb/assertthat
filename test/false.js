'use strict';

var assert = require('../lib/assert.js');

suite('is.false', function () {
  test('true => exception', function (done) {
    assert.throws(function () {
      assert.that(true, is.false());
    });
    done();
  });

  test('false => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(false, is.false());
    });
    done();
  });
});

suite('is.not.false', function () {
  test('true => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(true, is.not.false());
    });
    done();
  });

  test('false => exception', function (done) {
    assert.throws(function () {
      assert.that(false, is.not.false());
    });
    done();
  });
});
