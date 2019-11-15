import { atMost } from '../../../lib/constraints/atMost';
import chaiStatic from 'chai';

const chai = chaiStatic.assert;

suite('atMost', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(atMost, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(atMost(23), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual is at most expected.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        atMost(23)(23);
      });
    });

    test('throws an error if actual is not at most expected.', async (): Promise<void> => {
      chai.throw((): void => {
        atMost(42)(23);
      }, 'Expected 42 to be at most 23.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(atMost.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(atMost.negated(23), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not at most expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          atMost.negated(42)(23);
        });
      });

      test('throws an error if actual is at most expected.', async (): Promise<void> => {
        chai.throw((): void => {
          atMost.negated(23)(23);
        }, 'Expected 23 to be at most 23.');
      });
    });
  });
});
