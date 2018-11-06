'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var assert = require('assert'),
    _require = require('util'),
    format = _require.format;

var humanReadable = require('./humanReadable');

var fail = function fail(message, values) {
  if (!message) {
    throw new Error('Message is missing.');
  }

  if (!values) {
    throw new Error('Values are missing.');
  }

  var humanReadableValues = values.map(function (value) {
    return humanReadable(value);
  }); // Starting with Node.js 10, the following should actually look like this:
  //
  // assert.fail(format(message, ...humanReadableValues));
  //
  // To still support Node.js < 10, we fall back to use strictEqual here, and
  // provide 0 as actual value, 1 as expected value, to ensure that this
  // assertion always fails. Once we drop support for Node.js < 10, we can
  // replace this line with the above one.

  assert.strictEqual(0, 1, format.apply(void 0, [message].concat((0, _toConsumableArray2.default)(humanReadableValues))));
};

module.exports = fail;