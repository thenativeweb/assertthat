'use strict';

var cmp = require('comparejs');

var fail = require('../fail');

var equalTo = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (cmp.eq(actual, expected)) {
      return;
    }

    fail('Expected %s to equal %s.', [ actual, expected ]);
  };
};

equalTo.negated = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!cmp.eq(actual, expected)) {
      return;
    }

    fail('Expected %s not to equal %s.', [ actual, expected ]);
  };
};

module.exports = equalTo;
