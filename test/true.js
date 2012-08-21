var assert = require('../lib/assert.js');

suite('true', function () {
  var actual = true;

  test('is.true', function () {
    assert.doesNotThrow(function() {
      assert.that(actual, is.true);
    });
  });
  test('is.not.true', function () {
    assert.throws(function() {
      assert.that(actual, is.not.true);
    });
  });
});

suite('false', function () {
  var actual = false;

  test('is.true', function () {
    assert.throws(function() {
      assert.that(actual, is.true);
    });
  });
  test('is.not.true', function () {
    assert.doesNotThrow(function() {
      assert.that(actual, is.not.true);
    });
  });
});