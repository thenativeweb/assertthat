'use strict';

const cmp = require('comparejs');

const fail = require('../fail');

const greaterThan = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (cmp.gt(actual, expected)) {
      return;
    }

    fail('Expected %s to be greater than %s.', [ actual, expected ]);
  };
};

greaterThan.negated = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!cmp.gt(actual, expected)) {
      return;
    }

    fail('Expected %s not to be greater than %s.', [ actual, expected ]);
  };
};

module.exports = greaterThan;
