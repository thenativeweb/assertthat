'use strict';

const chai = require('chai').assert;

const ofType = require('../../../lib/constraints/ofType');

suite('ofType', () => {
  test('is a function.', done => {
    chai.typeOf(ofType, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(ofType(23), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if expected is missing.', done => {
      chai.throw(() => {
        ofType(23)();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is equal to expected.', done => {
      chai.doesNotThrow(() => {
        ofType(23)('number');
      });
      done();
    });

    test('throws an error if actual is not equal to expected.', done => {
      chai.throw(() => {
        ofType(23)('string');
      }, 'Expected 23 to be of type \'string\'.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(ofType.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(ofType.negated(23), 'function');
      done();
    });

    suite('constraint', () => {
      test('throws an error if expected is missing.', done => {
        chai.throw(() => {
          ofType.negated(23)();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual is not equal to expected.', done => {
        chai.doesNotThrow(() => {
          ofType.negated(23)('string');
        });
        done();
      });

      test('throws an error if actual is equal to expected.', done => {
        chai.throw(() => {
          ofType.negated(23)('number');
        }, 'Expected 23 not to be of type \'number\'.');
        done();
      });
    });
  });
});
