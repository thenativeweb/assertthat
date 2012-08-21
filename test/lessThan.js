var assert = require('../lib/assert.js');

suite('is.lessThan', function () {
  test('less than => ok', function () {
    assert.doesNotThrow(function() {
      assert.that(23, is.lessThan(42));
    });
  });
  test('not less than => exception', function () {
    assert.throws(function() {
      assert.that(42, is.lessThan(23));
    });
  });
});

suite('is.not.lessThan', function () {
  test('less than => exception', function () {
    assert.throws(function() {
      assert.that(23, is.not.lessThan(42));
    });
  });
  test('not less than => ok', function () {
    assert.doesNotThrow(function() {
      assert.that(42, is.not.lessThan(23));
    });
  });
});