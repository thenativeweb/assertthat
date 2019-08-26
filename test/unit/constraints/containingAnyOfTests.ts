import chaiStatic from 'chai';
import containingAnyOf from '../../../lib/constraints/containingAnyOf';

const chai = chaiStatic.assert;

suite('containingAnyOf', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(containingAnyOf, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(containingAnyOf([ 'foo', 'bar' ]), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual contains any of expected.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        containingAnyOf([ 1, 2, 3 ])([ 1 ]);
        containingAnyOf([ 1, 2, 3 ])([ 1, 3 ]);
        containingAnyOf([ 1, 2, 3 ])([ 1, 5 ]);
        containingAnyOf([ 1, 2, 3 ])([ 1, 3, 5 ]);
      });
    });

    test('throws an error if actual does not contain any of expected.', async (): Promise<void> => {
      chai.throw((): void => {
        containingAnyOf([ 1, 2, 3 ])([ 4 ]);
      }, 'Expected [\n  1,\n  2,\n  3\n] to contain any of [\n  4\n].');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(containingAnyOf.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(containingAnyOf.negated([ 'foo', 'bar' ]), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual does not contain any of expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          containingAnyOf.negated([ 1, 2, 3 ])([ 4 ]);
        });
      });

      test('throws an error if actual contains any of expected.', async (): Promise<void> => {
        chai.throw((): void => {
          containingAnyOf.negated([ 1, 2, 3 ])([ 5, 1 ]);
        }, 'Expected [\n  1,\n  2,\n  3\n] not to contain any of [\n  5,\n  1\n].');
      });
    });
  });
});
