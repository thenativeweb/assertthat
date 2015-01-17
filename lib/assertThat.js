'use strict';

var atLeast = require('./constraints/atLeast'),
    atMost = require('./constraints/atMost'),
    between = require('./constraints/between'),
    equalTo = require('./constraints/equalTo'),
    greaterThan = require('./constraints/greaterThan'),
    instanceOf = require('./constraints/instanceOf'),
    isFalse = require('./constraints/false'),
    isNull = require('./constraints/null'),
    isTrue = require('./constraints/true'),
    isUndefined = require('./constraints/undefined'),
    lessThan = require('./constraints/lessThan'),
    ofType = require('./constraints/ofType'),
    sameAs = require('./constraints/sameAs');

var assert = {};

assert.that = function (actual) {
  var is;

  if (arguments.length === 0) {
    throw new Error('Actual is missing.');
  }

  is = {};
  is.not = {};

  is.atLeast = atLeast(actual);
  is.atMost = atMost(actual);
  is.between = between(actual);
  is.equalTo = equalTo(actual);
  is.false = isFalse(actual);
  is.greaterThan = greaterThan(actual);
  is.instanceOf = instanceOf(actual);
  is.lessThan = lessThan(actual);
  is.null = isNull(actual);
  is.ofType = ofType(actual);
  is.sameAs = sameAs(actual);
  is.true = isTrue(actual);
  is.undefined = isUndefined(actual);

  return { is: is };
};

module.exports = assert;
