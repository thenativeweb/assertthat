'use strict';

const chai = require('chai').assert;

const startingWith = require('../../../lib/constraints/startingWith');

suite('startingWith', () => {
  test('is a function.', done => {
    chai.typeOf(startingWith, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(startingWith('foobar'), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if expected is missing.', done => {
      chai.throw(() => {
        startingWith('foobar')();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual starts with expected.', done => {
      chai.doesNotThrow(() => {
        startingWith('foobar')('foo');
      });
      done();
    });

    test('throws an error if actual does not start with expected.', done => {
      chai.throw(() => {
        startingWith('foobar')('bar');
      }, 'Expected \'foobar\' to start with \'bar\'.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(startingWith.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(startingWith.negated('foobar'), 'function');
      done();
    });

    suite('constraint', () => {
      test('throws an error if expected is missing.', done => {
        chai.throw(() => {
          startingWith.negated('foobar')();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual does not start with expected.', done => {
        chai.doesNotThrow(() => {
          startingWith.negated('foobar')('bar');
        });
        done();
      });

      test('throws an error if actual starts with expected.', done => {
        chai.throw(() => {
          startingWith.negated('foobar')('foo');
        }, 'Expected \'foobar\' not to start with \'foo\'.');
        done();
      });
    });
  });
});
