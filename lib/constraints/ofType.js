'use strict';

var fail = require('assert').fail;

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

    fail(undefined, undefined, 'Expected \'' + actual + '\' to be of type \'' + expected + '\'.');
  };
};

module.exports = ofType;
