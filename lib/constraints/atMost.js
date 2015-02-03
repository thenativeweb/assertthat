'use strict';

var cmp = require('comparejs');

var fail = require('../fail');

var atMost = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (cmp.le(actual, expected)) {
      return;
    }

    fail('Expected %s to be at most %s.', [ actual, expected ]);
  };
};

atMost.negated = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!cmp.le(actual, expected)) {
      return;
    }

    fail('Expected %s to be at most %s.', [ actual, expected ]);
  };
};

module.exports = atMost;
