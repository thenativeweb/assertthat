var assert = require('../lib/assert.js');

var falsyCode = function () {
  throw new Error();
};

var truthyCode = function () {
};

suite('is.throwing', function () {
  test('falsy code => ok', function () {
    assert.doesNotThrow(function() {
      assert.that(falsyCode, is.throwing());
    });
  });
  test('truthy code => exception', function () {
    assert.throws(function() {
      assert.that(truthyCode, is.throwing());
    });
  });
});

suite('is.not.throwing', function () {
  test('falsy code => exception', function () {
    assert.throws(function() {
      assert.that(falsyCode, is.not.throwing());
    });
  });
  test('truthy code => ok', function () {
    assert.doesNotThrow(function() {
      assert.that(truthyCode, is.not.throwing());
    });
  });
});