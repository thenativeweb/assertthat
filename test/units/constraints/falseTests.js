'use strict';

const chai = require('chai').assert;

const isFalse = require('../../../lib/constraints/false');

suite('false', () => {
  test('is a function.', done => {
    chai.typeOf(isFalse, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(isFalse(false), 'function');
    done();
  });

  suite('constraint', () => {
    test('does not throw an error if actual is false.', done => {
      chai.doesNotThrow(() => {
        isFalse(false)();
      });
      done();
    });

    test('throws an error if actual is not false.', done => {
      chai.throw(() => {
        isFalse(true)();
      }, 'Expected true to be false.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(isFalse.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(isFalse.negated(false), 'function');
      done();
    });

    suite('constraint', () => {
      test('does not throw an error if actual is not false.', done => {
        chai.doesNotThrow(() => {
          isFalse.negated(true)();
        });
        done();
      });

      test('throws an error if actual is false.', done => {
        chai.throw(() => {
          isFalse.negated(false)();
        }, 'Expected false not to be false.');
        done();
      });
    });
  });
});
