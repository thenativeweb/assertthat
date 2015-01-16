'use strict';

var cmp = require('comparejs');

var equalTo = function (actual, fail) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (cmp.eq(actual, expected)) {
      return;
    }

    fail('Expected %s to equal %s.', [ actual, expected ]);
  };
};

module.exports = equalTo;
