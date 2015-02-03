'use strict';

var cmp = require('comparejs');

var fail = require('../fail');

var lessThan = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (cmp.lt(actual, expected)) {
      return;
    }

    fail('Expected %s to be less than %s.', [ actual, expected ]);
  };
};

lessThan.negated = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!cmp.lt(actual, expected)) {
      return;
    }

    fail('Expected %s not to be less than %s.', [ actual, expected ]);
  };
};

module.exports = lessThan;
