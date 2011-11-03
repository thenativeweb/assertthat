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
  }
};
