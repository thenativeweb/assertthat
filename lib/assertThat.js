'use strict';

var fail = require('assert').fail;

var cmp = require('comparejs');

var assert = {};

assert.that = function (actual) {
  var is;

  if (arguments.length === 0) {
    throw new Error('Actual is missing.');
  }

  is = {};
  is.not = {};

  is.equalTo = function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!cmp.eq(actual, expected)) {
      fail(undefined, undefined, 'Expected \'' + actual + '\' to equal \'' + expected + '\'.');
    }
  };

  is.ofType = function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (Array.isArray(actual) && expected !== 'array' && expected !== 'object') {
      fail(undefined, undefined, 'Expected \'' + actual + '\' to be of type \'' + expected + '\'.');
    }

    if (typeof actual !== expected) {
      fail(undefined, undefined, 'Expected \'' + actual + '\' to be of type \'' + expected + '\'.');
    }
  };

  return { is: is };
};

module.exports = assert;
