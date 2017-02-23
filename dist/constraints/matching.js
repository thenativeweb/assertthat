'use strict';

var fail = require('../fail');

var matching = function matching(actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (expected.test(actual)) {
      return;
    }

    fail('Expected %s to match %s.', [actual, expected]);
  };
};

matching.negated = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!expected.test(actual)) {
      return;
    }

    fail('Expected %s not to match %s.', [actual, expected]);
  };
};

module.exports = matching;