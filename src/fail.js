'use strict';

const assert = require('assert'),
      { format } = require('util');

const humanReadable = require('./humanReadable');

const fail = function (message, values) {
  if (!message) {
    throw new Error('Message is missing.');
  }
  if (!values) {
    throw new Error('Values are missing.');
  }

  const humanReadableValues = values.map(value => humanReadable(value));

  // Starting with Node.js 10, the following should actually look like this:
  //
  // assert.fail(format(message, ...humanReadableValues));
  //
  // To still support Node.js < 10, we fall back to use strictEqual here, and
  // provide 0 as actual value, 1 as expected value, to ensure that this
  // assertion always fails. Once we drop support for Node.js < 10, we can
  // replace this line with the above one.
  assert.strictEqual(0, 1, format(message, ...humanReadableValues));
};

module.exports = fail;
