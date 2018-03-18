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

const Extension = require('./Extension');
const fail = require('./fail');

const assert = {};
const extensions = {};

const registerExtension = (extList, extName, extDef, actual) => {
  extList[extName] = extList[extName] || {};

  const methods = extDef.methods;
  const childExtensions = extDef.nextedExtensions;

  for (const methodName in methods) { // eslint-disable-line guard-for-in
    extList[extName][methodName] = methods[methodName](actual);
  }

  for (const child in childExtensions) { // eslint-disable-line guard-for-in
    registerExtension(extList[extName], child, childExtensions[child], actual);
  }
};

const addExtension = extName => {
  extensions[extName] = extensions[extName] || new Extension(extName);
};

const forExtension = extName => extensions[extName];

const endpoint = {
  addExtension,
  forExtension,
  fail
};

assert.use = plugin => {
  plugin(endpoint);
};

const addIsExtension = () => {
  assert.addExtension('is');
  assert.forExtension('is').addExtension('not');

  assert.forExtension('is').addMethod('atLeast', atLeast).
    addMethod('atMost', atMost).
    addMethod('between', between).
    addMethod('containing', containing).
    addMethod('containingAnyOf', containingAnyOf).
    addMethod('containingAllOf', containingAllOf).
    addMethod('endingWith', endingWith).
    addMethod('equalTo', equalTo).
    addMethod('false', isFalse).
    addMethod('falsy', falsy).
    addMethod('greaterThan', greaterThan).
    addMethod('instanceOf', instanceOf).
    addMethod('lessThan', lessThan).
    addMethod('matching', matching).
    addMethod('NaN', isNan).
    addMethod('null', isNull).
    addMethod('ofType', ofType).
    addMethod('sameAs', sameAs).
    addMethod('sameJsonAs', sameJsonAs).
    addMethod('startingWith', startingWith).
    addMethod('throwing', throwing).
    addMethod('throwingAsync', throwingAsync).
    addMethod('true', isTrue).
    addMethod('undefined', isUndefined);

  assert.forExtension('is').forExtension('not').
    addMethod('atLeast', atLeast.negated).
    addMethod('atMost', atMost.negated).
    addMethod('between', between.negated).
    addMethod('containing', containing.negated).
    addMethod('containingAnyOf', containingAnyOf.negated).
    addMethod('containingAllOf', containingAllOf.negated).
    addMethod('endingWith', endingWith.negated).
    addMethod('equalTo', equalTo.negated).
    addMethod('false', isFalse.negated).
    addMethod('falsy', falsy.negated).
    addMethod('greaterThan', greaterThan.negated).
    addMethod('instanceOf', instanceOf.negated).
    addMethod('lessThan', lessThan.negated).
    addMethod('matching', matching.negated).
    addMethod('NaN', isNan.negated).
    addMethod('null', isNull.negated).
    addMethod('ofType', ofType.negated).
    addMethod('sameAs', sameAs.negated).
    addMethod('sameJsonAs', sameJsonAs.negated).
    addMethod('startingWith', startingWith.negated).
    addMethod('throwing', throwing.negated).
    addMethod('throwingAsync', throwingAsync.negated).
    addMethod('true', isTrue.negated).
    addMethod('undefined', isUndefined.negated);
};

assert.that = function (actual) {
  if (arguments.length === 0) {
    throw new Error('Actual is missing.');
  }

  addIsExtension();

  const ext = {};

  for (const extName in extensions) { // eslint-disable-line guard-for-in
    registerExtension(ext, extName, extensions[extName], actual);
  }

  return ext;
};

module.exports = assert;
