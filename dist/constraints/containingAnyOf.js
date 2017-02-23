'use strict';

var fail = require('../fail');

var containsAny = function containsAny(actual, expected) {
  return expected.some(function (element) {
    return actual.indexOf(element) !== -1;
  });
};

var containingAnyOf = function containingAnyOf(actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (containsAny(actual, expected)) {
      return;
    }

    fail('Expected %s to contain any of %s.', [actual, expected]);
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

    fail('Expected %s not to contain any of %s.', [actual, expected]);
  };
};

module.exports = containingAnyOf;