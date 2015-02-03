'use strict';

var fail = require('../fail');

var ofType = function (actual) {
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

ofType.negated = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (Array.isArray(actual) && (expected !== 'array' && expected !== 'object')) {
      return;
    }

    if (typeof actual !== expected) {
      return;
    }

    fail('Expected %s not to be of type %s.', [ actual, expected ]);
  };
};

module.exports = ofType;
