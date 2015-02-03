'use strict';

var fail = require('../fail');

var instanceOf = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (actual instanceof expected) {
      return;
    }

    fail('Expected %s to be an instance of %s.', [ actual, expected ]);
  };
};

instanceOf.negated = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!(actual instanceof expected)) {
      return;
    }

    fail('Expected %s not to be an instance of %s.', [ actual, expected ]);
  };
};

module.exports = instanceOf;
