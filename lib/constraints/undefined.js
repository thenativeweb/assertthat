'use strict';

const cmp = require('comparejs');

const fail = require('../fail');

const isUndefined = function (actual) {
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
