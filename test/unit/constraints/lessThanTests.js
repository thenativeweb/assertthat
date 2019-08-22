'use strict';

const chai = require('chai').assert;

const lessThan = require('../../../lib/constraints/lessThan');

suite('lessThan', () => {
  test('is a function.', done => {
    chai.typeOf(lessThan, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(lessThan(23), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if expected is missing.', done => {
      chai.throw(() => {
        lessThan(23)();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is less than expected.', done => {
      chai.doesNotThrow(() => {
        lessThan(23)(42);
      });
      done();
    });

    test('throws an error if actual is not less than expected.', done => {
      chai.throw(() => {
        lessThan(42)(23);
      }, 'Expected 42 to be less than 23.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(lessThan.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(lessThan.negated(23), 'function');
      done();
    });

    suite('constraint', () => {
      test('throws an error if expected is missing.', done => {
        chai.throw(() => {
          lessThan.negated(23)();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual is not less than expected.', done => {
        chai.doesNotThrow(() => {
          lessThan.negated(42)(23);
        });
        done();
      });

      test('throws an error if actual is less than expected.', done => {
        chai.throw(() => {
          lessThan.negated(23)(42);
        }, 'Expected 23 not to be less than 42.');
        done();
      });
    });
  });
});
