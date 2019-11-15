import chaiStatic from 'chai';
import { endingWith } from '../../../lib/constraints/endingWith';

const chai = chaiStatic.assert;

suite('endingWith', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(endingWith, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(endingWith('foobar'), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual ends with expected.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        endingWith('foobar')('bar');
      });
    });

    test('throws an error if actual does not end with expected.', async (): Promise<void> => {
      chai.throw((): void => {
        endingWith('foobar')('foo');
      }, 'Expected \'foobar\' to end with \'foo\'.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(endingWith.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(endingWith.negated('foobar'), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual does not end with expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          endingWith.negated('foobar')('foo');
        });
      });

      test('throws an error if actual ends with expected.', async (): Promise<void> => {
        chai.throw((): void => {
          endingWith.negated('foobar')('bar');
        }, 'Expected \'foobar\' not to end with \'bar\'.');
      });
    });
  });
});
