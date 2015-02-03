'use strict';

var cmp = require('comparejs');

var fail = require('../fail');

var isTrue = function (actual) {
  return function () {
    if (cmp.eq(actual, true)) {
      return;
    }

    fail('Expected %s to be true.', [ actual ]);
  };
};

isTrue.negated = function (actual) {
  return function () {
    if (!cmp.eq(actual, true)) {
      return;
    }

    fail('Expected %s not to be true.', [ actual ]);
  };
};

module.exports = isTrue;
