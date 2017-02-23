'use strict';

const chai = require('chai').assert;

const isUndefined = require('../../../lib/constraints/undefined');

suite('undefined', () => {
  test('is a function.', done => {
    chai.typeOf(isUndefined, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(isUndefined(undefined), 'function');
    done();
  });

  suite('constraint', () => {
    test('does not throw an error if actual is undefined.', done => {
      chai.doesNotThrow(() => {
        isUndefined(undefined)();
      });
      done();
    });

    test('throws an error if actual is not undefined.', done => {
      chai.throw(() => {
        isUndefined(23)();
      }, 'Expected 23 to be undefined.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(isUndefined.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(isUndefined.negated(undefined), 'function');
      done();
    });

    suite('constraint', () => {
      test('does not throw an error if actual is not undefined.', done => {
        chai.doesNotThrow(() => {
          isUndefined.negated(23)();
        });
        done();
      });

      test('throws an error if actual is undefined.', done => {
        chai.throw(() => {
          isUndefined.negated(undefined)();
        }, 'Expected undefined not to be undefined.');
        done();
      });
    });
  });
});
