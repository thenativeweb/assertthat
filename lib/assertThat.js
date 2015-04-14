'use strict';

var atLeast = require('./constraints/atLeast'),
    atMost = require('./constraints/atMost'),
    between = require('./constraints/between'),
    containing = require('./constraints/containing'),
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
    ofType = require('./constraints/ofType'),
    sameAs = require('./constraints/sameAs'),
    startingWith = require('./constraints/startingWith'),
    throwing = require('./constraints/throwing');

var Not = function() {}
Not.prototype.atLeast            = function(actual){ return atLeast.negated(actual) };
Not.prototype.atMost             = function(actual){ return atMost.negated(actual) };
Not.prototype.between            = function(actual){ return between.negated(actual) };
Not.prototype.containing         = function(actual){ return containing.negated(actual) };
Not.prototype.endingWith         = function(actual){ return endingWith.negated(actual) };
Not.prototype.equalTo            = function(actual){ return equalTo.negated(actual) };
Not.prototype.false              = function(actual){ return isFalse.negated(actual) };
Not.prototype.falsy              = function(actual){ return falsy.negated(actual) };
Not.prototype.greaterThan        = function(actual){ return greaterThan.negated(actual) };
Not.prototype.instanceOf         = function(actual){ return instanceOf.negated(actual) };
Not.prototype.lessThan           = function(actual){ return lessThan.negated(actual) };
Not.prototype.NaN                = function(actual){ return isNan.negated(actual) };
Not.prototype.null               = function(actual){ return isNull.negated(actual) };
Not.prototype.ofType             = function(actual){ return ofType.negated(actual) };
Not.prototype.sameAs             = function(actual){ return sameAs.negated(actual) };
Not.prototype.startingWith       = function(actual){ return startingWith.negated(actual) };
Not.prototype.throwing           = function(actual){ return throwing.negated(actual) };
Not.prototype.true               = function(actual){ return isTrue.negated(actual) };
Not.prototype.undefined          = function(actual){ return isUndefined.negated(actual) };
Not.prototype.existing           = function(actual){ return isUndefined(actual); };

Not.prototype.empty              = function(actual){
    return function(actual){
        return actual !== '';
    }
};


var Is = function() {
    this.not = new Not();
}

Is.prototype.atLeast        = function(actual) { return atLeast(actual); };
Is.prototype.atMost         = function(actual) { return atMost(actual); };
Is.prototype.between        = function(actual) { return between(actual); };
Is.prototype.containing     = function(actual) { return containing(actual); };
Is.prototype.endingWith     = function(actual) { return endingWith(actual); };
Is.prototype.equalTo        = function(actual) { return equalTo(actual); };
Is.prototype.false          = function(actual) { return isFalse(actual); };
Is.prototype.falsy          = function(actual) { return falsy(actual); };
Is.prototype.greaterThan    = function(actual) { return greaterThan(actual); };
Is.prototype.instanceOf     = function(actual) { return instanceOf(actual); };
Is.prototype.lessThan       = function(actual) { return lessThan(actual); };
Is.prototype.NaN            = function(actual) { return isNan(actual); };
Is.prototype.null           = function(actual) { return isNull(actual); };
Is.prototype.ofType         = function(actual) { return ofType(actual); };
Is.prototype.sameAs         = function(actual) { return sameAs(actual); };
Is.prototype.startingWith   = function(actual) { return startingWith(actual); };
Is.prototype.throwing       = function(actual) { return throwing(actual); };
Is.prototype.true           = function(actual) { return isTrue(actual); };
Is.prototype.undefined      = function(actual) { return isUndefined(actual); };
Is.prototype.existing       = function(actual) { return isUndefined.negated(actual); };

Is.prototype.array = function(actual) {
    return function(actual) {
        return function () {
            return Object.prototype.toString.call(actual) === '[object Array]';
        }
    }
}

var assert = assert || {};

assert.that = function (actual) {
    if (arguments.length === 0) throw new Error('Actual is missing.');
    return { is: new Is()};
};

module.exports = assert;
