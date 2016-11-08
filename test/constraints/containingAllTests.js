'use strict';

const chai = require('chai').assert;

const containingAll = require('../../lib/constraints/containingAll');

suite('containingAll', () => {
  test('is a function.', done => {
    chai.typeOf(containingAll, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(containingAll([ 'foo', 'bar' ]), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if expected is missing.', done => {
      chai.throw(() => {
        containingAll([ 'foo', 'bar' ])();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual contains all of expected.', done => {
      chai.doesNotThrow(() => {
        containingAll([ 1, 2, 3 ])([ 1, 2, 3 ]);
        containingAll([ 1, 2, 3 ])([ 1 ]);
        containingAll([ 1, 2, 3 ])([ 3, 2 ]);
        containingAll([ 1, 2, 3 ])([ ]);
      });
      done();
    });

    test('throws an error if actual does not contain all of expected.', done => {
      chai.throw(() => {
        containingAll([ 1, 2, 3 ])([ 2, 5 ]);
      }, 'Expected [\n  1,\n  2,\n  3\n] to contain all of [\n  2,\n  5\n].');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(containingAll.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(containingAll.negated([ 'foo', 'bar' ]), 'function');
      done();
    });

    suite('constraint', () => {
      test('throws an error if expected is missing.', done => {
        chai.throw(() => {
          containingAll.negated([ 'foo', 'bar' ])();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual does not contain all of expected.', done => {
        chai.doesNotThrow(() => {
          containingAll.negated([ 1, 2, 3 ])([ 5 ]);
          containingAll.negated([ 1, 2, 3 ])([ 1, 5 ]);
          containingAll.negated([ 1, 2, 3 ])([ 1, 2, 3, 5 ]);
        });
        done();
      });

      test('throws an error if actual contains all of expected.', done => {
        chai.throw(() => {
          containingAll.negated([ 1, 2, 3 ])([ 1, 3 ]);
        }, 'Expected [\n  1,\n  2,\n  3\n] not to contain all of [\n  1,\n  3\n].');
        done();
      });
    });
  });
});
