import chaiStatic from 'chai';
import { greaterThan } from '../../../lib/constraints/greaterThan';

const chai = chaiStatic.assert;

suite('greaterThan', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(greaterThan, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(greaterThan(23), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual is greater than expected.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        greaterThan(42)(23);
      });
    });

    test('throws an error if actual is not greater than expected.', async (): Promise<void> => {
      chai.throw((): void => {
        greaterThan(23)(42);
      }, 'Expected 23 to be greater than 42.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(greaterThan.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(greaterThan.negated(23), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not greater than expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          greaterThan.negated(23)(42);
        });
      });

      test('throws an error if actual is greater than expected.', async (): Promise<void> => {
        chai.throw((): void => {
          greaterThan.negated(42)(23);
        }, 'Expected 42 not to be greater than 23.');
      });
    });
  });
});
