'use strict';

const chai = require('chai').assert;

const endingWith = require('../../../lib/constraints/endingWith');

suite('endingWith', () => {
  test('is a function.', done => {
    chai.typeOf(endingWith, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(endingWith('foobar'), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if expected is missing.', done => {
      chai.throw(() => {
        endingWith('foobar')();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual ends with expected.', done => {
      chai.doesNotThrow(() => {
        endingWith('foobar')('bar');
      });
      done();
    });

    test('throws an error if actual does not end with expected.', done => {
      chai.throw(() => {
        endingWith('foobar')('foo');
      }, 'Expected \'foobar\' to end with \'foo\'.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(endingWith.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(endingWith.negated('foobar'), 'function');
      done();
    });

    suite('constraint', () => {
      test('throws an error if expected is missing.', done => {
        chai.throw(() => {
          endingWith.negated('foobar')();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual does not end with expected.', done => {
        chai.doesNotThrow(() => {
          endingWith.negated('foobar')('foo');
        });
        done();
      });

      test('throws an error if actual ends with expected.', done => {
        chai.throw(() => {
          endingWith.negated('foobar')('bar');
        }, 'Expected \'foobar\' not to end with \'bar\'.');
        done();
      });
    });
  });
});
