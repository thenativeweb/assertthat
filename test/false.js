var assert = require('../lib/assert.js');

suite('false', function () {
  var actual = false;

  test('is.false', function () {
    assert.doesNotThrow(function() {
      assert.that(actual, is.false);
    });
  });
  test('is.not.false', function () {
    assert.throws(function() {
      assert.that(actual, is.not.false);
    });
  });
});

suite('true', function () {
  var actual = true;

  test('is.false', function () {
    assert.throws(function() {
      assert.that(actual, is.false);
    });
  });
  test('is.not.false', function () {
    assert.doesNotThrow(function() {
      assert.that(actual, is.not.false);
    });
  });
});