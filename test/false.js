var assert = require('../lib/assert.js');

module.exports = {
  'false succeeds when comparing with false.': function() {
    var actual = false;

    assert.doesNotThrow(function() {
      assert.that(actual, is.false);
    });
  },
  'false fails when comparing with true.': function() {
    var actual = true;

    assert.throws(function() {
      assert.that(actual, is.false);
    }, assert.AssertionError);
  },
  'not.false succeeds when comparing with true.': function() {
    var actual = true;

    assert.doesNotThrow(function() {
      assert.that(actual, is.not.false);
    });
  },
  'not.false fails when comparing with false.': function() {
    var actual = false;

    assert.throws(function() {
      assert.that(actual, is.not.false);
    }, assert.AssertionError);
  }
};
