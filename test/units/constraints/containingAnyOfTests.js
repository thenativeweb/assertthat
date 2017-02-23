'use strict';

const chai = require('chai').assert;

const containingAnyOf = require('../../../lib/constraints/containingAnyOf');

suite('containingAnyOf', () => {
  test('is a function.', done => {
    chai.typeOf(containingAnyOf, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(containingAnyOf([ 'foo', 'bar' ]), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if expected is missing.', done => {
      chai.throw(() => {
        containingAnyOf([ 'foo', 'bar' ])();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual contains any of expected.', done => {
      chai.doesNotThrow(() => {
        containingAnyOf([ 1, 2, 3 ])([ 1 ]);
        containingAnyOf([ 1, 2, 3 ])([ 1, 3 ]);
        containingAnyOf([ 1, 2, 3 ])([ 1, 5 ]);
        containingAnyOf([ 1, 2, 3 ])([ 1, 3, 5 ]);
      });
      done();
    });

    test('throws an error if actual does not contain any of expected.', done => {
      chai.throw(() => {
        containingAnyOf([ 1, 2, 3 ])([ 4 ]);
      }, 'Expected [\n  1,\n  2,\n  3\n] to contain any of [\n  4\n].');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(containingAnyOf.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(containingAnyOf.negated([ 'foo', 'bar' ]), 'function');
      done();
    });

    suite('constraint', () => {
      test('throws an error if expected is missing.', done => {
        chai.throw(() => {
          containingAnyOf.negated([ 'foo', 'bar' ])();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual does not contain any of expected.', done => {
        chai.doesNotThrow(() => {
          containingAnyOf.negated([ 1, 2, 3 ])([ 4 ]);
        });
        done();
      });

      test('throws an error if actual contains any of expected.', done => {
        chai.throw(() => {
          containingAnyOf.negated([ 1, 2, 3 ])([ 5, 1 ]);
        }, 'Expected [\n  1,\n  2,\n  3\n] not to contain any of [\n  5,\n  1\n].');
        done();
      });
    });
  });
});
