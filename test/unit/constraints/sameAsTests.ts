import chaiStatic from 'chai';
import { sameAs } from '../../../lib/constraints/sameAs';

const chai = chaiStatic.assert;

suite('sameAs', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(sameAs, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(sameAs(23), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual is same as expected.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        sameAs(23)(23);
      });
    });

    test('throws an error if actual is not same as expected.', async (): Promise<void> => {
      chai.throw((): void => {
        sameAs(23)(42);
      }, 'Expected 23 to be same as 42.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(sameAs.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(sameAs.negated(23), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not same as expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          sameAs.negated(23)(42);
        });
      });

      test('throws an error if actual is same as expected.', async (): Promise<void> => {
        chai.throw((): void => {
          sameAs.negated(23)(23);
        }, 'Expected 23 not to be same as 23.');
      });
    });
  });
});
