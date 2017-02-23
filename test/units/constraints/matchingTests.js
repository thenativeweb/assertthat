'use strict';

const chai = require('chai').assert;

const matching = require('../../../lib/constraints/matching');

suite('matching', () => {
  test('is a function.', done => {
    chai.typeOf(matching, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(matching('foo'), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if expected is missing.', done => {
      chai.throw(() => {
        matching('foo')();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is matching expected.', done => {
      chai.doesNotThrow(() => {
        matching('foo')(/foo/);
      });
      done();
    });

    test('throws an error if actual is not matching expected.', done => {
      chai.throw(() => {
        matching('foo')(/bar/);
      }, 'Expected \'foo\' to match /bar/.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(matching.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(matching.negated('foo'), 'function');
      done();
    });

    suite('constraint', () => {
      test('throws an error if expected is missing.', done => {
        chai.throw(() => {
          matching.negated('foo')();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual is not matching expected.', done => {
        chai.doesNotThrow(() => {
          matching.negated('foo')(/bar/);
        });
        done();
      });

      test('throws an error if actual is matching expected.', done => {
        chai.throw(() => {
          matching.negated('foo')(/foo/);
        }, 'Expected \'foo\' not to match /foo/.');
        done();
      });
    });
  });
});
