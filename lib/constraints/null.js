'use strict';

var cmp = require('comparejs');

var fail = require('../fail');

var isNull = function (actual) {
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
