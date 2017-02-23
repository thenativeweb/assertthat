'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var fail = require('../fail');

var ofType = function ofType(actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (Array.isArray(actual) && (expected === 'array' || expected === 'object')) {
      return;
    }

    if ((typeof actual === 'undefined' ? 'undefined' : _typeof(actual)) === expected) {
      return;
    }

    fail('Expected %s to be of type %s.', [actual, expected]);
  };
};

ofType.negated = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (Array.isArray(actual) && expected !== 'array' && expected !== 'object') {
      return;
    }

    if ((typeof actual === 'undefined' ? 'undefined' : _typeof(actual)) !== expected) {
      return;
    }

    fail('Expected %s not to be of type %s.', [actual, expected]);
  };
};

module.exports = ofType;