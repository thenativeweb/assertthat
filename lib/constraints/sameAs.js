'use strict';

var cmp = require('comparejs');

var fail = require('../fail');

var sameAs = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (cmp.id(actual, expected)) {
      return;
    }

    fail('Expected %s to be same as %s.', [ actual, expected ]);
  };
};

sameAs.negated = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!cmp.id(actual, expected)) {
      return;
    }

    fail('Expected %s not to be same as %s.', [ actual, expected ]);
  };
};

module.exports = sameAs;
