'use strict';

const chai = require('chai').assert;

const isTrue = require('../../../lib/constraints/true');

suite('true', () => {
  test('is a function.', done => {
    chai.typeOf(isTrue, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(isTrue(true), 'function');
    done();
  });

  suite('constraint', () => {
    test('does not throw an error if actual is true.', done => {
      chai.doesNotThrow(() => {
        isTrue(true)();
      });
      done();
    });

    test('throws an error if actual is not true.', done => {
      chai.throw(() => {
        isTrue(false)();
      }, 'Expected false to be true.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(isTrue.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(isTrue.negated(true), 'function');
      done();
    });

    suite('constraint', () => {
      test('does not throw an error if actual is not true.', done => {
        chai.doesNotThrow(() => {
          isTrue.negated(false)();
        });
        done();
      });

      test('throws an error if actual is true.', done => {
        chai.throw(() => {
          isTrue.negated(true)();
        }, 'Expected true not to be true.');
        done();
      });
    });
  });
});
