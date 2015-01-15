'use strict';

var equalTo = require('./equalTo'),
    ofType = require('./ofType');

var assert = {};

assert.that = function (actual) {
  var is;

  if (arguments.length === 0) {
    throw new Error('Actual is missing.');
  }

  is = {};
  is.not = {};

  is.equalTo = equalTo(actual);
  is.ofType = ofType(actual);

  return { is: is };
};

module.exports = assert;
