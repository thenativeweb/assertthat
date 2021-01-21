import { assert } from '../../lib/assertthat';
import chaiStatic from 'chai';

const chai = chaiStatic.assert;

suite('assert', (): void => {
  test('is an object.', async (): Promise<void> => {
    chai.typeOf(assert, 'object');
  });

  suite('that', (): void => {
    test('does not throw an error if actual is undefined.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        // eslint-disable-next-line unicorn/no-useless-undefined
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
        const actual: any = 23;

        test('atLeast.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.atLeast, 'function');
        });

        test('atMost.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.atMost, 'function');
        });

        test('between.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.between, 'function');
        });

        test('containing.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.containing, 'function');
        });

        test('containingAnyOf.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.containingAnyOf, 'function');
        });

        test('containingAll.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.containingAllOf, 'function');
        });

        test('endingWith.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.endingWith, 'function');
        });

        test('equalTo.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.equalTo, 'function');
        });

        test('false.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.false, 'function');
        });

        test('falsy.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.falsy, 'function');
        });

        test('greaterThan.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.greaterThan, 'function');
        });

        test('instanceOf.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.instanceOf, 'function');
        });

        test('lessThan.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.lessThan, 'function');
        });

        test('matching.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.matching, 'function');
        });

        test('NaN.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.NaN, 'function');
        });

        test('null.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.null, 'function');
        });

        test('ofType.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.ofType, 'function');
        });

        test('sameAs.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.sameAs, 'function');
        });

        test('sameJsonAs.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.sameJsonAs, 'function');
        });

        test('startingWith.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.startingWith, 'function');
        });

        test('throwing.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.throwing, 'function');
        });

        test('true.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.true, 'function');
        });

        test('undefined.', async (): Promise<void> => {
          chai.typeOf(assert.that(actual).is.undefined, 'function');
        });
      });

      suite('not', (): void => {
        test('is an object.', async (): Promise<void> => {
          chai.typeOf(assert.that(23).is.not, 'object');
        });

        suite('has constraints', (): void => {
          const actual: any = 23;

          test('atLeast.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.atLeast, 'function');
          });

          test('atMost.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.atMost, 'function');
          });

          test('between.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.between, 'function');
          });

          test('containing.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.containing, 'function');
          });

          test('containingAnyOf.', async (): Promise<void> => {
            chai.typeOf(assert.that([ 1, 2, 3 ]).is.not.containingAnyOf, 'function');
          });

          test('containingAll.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.containingAllOf, 'function');
          });

          test('endingWith.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.endingWith, 'function');
          });

          test('equalTo.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.equalTo, 'function');
          });

          test('false.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.false, 'function');
          });

          test('falsy.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.falsy, 'function');
          });

          test('greaterThan.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.greaterThan, 'function');
          });

          test('instanceOf.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.instanceOf, 'function');
          });

          test('lessThan.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.lessThan, 'function');
          });

          test('matching.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.matching, 'function');
          });

          test('NaN.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.NaN, 'function');
          });

          test('null.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.null, 'function');
          });

          test('ofType.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.ofType, 'function');
          });

          test('sameAs.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.sameAs, 'function');
          });

          test('sameJsonAs.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.sameJsonAs, 'function');
          });

          test('startingWith.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.startingWith, 'function');
          });

          test('throwing.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.throwing, 'function');
          });

          test('true.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.true, 'function');
          });

          test('undefined.', async (): Promise<void> => {
            chai.typeOf(assert.that(actual).is.not.undefined, 'function');
          });
        });
      });
    });
  });
});
