'use strict';

const cmp = require('comparejs');

const fail = require('../fail');

const sameAs = function (actual) {
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
