import chaiStatic from 'chai';
import containingAllOf from '../../../lib/constraints/containingAllOf';

const chai = chaiStatic.assert;

suite('containingAll', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(containingAllOf, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(containingAllOf([ 'foo', 'bar' ]), 'function');
  });

  suite('constraint', (): void => {
    test('does not throw an error if actual contains all of expected.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        containingAllOf([ 1, 2, 3 ])([ 1, 2, 3 ]);
        containingAllOf([ 1, 2, 3 ])([ 1 ]);
        containingAllOf([ 1, 2, 3 ])([ 3, 2 ]);
        containingAllOf([ 1, 2, 3 ])([ ]);
      });
    });

    test('throws an error if actual does not contain all of expected.', async (): Promise<void> => {
      chai.throw((): void => {
        containingAllOf([ 1, 2, 3 ])([ 2, 5 ]);
      }, 'Expected [\n  1,\n  2,\n  3\n] to contain all of [\n  2,\n  5\n].');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(containingAllOf.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(containingAllOf.negated([ 'foo', 'bar' ]), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual does not contain all of expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          containingAllOf.negated([ 1, 2, 3 ])([ 5 ]);
          containingAllOf.negated([ 1, 2, 3 ])([ 1, 5 ]);
          containingAllOf.negated([ 1, 2, 3 ])([ 1, 2, 3, 5 ]);
        });
      });

      test('throws an error if actual contains all of expected.', async (): Promise<void> => {
        chai.throw((): void => {
          containingAllOf.negated([ 1, 2, 3 ])([ 1, 3 ]);
        }, 'Expected [\n  1,\n  2,\n  3\n] not to contain all of [\n  1,\n  3\n].');
      });
    });
  });
});
