'use strict';

var fail = require('../fail');

var containing = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (actual.indexOf(expected) !== -1) {
      return;
    }

    fail('Expected %s to contain %s.', [ actual, expected ]);
  };
};

containing.negated = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (actual.indexOf(expected) === -1) {
      return;
    }

    fail('Expected %s not to contain %s.', [ actual, expected ]);
  };
};

module.exports = containing;
