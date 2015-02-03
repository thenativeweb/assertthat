'use strict';

var cmp = require('comparejs');

var fail = require('../fail');

var isUndefined = function (actual) {
  return function () {
    if (cmp.eq(actual, undefined)) {
      return;
    }

    fail('Expected %s to be undefined.', [ actual ]);
  };
};

isUndefined.negated = function (actual) {
  return function () {
    if (!cmp.eq(actual, undefined)) {
      return;
    }

    fail('Expected %s not to be undefined.', [ actual ]);
  };
};

module.exports = isUndefined;
