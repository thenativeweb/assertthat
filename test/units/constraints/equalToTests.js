'use strict';

const chai = require('chai').assert;

const equalTo = require('../../../lib/constraints/equalTo');

suite('equalTo', () => {
  test('is a function.', done => {
    chai.typeOf(equalTo, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(equalTo(23), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if expected is missing.', done => {
      chai.throw(() => {
        equalTo(23)();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is equal to expected.', done => {
      chai.doesNotThrow(() => {
        equalTo(23)(23);
      });
      done();
    });

    test('throws an error if actual is not equal to expected.', done => {
      chai.throw(() => {
        equalTo(23)(42);
      }, 'Expected 23 to equal 42.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(equalTo.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(equalTo.negated(23), 'function');
      done();
    });

    suite('constraint', () => {
      test('throws an error if expected is missing.', done => {
        chai.throw(() => {
          equalTo.negated(23)();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual is not equal to expected.', done => {
        chai.doesNotThrow(() => {
          equalTo.negated(23)(42);
        });
        done();
      });

      test('throws an error if actual is equal to expected.', done => {
        chai.throw(() => {
          equalTo.negated(23)(23);
        }, 'Expected 23 not to equal 23.');
        done();
      });
    });
  });
});
