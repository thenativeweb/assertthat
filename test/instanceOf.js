'use strict';

var assert = require('../lib/assert.js');

suite('is.instanceOf', function () {
  test('instance => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that(new Error(), is.instanceOf(Error));
    });
    done();
  });

  test('no instance => exception', function (done) {
    assert.throws(function () {
      assert.that({}, is.instanceOf(Error));
    });
    done();
  });
});

suite('is.not.instanceOf', function () {
  test('instance => exception', function (done) {
    assert.throws(function () {
      assert.that(new Error(), is.not.instanceOf(Error));
    });
    done();
  });

  test('no number => ok', function (done) {
    assert.doesNotThrow(function () {
      assert.that({}, is.not.instanceOf(Error));
    });
    done();
  });
});
