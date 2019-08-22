'use strict';

const chai = require('chai').assert;

const atLeast = require('../../../lib/constraints/atLeast');

suite('atLeast', () => {
  test('is a function.', done => {
    chai.typeOf(atLeast, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(atLeast(23), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if expected is missing.', done => {
      chai.throw(() => {
        atLeast(23)();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is at least expected.', done => {
      chai.doesNotThrow(() => {
        atLeast(23)(23);
      });
      done();
    });

    test('throws an error if actual is not at least expected.', done => {
      chai.throw(() => {
        atLeast(23)(42);
      }, 'Expected 23 to be at least 42.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(atLeast.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(atLeast.negated(23), 'function');
      done();
    });

    suite('constraint', () => {
      test('throws an error if expected is missing.', done => {
        chai.throw(() => {
          atLeast.negated(23)();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual is not at least expected.', done => {
        chai.doesNotThrow(() => {
          atLeast.negated(23)(42);
        });
        done();
      });

      test('throws an error if actual is at least expected.', done => {
        chai.throw(() => {
          atLeast.negated(23)(23);
        }, 'Expected 23 not to be at least 23.');
        done();
      });
    });
  });
});
