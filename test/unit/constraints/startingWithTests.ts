import chaiStatic from 'chai';
import { startingWith } from '../../../lib/constraints/startingWith';

const chai = chaiStatic.assert;

suite('startingWith', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(startingWith, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(startingWith('foobar'), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual starts with expected.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        startingWith('foobar')('foo');
      });
    });

    test('throws an error if actual does not start with expected.', async (): Promise<void> => {
      chai.throw((): void => {
        startingWith('foobar')('bar');
      }, 'Expected \'foobar\' to start with \'bar\'.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(startingWith.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(startingWith.negated('foobar'), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual does not start with expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          startingWith.negated('foobar')('bar');
        });
      });

      test('throws an error if actual starts with expected.', async (): Promise<void> => {
        chai.throw((): void => {
          startingWith.negated('foobar')('foo');
        }, 'Expected \'foobar\' not to start with \'foo\'.');
      });
    });
  });
});
