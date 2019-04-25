'use strict';

const chai = require('chai').assert;

const isNan = require('../../../lib/constraints/nan');

suite('NaN', () => {
  test('is a function.', done => {
    chai.typeOf(isNan, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(isNan(Number.NaN), 'function');
    done();
  });

  suite('constraint', () => {
    test('does not throw an error if actual is NaN.', done => {
      chai.doesNotThrow(() => {
        isNan(Number.NaN)();
      });
      done();
    });

    test('throws an error if actual is not NaN.', done => {
      chai.throw(() => {
        isNan(23)();
      }, 'Expected 23 to be NaN.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(isNan.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(isNan.negated(Number.NaN), 'function');
      done();
    });

    suite('constraint', () => {
      test('does not throw an error if actual is not NaN.', done => {
        chai.doesNotThrow(() => {
          isNan.negated(23)();
        });
        done();
      });

      test('throws an error if actual is NaN.', done => {
        chai.throw(() => {
          isNan.negated(Number.NaN)();
        }, 'Expected NaN not to be NaN.');
        done();
      });
    });
  });
});
