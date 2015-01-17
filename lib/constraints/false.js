'use strict';

var cmp = require('comparejs');

var fail = require('../fail');

var isFalse = function (actual) {
  return function () {
    if (cmp.eq(actual, false)) {
      return;
    }

    fail('Expected %s to be false.', [ actual ]);
  };
};

module.exports = isFalse;
