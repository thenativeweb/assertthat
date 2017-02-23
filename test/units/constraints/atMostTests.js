'use strict';

const chai = require('chai').assert;

const atMost = require('../../../lib/constraints/atMost');

suite('atMost', () => {
  test('is a function.', done => {
    chai.typeOf(atMost, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(atMost(23), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if expected is missing.', done => {
      chai.throw(() => {
        atMost(23)();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is at most expected.', done => {
      chai.doesNotThrow(() => {
        atMost(23)(23);
      });
      done();
    });

    test('throws an error if actual is not at most expected.', done => {
      chai.throw(() => {
        atMost(42)(23);
      }, 'Expected 42 to be at most 23.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(atMost.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(atMost.negated(23), 'function');
      done();
    });

    suite('constraint', () => {
      test('throws an error if expected is missing.', done => {
        chai.throw(() => {
          atMost.negated(23)();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual is not at most expected.', done => {
        chai.doesNotThrow(() => {
          atMost.negated(42)(23);
        });
        done();
      });

      test('throws an error if actual is at most expected.', done => {
        chai.throw(() => {
          atMost.negated(23)(23);
        }, 'Expected 23 to be at most 23.');
        done();
      });
    });
  });
});
