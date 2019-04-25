'use strict';

const cmp = require('comparejs');

const fail = require('../fail');

const falsy = function (actual) {
  return function () {
    if (cmp.equal(actual, false) || cmp.equal(actual, 0) || cmp.equal(actual, '') || cmp.equal(actual, null) || cmp.equal(actual, undefined)) {
      return;
    }

    fail('Expected %s to be falsy.', [ actual ]);
  };
};

falsy.negated = function (actual) {
  return function () {
    if (!cmp.equal(actual, false) && !cmp.equal(actual, 0) && !cmp.equal(actual, '') && !cmp.equal(actual, null) && !cmp.equal(actual, undefined)) {
      return;
    }

    fail('Expected %s not to be falsy.', [ actual ]);
  };
};

module.exports = falsy;
