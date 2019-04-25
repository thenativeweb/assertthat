'use strict';

const chai = require('chai').assert;

const isNull = require('../../../lib/constraints/null');

suite('null', () => {
  test('is a function.', done => {
    chai.typeOf(isNull, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(isNull(null), 'function');
    done();
  });

  suite('constraint', () => {
    test('does not throw an error if actual is null.', done => {
      chai.doesNotThrow(() => {
        isNull(null)();
      });
      done();
    });

    test('throws an error if actual is not null.', done => {
      chai.throw(() => {
        isNull(23)();
      }, 'Expected 23 to be null.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(isNull.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(isNull.negated(null), 'function');
      done();
    });

    suite('constraint', () => {
      test('does not throw an error if actual is not null.', done => {
        chai.doesNotThrow(() => {
          isNull.negated(23)();
        });
        done();
      });

      test('throws an error if actual is null.', done => {
        chai.throw(() => {
          isNull.negated(null)();
        }, 'Expected null not to be null.');
        done();
      });
    });
  });
});
