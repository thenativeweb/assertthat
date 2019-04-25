'use strict';

const chai = require('chai').assert;

const containing = require('../../../lib/constraints/containing');

suite('containing', () => {
  test('is a function.', done => {
    chai.typeOf(containing, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(containing('foobar'), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if expected is missing.', done => {
      chai.throw(() => {
        containing('foobar')();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual contains expected.', done => {
      chai.doesNotThrow(() => {
        containing('foobar')('ooba');
      });
      done();
    });

    test('throws an error if actual does not contain expected.', done => {
      chai.throw(() => {
        containing('foobar')('nufta');
      }, 'Expected \'foobar\' to contain \'nufta\'.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(containing.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(containing.negated('foobar'), 'function');
      done();
    });

    suite('constraint', () => {
      test('throws an error if expected is missing.', done => {
        chai.throw(() => {
          containing.negated('foobar')();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual does not contain expected.', done => {
        chai.doesNotThrow(() => {
          containing.negated('foobar')('nufta');
        });
        done();
      });

      test('throws an error if actual contains expected.', done => {
        chai.throw(() => {
          containing.negated('foobar')('ooba');
        }, 'Expected \'foobar\' not to contain \'ooba\'.');
        done();
      });
    });
  });
});
