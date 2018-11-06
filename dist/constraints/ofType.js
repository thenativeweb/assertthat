'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var fail = require('../fail');

var ofType = function ofType(actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (Array.isArray(actual) && (expected === 'array' || expected === 'object')) {
      return;
    }

    if ((0, _typeof2.default)(actual) === expected) {
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

    if ((0, _typeof2.default)(actual) !== expected) {
      return;
    }

    fail('Expected %s not to be of type %s.', [actual, expected]);
  };
};

module.exports = ofType;