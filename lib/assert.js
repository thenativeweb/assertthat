var assert = require('assert'),
    cmp = require('compare.js');

is = {
  equalTo: function (expected) {
    return function (actual) {
      return cmp.eq(actual, expected);
    };
  },

  false: function () {
    return function (actual) {
      return cmp.eq(actual, false);
    };
  },

  greaterThan: function (expected) {
    return function (actual) {
      return cmp.gt(actual, expected);
    };
  },

  lessThan: function (expected) {
    return function (actual) {
      return cmp.lt(actual, expected);
    };
  },

  null: function () {
    return function (actual) {
      return cmp.eq(actual, null);
    };
  },

  sameAs: function (expected) {
    return function (actual) {
      return cmp.id(actual, expected);
    };
  },

  true: function () {
    return function (actual) {
      return cmp.eq(actual, true);
    };
  }
};

var negate = function (f, expected) {
  return function (expected) {
    return function (actual) {
      return !f(expected)(actual);
    };
  };
};

is.not = {};
for(var i in is) {
  if(is.hasOwnProperty(i)) {
    is.not[i] = negate(is[i]);
  }
}

exports = module.exports = assert;
exports.that = function(actual, constraint) {
  if(!constraint(actual)) {
    assert.fail(actual + ' is not ' + constraint);
  }
};