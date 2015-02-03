'use strict';

var fail = require('../fail');

var isNan = function (actual) {
  return function () {
    if (typeof actual === 'number' && isNaN(actual)) {
      return;
    }

    fail('Expected %s to be NaN.', [ actual ]);
  };
};

isNan.negated = function (actual) {
  return function () {
    if (!typeof actual === 'number' || !isNaN(actual)) {
      return;
    }

    fail('Expected %s not to be NaN.', [ actual ]);
  };
};

module.exports = isNan;
