'use strict';

const cmp = require('comparejs');

const fail = require('../fail');

const isFalse = function (actual) {
  return function () {
    if (cmp.eq(actual, false)) {
      return;
    }

    fail('Expected %s to be false.', [ actual ]);
  };
};

isFalse.negated = function (actual) {
  return function () {
    if (!cmp.eq(actual, false)) {
      return;
    }

    fail('Expected %s not to be false.', [ actual ]);
  };
};

module.exports = isFalse;
