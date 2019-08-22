'use strict';

const chai = require('chai').assert;

const instanceOf = require('../../../lib/constraints/instanceOf');

suite('instanceOf', () => {
  test('is a function.', done => {
    chai.typeOf(instanceOf, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(instanceOf(new Error()), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if expected is missing.', done => {
      chai.throw(() => {
        instanceOf(new Error())();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is an instance of expected.', done => {
      chai.doesNotThrow(() => {
        instanceOf(new Error())(Error);
      });
      done();
    });

    test('throws an error if actual is not an instance of expected.', done => {
      chai.throw(() => {
        instanceOf({})(Error);
      }, 'Expected {} to be an instance of Error.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(instanceOf.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(instanceOf.negated(new Error()), 'function');
      done();
    });

    suite('constraint', () => {
      test('throws an error if expected is missing.', done => {
        chai.throw(() => {
          instanceOf.negated(new Error())();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual is not an instance of expected.', done => {
        chai.doesNotThrow(() => {
          instanceOf.negated({})(Error);
        });
        done();
      });

      test('throws an error if actual is an instance of expected.', done => {
        chai.throw(() => {
          instanceOf.negated(new Error())(Error);
        }, `Expected 'Error' not to be an instance of Error.`);
        done();
      });
    });
  });
});
