'use strict';

var assert = require('assert'),
    util = require('util');

var humanReadable = require('./humanReadable');

var fail = function (message, values) {
  var newArgs;

  if (!message) {
    throw new Error('Message is missing.');
  }
  if (!values) {
    throw new Error('Values are missing.');
  }

  newArgs = values.map(function (value) {
    return humanReadable(value);
  });

  newArgs.unshift(message);

  assert.fail(undefined, undefined, util.format.apply(this, newArgs));
};

module.exports = fail;
