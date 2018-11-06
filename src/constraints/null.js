'use strict';

const cmp = require('comparejs');

const fail = require('../fail');

const isNull = function (actual) {
  return function () {
    if (cmp.eq(actual, null)) {
      return;
    }

    fail('Expected %s to be null.', [ actual ]);
  };
};

isNull.negated = function (actual) {
  return function () {
    if (!cmp.eq(actual, null)) {
      return;
    }

    fail('Expected %s not to be null.', [ actual ]);
  };
};

module.exports = isNull;
