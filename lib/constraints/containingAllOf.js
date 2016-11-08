'use strict';

const fail = require('../fail');

const containsAll = function (actual, expected) {
  return expected.every(element => actual.indexOf(element) !== -1);
};

const containingAllOf = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (containsAll(actual, expected)) {
      return;
    }

    fail('Expected %s to contain all of %s.', [ actual, expected ]);
  };
};

containingAllOf.negated = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!containsAll(actual, expected)) {
      return;
    }

    fail('Expected %s not to contain all of %s.', [ actual, expected ]);
  };
};

module.exports = containingAllOf;
