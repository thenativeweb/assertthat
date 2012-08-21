var assert = require('assert'),
    cmp = require('compare.js');

is = {};
is.not = {};

is.false = false;
is.not.false = !is.false;

is.true = true;
is.not.true = !is.true;

exports = module.exports = assert;
exports.that = function(actual, constraint) {
  if(!cmp.eq(actual, constraint)) {
    assert.fail(actual + ' is not ' + constraint);
  };
};