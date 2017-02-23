'use strict';

var assert = require('assert'),
    util = require('util');

// Polyfill for the Reflect API to make assertthat work with Node.js < 6.0.0 as well.
// If we decide to drop support for these Node.js version, the following line may be
// removed.
var Reflect = require('harmony-reflect');

var humanReadable = require('./humanReadable');

var fail = function fail(message, values) {
  if (!message) {
    throw new Error('Message is missing.');
  }
  if (!values) {
    throw new Error('Values are missing.');
  }

  var newArgs = values.map(function (value) {
    return humanReadable(value);
  });

  newArgs.unshift(message);

  assert.fail(undefined, undefined, Reflect.apply(util.format, this, newArgs));
};

module.exports = fail;