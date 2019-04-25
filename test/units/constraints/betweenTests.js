'use strict';

const chai = require('chai').assert;

const between = require('../../../lib/constraints/between');

suite('between', () => {
  test('is a function.', done => {
    chai.typeOf(between, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(between(23), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if expected lower bound is missing.', done => {
      chai.throw(() => {
        between(23)();
      }, 'Expected lower bound is missing.');
      done();
    });

    test('throws an error if expected upper bound is missing.', done => {
      chai.throw(() => {
        between(23)(7);
      }, 'Expected upper bound is missing.');
      done();
    });

    test('does not throw an error if actual is between the expected lower and upper bounds.', done => {
      chai.doesNotThrow(() => {
        between(23)(7, 42);
      });
      done();
    });

    test('throws an error if actual is not between the expected lower and upper bounds.', done => {
      chai.throw(() => {
        between(7)(23, 42);
      }, 'Expected 7 to be between 23 and 42.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(between.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(between.negated(23), 'function');
      done();
    });

    suite('constraint', () => {
      test('throws an error if expected lower bound is missing.', done => {
        chai.throw(() => {
          between.negated(23)();
        }, 'Expected lower bound is missing.');
        done();
      });

      test('throws an error if expected upper bound is missing.', done => {
        chai.throw(() => {
          between.negated(23)(7);
        }, 'Expected upper bound is missing.');
        done();
      });

      test('does not throw an error if actual is not between the expected lower and upper bounds.', done => {
        chai.doesNotThrow(() => {
          between.negated(42)(7, 23);
        });
        done();
      });

      test('throws an error if actual is between the expected lower and upper bounds.', done => {
        chai.throw(() => {
          between.negated(23)(7, 42);
        }, 'Expected 23 not to be between 7 and 42.');
        done();
      });
    });
  });
});
