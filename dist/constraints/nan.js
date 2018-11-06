'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var fail = require('../fail');

var isNan = function isNan(actual) {
  return function () {
    if (typeof actual === 'number' && isNaN(actual)) {
      return;
    }

    fail('Expected %s to be NaN.', [actual]);
  };
};

isNan.negated = function (actual) {
  return function () {
    if (!(0, _typeof2.default)(actual) === 'number' || !isNaN(actual)) {
      return;
    }

    fail('Expected %s not to be NaN.', [actual]);
  };
};

module.exports = isNan;