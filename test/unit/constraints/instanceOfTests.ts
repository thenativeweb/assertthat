import chaiStatic from 'chai';
import { instanceOf } from '../../../lib/constraints/instanceOf';

const chai = chaiStatic.assert;

suite('instanceOf', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(instanceOf, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(instanceOf(new Error('Something went wrong.')), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual is an instance of expected.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        instanceOf(new Error('Something went wrong.'))(Error);
      });
    });

    test('throws an error if actual is not an instance of expected.', async (): Promise<void> => {
      chai.throw((): void => {
        instanceOf({})(Error);
      }, 'Expected {} to be an instance of Error.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(instanceOf.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(instanceOf.negated(new Error('Something went wrong.')), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not an instance of expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          instanceOf.negated({})(Error);
        });
      });

      test('throws an error if actual is an instance of expected.', async (): Promise<void> => {
        chai.throw((): void => {
          instanceOf.negated(new Error('Something went wrong.'))(Error);
        }, `Expected 'Error' not to be an instance of Error.`);
      });
    });
  });
});
