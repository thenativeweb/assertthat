'use strict';

var fail = require('../fail');

var containsAll = function containsAll(actual, expected) {
  return expected.every(function (element) {
    return actual.indexOf(element) !== -1;
  });
};

var containingAllOf = function containingAllOf(actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (containsAll(actual, expected)) {
      return;
    }

    fail('Expected %s to contain all of %s.', [actual, expected]);
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

    fail('Expected %s not to contain all of %s.', [actual, expected]);
  };
};

module.exports = containingAllOf;