'use strict';

const chai = require('chai').assert;

const greaterThan = require('../../../lib/constraints/greaterThan');

suite('greaterThan', () => {
  test('is a function.', done => {
    chai.typeOf(greaterThan, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(greaterThan(23), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if expected is missing.', done => {
      chai.throw(() => {
        greaterThan(23)();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is greater than expected.', done => {
      chai.doesNotThrow(() => {
        greaterThan(42)(23);
      });
      done();
    });

    test('throws an error if actual is not greater than expected.', done => {
      chai.throw(() => {
        greaterThan(23)(42);
      }, 'Expected 23 to be greater than 42.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(greaterThan.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(greaterThan.negated(23), 'function');
      done();
    });

    suite('constraint', () => {
      test('throws an error if expected is missing.', done => {
        chai.throw(() => {
          greaterThan.negated(23)();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual is not greater than expected.', done => {
        chai.doesNotThrow(() => {
          greaterThan.negated(23)(42);
        });
        done();
      });

      test('throws an error if actual is greater than expected.', done => {
        chai.throw(() => {
          greaterThan.negated(42)(23);
        }, 'Expected 42 not to be greater than 23.');
        done();
      });
    });
  });
});
