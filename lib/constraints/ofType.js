'use strict';

var ofType = function (actual, fail) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (Array.isArray(actual) && (expected === 'array' || expected === 'object')) {
      return;
    }

    if (typeof actual === expected) {
      return;
    }

    fail('Expected %s to be of type %s.', [ actual, expected ]);
  };
};

module.exports = ofType;
