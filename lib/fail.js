'use strict';

const assert = require('assert'),
    util = require('util');

const humanReadable = require('./humanReadable');

const fail = function (message, values) {
  if (!message) {
    throw new Error('Message is missing.');
  }
  if (!values) {
    throw new Error('Values are missing.');
  }

  const newArgs = values.map(value => {
    return humanReadable(value);
  });

  newArgs.unshift(message);

  assert.fail(undefined, undefined, util.format.apply(this, newArgs));
};

module.exports = fail;
