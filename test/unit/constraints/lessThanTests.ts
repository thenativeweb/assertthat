import chaiStatic from 'chai';
import { lessThan } from '../../../lib/constraints/lessThan';

const chai = chaiStatic.assert;

suite('lessThan', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(lessThan, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(lessThan(23), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual is less than expected.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        lessThan(23)(42);
      });
    });

    test('throws an error if actual is not less than expected.', async (): Promise<void> => {
      chai.throw((): void => {
        lessThan(42)(23);
      }, 'Expected 42 to be less than 23.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(lessThan.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(lessThan.negated(23), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not less than expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          lessThan.negated(42)(23);
        });
      });

      test('throws an error if actual is less than expected.', async (): Promise<void> => {
        chai.throw((): void => {
          lessThan.negated(23)(42);
        }, 'Expected 23 not to be less than 42.');
      });
    });
  });
});
