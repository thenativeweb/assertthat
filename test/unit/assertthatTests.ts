import { assert } from '../../lib/assertThat';
import chaiStatic from 'chai';

const chai = chaiStatic.assert;

suite('assert', (): void => {
  test('is an object.', async (): Promise<void> => {
    chai.typeOf(assert, 'object');
  });

  suite('that', (): void => {
    test('does not throw an error if actual is undefined.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        assert.that(undefined);
      });
    });

    test('returns an object.', async (): Promise<void> => {
      chai.typeOf(assert.that(23), 'object');
    });

    suite('is', (): void => {
      test('is an object.', async (): Promise<void> => {
        chai.typeOf(assert.that(23).is, 'object');
      });

      suite('has constraints', (): void => {
        test('atLeast.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.atLeast, 'function');
        });

        test('atMost.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.atMost, 'function');
        });

        test('between.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.between, 'function');
        });

        test('containing.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.containing, 'function');
        });

        test('containingAnyOf.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.containingAnyOf, 'function');
        });

        test('containingAll.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.containingAllOf, 'function');
        });

        test('endingWith.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.endingWith, 'function');
        });

        test('equalTo.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.equalTo, 'function');
        });

        test('false.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.false, 'function');
        });

        test('falsy.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.falsy, 'function');
        });

        test('greaterThan.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.greaterThan, 'function');
        });

        test('instanceOf.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.instanceOf, 'function');
        });

        test('lessThan.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.lessThan, 'function');
        });

        test('matching.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.matching, 'function');
        });

        test('NaN.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.NaN, 'function');
        });

        test('null.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.null, 'function');
        });

        test('ofType.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.ofType, 'function');
        });

        test('sameAs.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.sameAs, 'function');
        });

        test('sameJsonAs.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.sameJsonAs, 'function');
        });

        test('startingWith.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.startingWith, 'function');
        });

        test('throwing.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.throwing, 'function');
        });

        test('true.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.true, 'function');
        });

        test('undefined.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.undefined, 'function');
        });
      });

      suite('not', (): void => {
        test('is an object.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.not, 'object');
        });

        suite('has constraints', (): void => {
          test('atLeast.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.atLeast, 'function');
          });

          test('atMost.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.atMost, 'function');
          });

          test('between.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.between, 'function');
          });

          test('containing.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.containing, 'function');
          });

          test('containingAnyOf.', async (): Promise<void> => {
            chai.typeOf(assert.that([ 1, 2, 3 ]).is.not.containingAnyOf, 'function');
          });

          test('containingAll.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.containingAllOf, 'function');
          });

          test('endingWith.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.endingWith, 'function');
          });

          test('equalTo.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.equalTo, 'function');
          });

          test('false.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.false, 'function');
          });

          test('falsy.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.falsy, 'function');
          });

          test('greaterThan.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.greaterThan, 'function');
          });

          test('instanceOf.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.instanceOf, 'function');
          });

          test('lessThan.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.lessThan, 'function');
          });

          test('matching.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.matching, 'function');
          });

          test('NaN.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.NaN, 'function');
          });

          test('null.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.null, 'function');
          });

          test('ofType.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.ofType, 'function');
          });

          test('sameAs.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.sameAs, 'function');
          });

          test('sameJsonAs.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.sameJsonAs, 'function');
          });

          test('startingWith.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.startingWith, 'function');
          });

          test('throwing.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.throwing, 'function');
          });

          test('true.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.true, 'function');
          });

          test('undefined.', async (): Promise<void> => {
            chai.typeOf(assert.that(23).is.not.undefined, 'function');
          });
        });
      });
    });
  });
});
