'use strict';

var fail = require('../fail');

var endingWith = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (
      actual.length >= expected.length &&
      actual.lastIndexOf(expected) === actual.length - expected.length
    ) {
      return;
    }

    fail('Expected %s to end with %s.', [ actual, expected ]);
  };
};

endingWith.negated = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (
      actual.length < expected.length ||
      actual.lastIndexOf(expected) !== actual.length - expected.length
    ) {
      return;
    }

    fail('Expected %s not to end with %s.', [ actual, expected ]);
  };
};

module.exports = endingWith;
