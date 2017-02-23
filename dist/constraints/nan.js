'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
    if (!(typeof actual === 'undefined' ? 'undefined' : _typeof(actual)) === 'number' || !isNaN(actual)) {
      return;
    }

    fail('Expected %s not to be NaN.', [actual]);
  };
};

module.exports = isNan;