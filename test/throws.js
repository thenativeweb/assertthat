var assert = require('../lib/assert.js');

module.exports = {
  'throws succeeds when an Error is raised.': function() {
    var falsyCode = function() {
      throw new Error();
    };

    assert.doesNotThrow(function() {
      assert.that(falsyCode, throws.an(Error));
    });
  },
  'throws fails when no Error is raised.': function() {
    var truthyCode = function() {
    };

    assert.throws(function() {
      assert.that(truthyCode, throws.an(Error));
    }, assert.AssertionError);
  }
};
