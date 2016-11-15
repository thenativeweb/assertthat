'use strict';

const assert = require('assert'),
      util = require('util');

const Reflect = require('harmony-reflect');

const humanReadable = require('./humanReadable');

const fail = function (message, values) {
  if (!message) {
    throw new Error('Message is missing.');
  }
  if (!values) {
    throw new Error('Values are missing.');
  }

  const newArgs = values.map(value => humanReadable(value));

  newArgs.unshift(message);

  assert.fail(undefined, undefined, Reflect.apply(util.format, this, newArgs));
};

module.exports = fail;
