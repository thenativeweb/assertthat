'use strict';

const fail = require('../fail');

const ofType = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (Array.isArray(actual) && (expected === 'array' || expected === 'object')) {
      return;
    }

    /* eslint-disable valid-typeof */
    if (typeof actual === expected) {
      return;
    }
    /* eslint-enable valid-typeof */

    fail('Expected %s to be of type %s.', [ actual, expected ]);
  };
};

ofType.negated = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (Array.isArray(actual) && (expected !== 'array' && expected !== 'object')) {
      return;
    }

    /* eslint-disable valid-typeof */
    if (typeof actual !== expected) {
      return;
    }
    /* eslint-enable valid-typeof */

    fail('Expected %s not to be of type %s.', [ actual, expected ]);
  };
};

module.exports = ofType;
