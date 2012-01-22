var assert = require('../lib/assert.js');

module.exports = {
  'doesNotThrow succeeds when no Error is raised.': function() {
    var truthyCode = function() {
    };

    assert.doesNotThrow(function() {
      assert.that(truthyCode, doesNotThrow.an(Error));
    });
  },
  'doesNotThrow fails when an Error is raised.': function() {
    var falsyCode = function() {
      throw new Error();
    };

    assert.throws(function() {
      assert.that(falsyCode, doesNotThrow.an(Error));
    }, assert.AssertionError);
  }
};
