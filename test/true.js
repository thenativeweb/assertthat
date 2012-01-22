var assert = require('../lib/assert.js');

module.exports = {
  'true succeeds when comparing with true.': function() {
    var actual = true;

    assert.doesNotThrow(function() {
      assert.that(actual, is.true);
    });
  },
  'true fails when comparing with false.': function() {
    var actual = false;

    assert.throws(function() {
      assert.that(actual, is.true);
    }, assert.AssertionError);
  },
  'not.true succeeds when comparing with false.': function() {
    var actual = false;

    assert.doesNotThrow(function() {
      assert.that(actual, is.not.true);
    });
  },
  'not.true fails when comparing with true.': function() {
    var actual = true;

    assert.throws(function() {
      assert.that(actual, is.not.true);
    }, assert.AssertionError);
  }
};
