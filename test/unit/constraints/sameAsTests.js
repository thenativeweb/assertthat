'use strict';

const chai = require('chai').assert;

const sameAs = require('../../../lib/constraints/sameAs');

suite('sameAs', () => {
  test('is a function.', done => {
    chai.typeOf(sameAs, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(sameAs(23), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if expected is missing.', done => {
      chai.throw(() => {
        sameAs(23)();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is same as expected.', done => {
      chai.doesNotThrow(() => {
        sameAs(23)(23);
      });
      done();
    });

    test('throws an error if actual is not same as expected.', done => {
      chai.throw(() => {
        sameAs(23)(42);
      }, 'Expected 23 to be same as 42.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(sameAs.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(sameAs.negated(23), 'function');
      done();
    });

    suite('constraint', () => {
      test('throws an error if expected is missing.', done => {
        chai.throw(() => {
          sameAs.negated(23)();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual is not same as expected.', done => {
        chai.doesNotThrow(() => {
          sameAs.negated(23)(42);
        });
        done();
      });

      test('throws an error if actual is same as expected.', done => {
        chai.throw(() => {
          sameAs.negated(23)(23);
        }, 'Expected 23 not to be same as 23.');
        done();
      });
    });
  });
});
