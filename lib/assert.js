var assert = require('assert'),
    should = require('should');

exports = module.exports = assert;

is = {
  equalTo: function(expected) {
    return function(actual) {
      actual.should.eql(expected);
    };
  },
  sameAs: function(expected) {
    return function(actual) {
      actual.should.equal(expected);
    };
  }
};

exports.that = function(actual, constraint) {
  constraint(actual);
};
