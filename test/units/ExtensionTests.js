'use strict';

const chai = require('chai').assert;

const Extension = require('../../lib/Extension');

suite('Extension', () => {
  test('is a constructor.', done => {
    const is = new Extension('is');

    chai.typeOf(Extension, 'function');
    chai.typeOf(is, 'object');
    done();
  });

  test('contains the extension name.', done => {
    const is = new Extension('is');

    chai.equal(is.name, 'is');
    done();
  });

  test('contains a method.', done => {
    const is = new Extension('is');

    chai.deepEqual(is.methods, {});

    const fnName = 'isTrue';
    const fnDef = arg => arg === true;

    is.addMethod(fnName, fnDef);

    const expected = {};

    expected[fnName] = fnDef;
    chai.deepEqual(is.methods, expected);

    done();
  });

  test('contains a nested extension.', done => {
    const is = new Extension('is');

    chai.deepEqual(is.nextedExtensions, {});

    const extName = 'childExt';

    is.addExtension(extName);

    chai.deepEqual(is.nextedExtensions[extName].methods, {});
    chai.deepEqual(is.nextedExtensions[extName].nextedExtensions, {});
    done();
  });

  test('does not overrides existing nested extension.', done => {
    const is = new Extension('is');

    chai.deepEqual(is.nextedExtensions, {});
    const extName = 'childExt';
    const fnName = 'childExtisTruefn';
    const fnDef = arg => arg === true;

    is.addExtension(extName);
    is.forExtension(extName).addMethod(fnName, fnDef);

    const expectedChildExtMethods = {};

    expectedChildExtMethods[fnName] = fnDef;
    chai.deepEqual(is.nextedExtensions[extName].methods, expectedChildExtMethods);

    is.addExtension(extName);

    chai.deepEqual(is.nextedExtensions[extName].methods, expectedChildExtMethods);
    done();
  });
});
