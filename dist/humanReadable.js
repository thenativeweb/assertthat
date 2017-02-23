'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var stringifyObject = require('stringify-object');

var humanReadable = function humanReadable(value) {
  if (arguments.length === 0) {
    throw new Error('Value is missing.');
  }

  if (typeof value === 'number') {
    return '' + value;
  }

  if (typeof value === 'boolean') {
    return '' + value;
  }

  if (typeof value === 'string') {
    return '\'' + value + '\'';
  }

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    if (value === null) {
      return 'null';
    }

    if (value instanceof Error) {
      return '\'Error\'';
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

  throw new Error('Unsupported type \'' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '\'.');
};

module.exports = humanReadable;