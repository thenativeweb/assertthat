'use strict';

const fail = require('../fail');

const containsAny = function (actual, expected) {
  return expected.some(element => actual.indexOf(element) !== -1);
};

const containingAnyOf = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (containsAny(actual, expected)) {
      return;
    }

    fail('Expected %s to contain any of %s.', [ actual, expected ]);
  };
};

containingAnyOf.negated = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!containsAny(actual, expected)) {
      return;
    }

    fail('Expected %s not to contain any of %s.', [ actual, expected ]);
  };
};

module.exports = containingAnyOf;
