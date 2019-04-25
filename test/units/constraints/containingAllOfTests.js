'use strict';

const chai = require('chai').assert;

const containingAllOf = require('../../../lib/constraints/containingAllOf');

suite('containingAll', () => {
  test('is a function.', done => {
    chai.typeOf(containingAllOf, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(containingAllOf([ 'foo', 'bar' ]), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if expected is missing.', done => {
      chai.throw(() => {
        containingAllOf([ 'foo', 'bar' ])();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual contains all of expected.', done => {
      chai.doesNotThrow(() => {
        containingAllOf([ 1, 2, 3 ])([ 1, 2, 3 ]);
        containingAllOf([ 1, 2, 3 ])([ 1 ]);
        containingAllOf([ 1, 2, 3 ])([ 3, 2 ]);
        containingAllOf([ 1, 2, 3 ])([ ]);
      });
      done();
    });

    test('throws an error if actual does not contain all of expected.', done => {
      chai.throw(() => {
        containingAllOf([ 1, 2, 3 ])([ 2, 5 ]);
      }, 'Expected [\n  1,\n  2,\n  3\n] to contain all of [\n  2,\n  5\n].');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(containingAllOf.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(containingAllOf.negated([ 'foo', 'bar' ]), 'function');
      done();
    });

    suite('constraint', () => {
      test('throws an error if expected is missing.', done => {
        chai.throw(() => {
          containingAllOf.negated([ 'foo', 'bar' ])();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual does not contain all of expected.', done => {
        chai.doesNotThrow(() => {
          containingAllOf.negated([ 1, 2, 3 ])([ 5 ]);
          containingAllOf.negated([ 1, 2, 3 ])([ 1, 5 ]);
          containingAllOf.negated([ 1, 2, 3 ])([ 1, 2, 3, 5 ]);
        });
        done();
      });

      test('throws an error if actual contains all of expected.', done => {
        chai.throw(() => {
          containingAllOf.negated([ 1, 2, 3 ])([ 1, 3 ]);
        }, 'Expected [\n  1,\n  2,\n  3\n] not to contain all of [\n  1,\n  3\n].');
        done();
      });
    });
  });
});
