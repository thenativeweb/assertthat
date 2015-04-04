'use strict';

var fail = require('../fail');

var startingWith = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (actual.indexOf(expected) === 0) {
      return;
    }

    fail('Expected %s to start with %s.', [ actual, expected ]);
  };
};

startingWith.negated = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (actual.indexOf(expected) !== 0) {
      return;
    }

    fail('Expected %s not to start with %s.', [ actual, expected ]);
  };
};

module.exports = startingWith;
