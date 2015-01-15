'use strict';

var fail = require('assert').fail;

var cmp = require('comparejs');

var equalTo = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!cmp.eq(actual, expected)) {
      fail(undefined, undefined, 'Expected \'' + actual + '\' to equal \'' + expected + '\'.');
    }
  };
};

module.exports = equalTo;
