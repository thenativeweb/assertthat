'use strict';

const atLeast = require('./constraints/atLeast'),
      atMost = require('./constraints/atMost'),
      between = require('./constraints/between'),
      containing = require('./constraints/containing'),
      containingAllOf = require('./constraints/containingAllOf'),
      containingAnyOf = require('./constraints/containingAnyOf'),
      endingWith = require('./constraints/endingWith'),
      equalTo = require('./constraints/equalTo'),
      falsy = require('./constraints/falsy'),
      greaterThan = require('./constraints/greaterThan'),
      instanceOf = require('./constraints/instanceOf'),
      isFalse = require('./constraints/false'),
      isNan = require('./constraints/nan'),
      isNull = require('./constraints/null'),
      isTrue = require('./constraints/true'),
      isUndefined = require('./constraints/undefined'),
      lessThan = require('./constraints/lessThan'),
      matching = require('./constraints/matching'),
      ofType = require('./constraints/ofType'),
      sameAs = require('./constraints/sameAs'),
      sameJsonAs = require('./constraints/sameJsonAs'),
      startingWith = require('./constraints/startingWith'),
      throwing = require('./constraints/throwing'),
      throwingAsync = require('./constraints/throwingAsync');

const assert = {};

assert.that = function (actual) {
  if (arguments.length === 0) {
    throw new Error('Actual is missing.');
  }

  const is = {
    not: {}
  };

  is.atLeast = atLeast(actual);
  is.atMost = atMost(actual);
  is.between = between(actual);
  is.containing = containing(actual);
  is.containingAnyOf = containingAnyOf(actual);
  is.containingAllOf = containingAllOf(actual);
  is.endingWith = endingWith(actual);
  is.equalTo = equalTo(actual);
  is.false = isFalse(actual);
  is.falsy = falsy(actual);
  is.greaterThan = greaterThan(actual);
  is.instanceOf = instanceOf(actual);
  is.lessThan = lessThan(actual);
  is.matching = matching(actual);
  is.NaN = isNan(actual);
  is.null = isNull(actual);
  is.ofType = ofType(actual);
  is.sameAs = sameAs(actual);
  is.sameJsonAs = sameJsonAs(actual);
  is.startingWith = startingWith(actual);
  is.throwing = throwing(actual);
  is.throwingAsync = throwingAsync(actual);
  is.true = isTrue(actual);
  is.undefined = isUndefined(actual);

  is.not.atLeast = atLeast.negated(actual);
  is.not.atMost = atMost.negated(actual);
  is.not.between = between.negated(actual);
  is.not.containing = containing.negated(actual);
  is.not.containingAnyOf = containingAnyOf.negated(actual);
  is.not.containingAllOf = containingAllOf.negated(actual);
  is.not.endingWith = endingWith.negated(actual);
  is.not.equalTo = equalTo.negated(actual);
  is.not.false = isFalse.negated(actual);
  is.not.falsy = falsy.negated(actual);
  is.not.greaterThan = greaterThan.negated(actual);
  is.not.instanceOf = instanceOf.negated(actual);
  is.not.lessThan = lessThan.negated(actual);
  is.not.matching = matching.negated(actual);
  is.not.NaN = isNan.negated(actual);
  is.not.null = isNull.negated(actual);
  is.not.ofType = ofType.negated(actual);
  is.not.sameAs = sameAs.negated(actual);
  is.not.sameJsonAs = sameJsonAs.negated(actual);
  is.not.startingWith = startingWith.negated(actual);
  is.not.throwing = throwing.negated(actual);
  is.not.throwingAsync = throwingAsync.negated(actual);
  is.not.true = isTrue.negated(actual);
  is.not.undefined = isUndefined.negated(actual);

  return { is };
};

module.exports = assert;
