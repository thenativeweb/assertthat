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

  assert.fail(format(message, ...humanReadableValues));
};

module.exports = fail;
