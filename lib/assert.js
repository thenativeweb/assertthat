var assert = require('assert'),
    should = require('should');

exports = module.exports = assert;

is = {
  equalTo: function(expected) {
    return function(actual) {
      actual.should.eql(expected);
    };
  },
  false: false,
  sameAs: function(expected) {
    return function(actual) {
      actual.should.equal(expected);
    };
  },
  true: true
};

exports.that = function(actual, constraint) {
  if(typeof constraint === 'boolean') {
    actual.should.equal(constraint);
  } else if(typeof constraint === 'function') {
    constraint(actual);
  }
};
