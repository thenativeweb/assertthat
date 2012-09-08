var assert = require('assert'),
    cmp = require('compare.js');

is = {
  atLeast: function (expected) {
    return function (actual) {
      return cmp.ge(actual, expected);
    };
  },

  atMost: function (expected) {
    return function (actual) {
      return cmp.le(actual, expected);
    };
  },

  between: function (expectedLow, expectedHigh) {
    return function (actual) {
      return cmp.ge(actual, expectedLow) && cmp.le(actual, expectedHigh);
    };
  },

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

  NaN: function () {
    return function (actual) {
      return typeof actual === 'number' && isNaN(actual);
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

  throwing: function () {
    return function (actual) {
      try {
        actual();
      }
      catch (err) {
        return true;
      }
      return false;
    };
  },

  true: function () {
    return function (actual) {
      return cmp.eq(actual, true);
    };
  },

  undefined: function () {
    return function (actual) {
      return cmp.eq(actual, undefined);
    };
  }
};

var negate = function (f) {
  return function () {
    var expected = Array.prototype.slice.call(arguments, 0);
    return function (actual) {
      return !f.apply(this, expected)(actual);
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