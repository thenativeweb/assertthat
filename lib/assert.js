'use strict';

var util = require('util');

var assert = require('assert'),
    cmp = require('comparejs');

Object.defineProperty(Object.prototype, 'is', { enumerable: false, writable: true });

Object.prototype.is = {
  atLeast: function (expected) {
    return function (actual) {
      return {
        message: util.format('Expected \'%s\' to be at least \'%s\'.', actual, expected),
        success: cmp.ge(actual, expected)
      };
    };
  },

  atMost: function (expected) {
    return function (actual) {
      return {
        message: util.format('Expected \'%s\' to be at most \'%s\'.', actual, expected),
        success: cmp.le(actual, expected)
      };
    };
  },

  between: function (expectedLow, expectedHigh) {
    return function (actual) {
      return {
        message: util.format('Expected \'%s\' to be between \'%s\' and \'%s\'.', actual, expectedLow, expectedHigh),
        success: cmp.ge(actual, expectedLow) && cmp.le(actual, expectedHigh)
      };
    };
  },

  equalTo: function (expected) {
    return function (actual) {
      return {
        message: util.format('Expected \'%s\' to equal \'%s\'.', actual, expected),
        success: cmp.eq(actual, expected)
      };
    };
  },

  false: function () {
    return function (actual) {
      return {
        message: util.format('Expected \'%s\' to be false.', actual),
        success: cmp.eq(actual, false)
      };
    };
  },

  falsy: function () {
    return function (actual) {
      return {
        message: util.format('Expected \'%s\' to be falsy.', actual),
        success: cmp.eq(actual, false) || cmp.eq(actual, 0) || cmp.eq(actual, '') || cmp.eq(actual, null) || cmp.eq(actual, undefined)
      };
    };
  },

  greaterThan: function (expected) {
    return function (actual) {
      return {
        message: util.format('Expected \'%s\' to be greater than \'%s\'.', actual, expected),
        success: cmp.gt(actual, expected)
      };
    };
  },

  lessThan: function (expected) {
    return function (actual) {
      return {
        message: util.format('Expected \'%s\' to be less than \'%s\'.', actual, expected),
        success: cmp.lt(actual, expected)
      };
    };
  },

  NaN: function () {
    return function (actual) {
      return {
        message: util.format('Expected \'%s\' to be NaN.', actual),
        success: typeof actual === 'number' && isNaN(actual)
      };
    };
  },

  null: function () {
    return function (actual) {
      return {
        message: util.format('Expected \'%s\' to be null.', actual),
        success: cmp.eq(actual, null)
      };
    };
  },

  ofType: function (expected) {
    return function (actual) {
      return {
        message: util.format('Expected \'%s\' to be of type \'%s\'.', actual, expected),
        success: Array.isArray(actual) ? (expected === 'array' || expected === 'object') : (typeof actual === expected)
      };
    };
  },

  sameAs: function (expected) {
    return function (actual) {
      return {
        message: util.format('Expected \'%s\' to be the same as \'%s\'.', actual, expected),
        success: cmp.id(actual, expected)
      };
    };
  },

  throwing: function (expected) {
    return function (actual) {
      try {
        actual();
      }
      catch (err) {
        if (!expected) {
          return {
            message: 'Expected an exception to be thrown, instead \'' +
              err.message + '\' was thrown.',
            success: true
          };
        }
        if (err.message === expected) {
          return {
            message: 'Expected an exception with message \'' + expected + '\' to be thrown, instead \'' + err.message + '\' was thrown.',
            success: true
          };
        }
        return {
          message: 'Expected an exception with message \'' + expected + '\' to be thrown, instead \'' + err.message + '\' was thrown.',
          success: false
        };
      }
      return {
        message: 'Expected an exception to be thrown.',
        success: false
      };
    };
  },

  true: function () {
    return function (actual) {
      return {
        message: util.format('Expected \'%s\' to be true.', actual),
        success: cmp.eq(actual, true)
      };
    };
  },

  undefined: function () {
    return function (actual) {
      return {
        message: util.format('Expected \'%s\' to be undefined.', actual),
        success: cmp.eq(actual, undefined)
      };
    };
  }
};

var negate = function (f) {
  return function () {
    var expected = Array.prototype.slice.call(arguments, 0);
    return function (actual) {
      var test = f.apply(this, expected)(actual);
      test.message = test.message.replace('to', 'not to');
      test.success = !test.success;
      return test;
    };
  };
};

Object.prototype.is.not = {};
for (var i in is) {
  if (is.hasOwnProperty(i)) {
    is.not[i] = negate(is[i]);
  }
}

exports = module.exports = assert;
exports.that = function (actual, from, to, constraint) {
  var test;

  if (!constraint) {
    constraint = from;
    from = undefined;
  }

  if (from === undefined) {
    test = constraint(actual);
    if (!test.success) {
      assert.fail(undefined, undefined, test.message);
    }
    return;
  }

  for (var i = from; i < to; i++) {
    test = constraint(actual[i]);
    if (!test.success) {
      assert.fail(undefined, undefined, test.message);
    }
  }
};