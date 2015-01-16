'use strict';

var equalTo = require('./constraints/equalTo'),
    ofType = require('./constraints/ofType');

var fail = require('./fail');

var assert = {};

assert.that = function (actual) {
  var is;

  if (arguments.length === 0) {
    throw new Error('Actual is missing.');
  }

  is = {};
  is.not = {};

  is.equalTo = equalTo(actual, fail);
  is.ofType = ofType(actual, fail);

  return { is: is };
};

module.exports = assert;
