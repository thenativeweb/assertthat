'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var stringifyObject = require('stringify-object');

var humanReadable = function humanReadable(value) {
  if (arguments.length === 0) {
    throw new Error('Value is missing.');
  }

  if (typeof value === 'number') {
    return "".concat(value);
  }

  if (typeof value === 'boolean') {
    return "".concat(value);
  }

  if (typeof value === 'string') {
    return "'".concat(value, "'");
  }

  if ((0, _typeof2.default)(value) === 'object') {
    if (value === null) {
      return 'null';
    }

    if (value instanceof Error) {
      return "'Error'";
    }

    if (value instanceof RegExp) {
      return value.toString();
    }

    return stringifyObject(value, {
      indent: '  ',
      singleQuotes: true
    });
  }

  if (typeof value === 'function') {
    return value.name ? value.name : '(anonymous)';
  }

  if (typeof value === 'undefined') {
    return 'undefined';
  }

  throw new Error("Unsupported type '".concat((0, _typeof2.default)(value), "'."));
};

module.exports = humanReadable;