'use strict';

const chai = require('chai').assert;

const sameJsonAs = require('../../../lib/constraints/sameJsonAs');

suite('sameJsonAs', () => {
  test('is a function.', done => {
    chai.typeOf(sameJsonAs, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(sameJsonAs(23), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if expected is missing.', done => {
      chai.throw(() => {
        sameJsonAs(23)();
      }, 'Expected is missing.');
      done();
    });

    test('does not throw an error if actual is the same JSON as expected.', done => {
      chai.doesNotThrow(() => {
        sameJsonAs({ foo: 'bar' })({ foo: 'bar' });
      });
      done();
    });

    test('does not throw an error if actual is the same JSON as expected even when functions are used.', done => {
      chai.doesNotThrow(() => {
        sameJsonAs({ foo: 'bar', bar () {} })({ foo: 'bar' });
      });
      done();
    });

    test('throws an error if actual is not the same JSON as expected.', done => {
      chai.throw(() => {
        sameJsonAs({ foo: 'bar' })({ foo: 'baz' });
      }, 'Expected {\n  foo: \'bar\'\n} to equal {\n  foo: \'baz\'\n}.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(sameJsonAs.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(sameJsonAs.negated(23), 'function');
      done();
    });

    suite('constraint', () => {
      test('throws an error if expected is missing.', done => {
        chai.throw(() => {
          sameJsonAs.negated(23)();
        }, 'Expected is missing.');
        done();
      });

      test('does not throw an error if actual is not the same JSON as expected.', done => {
        chai.doesNotThrow(() => {
          sameJsonAs.negated({ foo: 'bar' })({ foo: 'baz' });
        });
        done();
      });

      test('throws an error if actual is the same JSON as expected.', done => {
        chai.throw(() => {
          sameJsonAs.negated({ foo: 'bar' })({ foo: 'bar' });
        }, 'Expected {\n  foo: \'bar\'\n} not to equal {\n  foo: \'bar\'\n}.');
        done();
      });

      test('throws an error if actual is the same JSON as expected even when functions are used.', done => {
        chai.throw(() => {
          sameJsonAs.negated({ foo: 'bar', bar () {} })({ foo: 'bar' });
        }, 'Expected {\n  foo: \'bar\',\n  bar: bar() {}\n} not to equal {\n  foo: \'bar\'\n}.');
        done();
      });
    });
  });
});
