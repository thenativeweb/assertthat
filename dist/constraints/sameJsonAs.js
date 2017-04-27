'use strict';

var cmp = require('comparejs');

var fail = require('../fail');

var sameJsonAs = function sameJsonAs(actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (cmp.eq(JSON.stringify(actual), JSON.stringify(expected))) {
      return;
    }

    fail('Expected %s to equal %s.', [actual, expected]);
  };
};

sameJsonAs.negated = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!cmp.eq(JSON.stringify(actual), JSON.stringify(expected))) {
      return;
    }

    fail('Expected %s not to equal %s.', [actual, expected]);
  };
};

module.exports = sameJsonAs;