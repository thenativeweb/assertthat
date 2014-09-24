'use strict';

var assert = require('../lib/assert.js');

suite('is.true', function () {
  test('true => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(true, is.true());
    });
    done();
  });

  test('false => exception', function (done) {
    assert.throws(function () {
      assert.that(false, is.true());
    });
    done();
  });
});

suite('is.not.true', function () {
  test('true => exception', function (done) {
    assert.throws(function () {
      assert.that(true, is.not.true());
    });
    done();
  });

  test('false => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(false, is.not.true());
    });
    done();
  });
});
