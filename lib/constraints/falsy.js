'use strict';

var cmp = require('comparejs');

var fail = require('../fail');

var falsy = function (actual) {
  return function () {
    if (cmp.eq(actual, false) || cmp.eq(actual, 0) || cmp.eq(actual, '') || cmp.eq(actual, null) || cmp.eq(actual, undefined)) {
      return;
    }

    fail('Expected %s to be falsy.', [ actual ]);
  };
};

falsy.negated = function (actual) {
  return function () {
    if (!cmp.eq(actual, false) && !cmp.eq(actual, 0) && !cmp.eq(actual, '') && !cmp.eq(actual, null) && !cmp.eq(actual, undefined)) {
      return;
    }

    fail('Expected %s not to be falsy.', [ actual ]);
  };
};

module.exports = falsy;
