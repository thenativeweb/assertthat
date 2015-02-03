'use strict';

var cmp = require('comparejs');

var fail = require('../fail');

var between = function (actual) {
  return function (expectedLower, expectedUpper) {
    if (arguments.length === 0) {
      throw new Error('Expected lower bound is missing.');
    }
    if (arguments.length === 1) {
      throw new Error('Expected upper bound is missing.');
    }

    if (cmp.ge(actual, expectedLower) && cmp.le(actual, expectedUpper)) {
      return;
    }

    fail('Expected %s to be between %s and %s.', [ actual, expectedLower, expectedUpper ]);
  };
};

between.negated = function (actual) {
  return function (expectedLower, expectedUpper) {
    if (arguments.length === 0) {
      throw new Error('Expected lower bound is missing.');
    }
    if (arguments.length === 1) {
      throw new Error('Expected upper bound is missing.');
    }

    if (!cmp.ge(actual, expectedLower) || !cmp.le(actual, expectedUpper)) {
      return;
    }

    fail('Expected %s not to be between %s and %s.', [ actual, expectedLower, expectedUpper ]);
  };
};

module.exports = between;
