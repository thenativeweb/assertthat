var assert = require('assert'),
    cmp = require('compare.js');

var negate = function (f, expected) {
  return function (expected) {
    return function (actual) {
      return !f(expected)(actual);
    };
  };
};

is = {};
is.not = {};

is.equalTo = function (expected) {
  return function (actual) {
    return cmp.eq(actual, expected);
  };
};
is.not.equalTo = negate(is.equalTo);

is.false = false;
is.not.false = !is.false;

is.true = true;
is.not.true = !is.true;

exports = module.exports = assert;
exports.that = function(actual, constraint) {
  if(typeof constraint === 'boolean') {
    if(!cmp.eq(actual, constraint)) {
      assert.fail(actual + ' is not ' + constraint);
    }
  } else if(typeof constraint === 'function') {
    if(!constraint(actual)) {
      assert.fail(actual + ' is not ' + constraint);
    }
  }
};