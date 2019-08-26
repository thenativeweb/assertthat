import chaiStatic from 'chai';
import matching from '../../../lib/constraints/matching';

const chai = chaiStatic.assert;

suite('matching', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(matching, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(matching('foo'), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual is matching expected.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        matching('foo')(/foo/u);
      });
    });

    test('throws an error if actual is not matching expected.', async (): Promise<void> => {
      chai.throw((): void => {
        matching('foo')(/bar/u);
      }, 'Expected \'foo\' to match /bar/u.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(matching.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(matching.negated('foo'), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not matching expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          matching.negated('foo')(/bar/u);
        });
      });

      test('throws an error if actual is matching expected.', async (): Promise<void> => {
        chai.throw((): void => {
          matching.negated('foo')(/foo/u);
        }, 'Expected \'foo\' not to match /foo/u.');
      });
    });
  });
});
