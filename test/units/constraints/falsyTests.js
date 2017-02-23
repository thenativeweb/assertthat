'use strict';

const chai = require('chai').assert;

const falsy = require('../../../lib/constraints/falsy');

suite('falsy', () => {
  test('is a function.', done => {
    chai.typeOf(falsy, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(falsy(0), 'function');
    done();
  });

  suite('constraint', () => {
    test('does not throw an error if actual is falsy.', done => {
      chai.doesNotThrow(() => {
        falsy(0)();
      });
      done();
    });

    test('throws an error if actual is not falsy.', done => {
      chai.throw(() => {
        falsy(23)();
      }, 'Expected 23 to be falsy.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(falsy.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(falsy.negated(0), 'function');
      done();
    });

    suite('constraint', () => {
      test('does not throw an error if actual is not falsy.', done => {
        chai.doesNotThrow(() => {
          falsy.negated(23)();
        });
        done();
      });

      test('throws an error if actual is falsy.', done => {
        chai.throw(() => {
          falsy.negated(0)();
        }, 'Expected 0 not to be falsy.');
        done();
      });
    });
  });
});
