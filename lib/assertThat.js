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
    isArray = require('./constraints/array'),
    isEmpty = require('./constraints/empty'),
    isUndefined = require('./constraints/undefined'),
    lessThan = require('./constraints/lessThan'),
    ofType = require('./constraints/ofType'),
    sameAs = require('./constraints/sameAs'),
    startingWith = require('./constraints/startingWith'),
    throwing = require('./constraints/throwing');

var Not = function(actual) {
    this._actual = actual;
}
Not.prototype.atLeast            = function(expected){ return atLeast.negated(this._actual)(expected) };
Not.prototype.atMost             = function(expected){ return atMost.negated(this._actual)(expected) };
Not.prototype.between            = function(expected){ return between.negated(this._actual)(expected) };
Not.prototype.containing         = function(expected){ return containing.negated(this._actual)(expected) };
Not.prototype.endingWith         = function(expected){ return endingWith.negated(this._actual)(expected) };
Not.prototype.equalTo            = function(expected){ return equalTo.negated(this._actual)(expected) };
Not.prototype.false              = function(expected){ return isFalse.negated(this._actual)(expected) };
Not.prototype.falsy              = function(expected){ return falsy.negated(this._actual)(expected) };
Not.prototype.greaterThan        = function(expected){ return greaterThan.negated(this._actual)(expected) };
Not.prototype.instanceOf         = function(expected){ return instanceOf.negated(this._actual)(expected) };
Not.prototype.lessThan           = function(expected){ return lessThan.negated(this._actual)(expected) };
Not.prototype.NaN                = function(expected){ return isNan.negated(this._actual)(expected) };
Not.prototype.null               = function(expected){ return isNull.negated(this._actual)(expected) };
Not.prototype.ofType             = function(expected){ return ofType.negated(this._actual)(expected) };
Not.prototype.sameAs             = function(expected){ return sameAs.negated(this._actual)(expected) };
Not.prototype.startingWith       = function(expected){ return startingWith.negated(this._actual)(expected) };
Not.prototype.throwing           = function(expected){ return throwing.negated(this._actual)(expected) };
Not.prototype.true               = function(expected){ return isTrue.negated(this._actual)(expected) };
Not.prototype.undefined          = function(expected){ return isUndefined.negated(this._actual)(expected) };
Not.prototype.existing           = function(expected){ return isUndefined(this._actual)(expected); };
Not.prototype.empty              = function(expected){ return isEmpty.negated(this._actual)(expected); }


var Is = function(actual) {
    this.actual = actual
    this.not = new Not(this.actual);
}

Is.prototype.atLeast        = function(expected) { return atLeast(this._actual)(expected); };
Is.prototype.atMost         = function(expected) { return atMost(this._actual)(expected); };
Is.prototype.between        = function(expected) { return between(this._actual)(expected); };
Is.prototype.containing     = function(expected) { return containing(this._actual)(expected); };
Is.prototype.endingWith     = function(expected) { return endingWith(this._actual)(expected); };
Is.prototype.equalTo        = function(expected) { return equalTo(this._actual)(expected); };
Is.prototype.false          = function(expected) { return isFalse(this._actual)(expected); };
Is.prototype.falsy          = function(expected) { return falsy(this._actual)(expected); };
Is.prototype.greaterThan    = function(expected) { return greaterThan(this._actual)(expected); };
Is.prototype.instanceOf     = function(expected) { return instanceOf(this._actual)(expected); };
Is.prototype.lessThan       = function(expected) { return lessThan(this._actual)(expected); };
Is.prototype.NaN            = function(expected) { return isNan(this._actual)(expected); };
Is.prototype.null           = function(expected) { return isNull(this._actual)(expected); };
Is.prototype.ofType         = function(expected) { return ofType(this._actual)(expected); };
Is.prototype.sameAs         = function(expected) { return sameAs(this._actual)(expected); };
Is.prototype.startingWith   = function(expected) { return startingWith(this._actual)(expected); };
Is.prototype.throwing       = function(expected) { return throwing(this._actual)(expected); };
Is.prototype.true           = function(expected) { return isTrue(this._actual)(expected); };
Is.prototype.undefined      = function(expected) { return isUndefined(this._actual)(expected); };
Is.prototype.existing       = function(expected) { return isUndefined.negated(this._actual)(expected); };
Is.prototype.array          = function(expected) { return isArray(this._actual)(expected);}
Is.prototype.empty          = function(expected) { return isEmpty(this._actual)(expected); }

var assert = assert || {};

assert.that = function (actual) {
    if (arguments.length === 0) throw new Error('Actual is missing.');
    return { is: new Is(actual)};
};

module.exports = assert;
