import { assert } from '../../lib/assertthat';
import { AssertionFailed } from '../../lib/errors';
import { assertthatForArray } from '../../lib/assertthatForArray';
import { formatErrorMessage } from '../../lib/formatErrorMessage';
import { prettyPrintArray } from '../../lib/prettyPrint/prettyPrintArray';

suite('assertthatForArray', (): void => {
  suite('equalTo', (): void => {
    test('does not throw an error if actual and expected are equal in value.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];
      const expected = [ 5, 7, 'foo' ];

      assert.that((): void => {
        assertthatForArray(actual).is.equalTo(expected);
      }).is.not.throwing();
    });

    test('does not throw an error if actual and expected are deeply equal in value.', async (): Promise<void> => {
      const actual = [ 5, 7, [ true, false ]];
      const expected = [ 5, 7, [ true, false ]];

      assert.that((): void => {
        assertthatForArray(actual).is.equalTo(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual and expected are unequal in value.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];
      const expected = [ 2, 8 ];

      assert.that((): void => {
        assertthatForArray(actual).is.equalTo(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The arrays are not equal.',
            expected: prettyPrintArray(actual),
            actual: prettyPrintArray(expected)
          })
      );
    });
  });

  suite('sameAs', (): void => {
    test('does not throw an error if actual and expected are the same identity.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];
      const expected = actual;

      assert.that((): void => {
        assertthatForArray(actual).is.sameAs(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual and expected are not the same identity, even if they are equal in value.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];
      const expected = [ 5, 7, 'foo' ];

      assert.that((): void => {
        assertthatForArray(actual).is.sameAs(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The arrays are not the same.'
          })
      );
    });
  });

  suite('sameJsonAs', (): void => {
    test('does not throw an error if actual has the same JSON representation as expected.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];
      const expected = [ 5, 7, 'foo' ];

      assert.that((): void => {
        assertthatForArray(actual).is.sameJsonAs(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual does not have the same JSON representation as expected.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];
      const expected = [ 2, 8 ];

      assert.that((): void => {
        assertthatForArray(actual).is.sameJsonAs(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The arrays do not have the same JSON representation.',
            expected: JSON.stringify(expected),
            actual: JSON.stringify(actual)
          })
      );
    });
  });

  suite('containing', (): void => {
    test('does not throw an error if actual contains expected.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];
      const expected = 7;

      assert.that((): void => {
        assertthatForArray(actual).is.containing(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual does not contain expected.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];
      const expected = 19;

      assert.that((): void => {
        assertthatForArray(actual).is.containing(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The array is not containing the expected value.',
            expected: `To contain:\n${expected}`,
            actual: prettyPrintArray(actual)
          })
      );
    });
  });

  suite('containingAnyOf', (): void => {
    test('does not throw an error if actual contains any of the values in expected.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];
      const expected = [ 12, 5, 38 ];

      assert.that((): void => {
        assertthatForArray(actual).is.containingAnyOf(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual does not contain any of the values in expected.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];
      const expected = [ 2, 8 ];

      assert.that((): void => {
        assertthatForArray(actual).is.containingAnyOf(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The array is not containing any of the expected values.',
            expected: `To contain any of these values:\n${expected.map((value): string => JSON.stringify(value)).join('\n')}`,
            actual: prettyPrintArray(actual)
          })
      );
    });

    test('throws an error if expected is empty.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];
      const expected: any[] = [];

      assert.that((): void => {
        assertthatForArray(actual).is.containingAnyOf(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The array is not containing any of the expected values.',
            expected: 'To contain any of these values:\n',
            actual: prettyPrintArray(actual)
          })
      );
    });
  });

  suite('containingAllOf', (): void => {
    test('does not throw an error if actual contains all of the values in expected.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];
      const expected = [ 5, 7 ];

      assert.that((): void => {
        assertthatForArray(actual).is.containingAllOf(expected);
      }).is.not.throwing();
    });

    test('does not throw an error if expected is empty.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];
      const expected = [];

      assert.that((): void => {
        assertthatForArray(actual).is.containingAllOf(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual does not contain all of the values in expected.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];
      const expected = [ 5, 7, 'foo', 2, 8 ];

      assert.that((): void => {
        assertthatForArray(actual).is.containingAllOf(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The array is not containing all of the expected values.',
            expected: `To contain all of these values:\n${expected.map((value): string => JSON.stringify(value)).join('\n')}`,
            actual: prettyPrintArray(actual),
            diff: `These values are missing:\n2\n8`
          })
      );
    });
  });

  suite('atLeast', (): void => {
    test('does not throw an error if actual is a superset of expected.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];
      const expected = [ 5 ];

      assert.that((): void => {
        assertthatForArray(actual).is.atLeast(expected);
      }).is.not.throwing();
    });

    test('throws an error if expected is not a superset of expected.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];
      const expected = [ 5, 7, 14, 18 ];

      assert.that((): void => {
        assertthatForArray(actual).is.atLeast(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The array is not at least the expected array.',
            expected: `To be a superset of:\n${prettyPrintArray(expected)}`,
            actual: prettyPrintArray(actual)
          })
      );
    });
  });

  suite('atMost', (): void => {
    test('does not throw an error if actual is a subset of expected.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];
      const expected = [ 5, 7, 'foo', 'bar', 23 ];

      assert.that((): void => {
        assertthatForArray(actual).is.atMost(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual is not a subset of expected.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo', 58 ];
      const expected = [ 5, 7, 'foo' ];

      assert.that((): void => {
        assertthatForArray(actual).is.atMost(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The array is not at most the expected array.',
            expected: `To be a subset of:\n${prettyPrintArray(expected)}`,
            actual: prettyPrintArray(actual)
          })
      );
    });
  });

  suite('empty', (): void => {
    test('does not throw an error if actual is empty.', async (): Promise<void> => {
      const actual: any[] = [];

      assert.that((): void => {
        assertthatForArray(actual).is.empty();
      }).is.not.throwing();
    });

    test('throws an error if actual is not empty.', async (): Promise<void> => {
      const actual = [ 5, 7, 'foo' ];

      assert.that((): void => {
        assertthatForArray(actual).is.empty();
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The array is not empty.',
            actual: prettyPrintArray(actual)
          })
      );
    });
  });

  suite('not', (): void => {
    suite('equalTo', (): void => {
      test('does not throw an error if actual and expected are not equal in value.', async (): Promise<void> => {
        const actual = [ 5, 7, 'foo' ];
        const expected = [ 2, 8 ];

        assert.that((): void => {
          assertthatForArray(actual).is.not.equalTo(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual and expected are equal in value.', async (): Promise<void> => {
        const actual = [ 5, 7, 'foo' ];
        const expected = [ 5, 7, 'foo' ];

        assert.that((): void => {
          assertthatForArray(actual).is.not.equalTo(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The arrays are equal.',
              expected: `To not equal:\n${prettyPrintArray(actual)}`,
              actual: prettyPrintArray(expected)
            })
        );
      });

      test('throws an error if actual and expected are deeply equal in value.', async (): Promise<void> => {
        const actual = [ 5, 7, [ true, false ]];
        const expected = [ 5, 7, [ true, false ]];

        assert.that((): void => {
          assertthatForArray(actual).is.not.equalTo(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The arrays are equal.',
              expected: `To not equal:\n${prettyPrintArray(actual)}`,
              actual: prettyPrintArray(expected)
            })
        );
      });
    });

    suite('sameAs', (): void => {
      test('does not throw an error if actual and expected are not the same identity.', async (): Promise<void> => {
        const actual: any[] = [];
        const expected: any[] = [];

        assert.that((): void => {
          assertthatForArray(actual).is.not.sameAs(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual and expected are the same identity.', async (): Promise<void> => {
        const actual = [ 5, 7, 'foo' ];
        const expected = actual;

        assert.that((): void => {
          assertthatForArray(actual).is.not.sameAs(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The arrays are the same.'
            })
        );
      });
    });

    suite('sameJsonAs', (): void => {
      test('does not throw an error if actual does not have the same JSON representation as expected.', async (): Promise<void> => {
        const actual = [ 5, 7, 'foo' ];
        const expected = [ 2, 8 ];

        assert.that((): void => {
          assertthatForArray(actual).is.not.sameJsonAs(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual has the same JSON representation as expected.', async (): Promise<void> => {
        const actual = [ 5, 7, 'foo' ];
        const expected = [ 5, 7, 'foo' ];

        assert.that((): void => {
          assertthatForArray(actual).is.not.sameJsonAs(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The arrays have the same JSON representation.',
              expected: `To not equal:\n${JSON.stringify(expected)}`,
              actual: JSON.stringify(actual)
            })
        );
      });
    });

    suite('containing', (): void => {
      test('does not throw an error if actual does not contain expected.', async (): Promise<void> => {
        const actual = [ 5, 7, 'foo' ];
        const expected = 19;

        assert.that((): void => {
          assertthatForArray(actual).is.not.containing(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual contains expected.', async (): Promise<void> => {
        const actual = [ 5, 7, 'foo' ];
        const expected = 7;

        assert.that((): void => {
          assertthatForArray(actual).is.not.containing(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The array is containing the expected value.',
              expected: `To not contain:\n${expected}`,
              actual: prettyPrintArray(actual)
            })
        );
      });
    });

    suite('containingAnyOf', (): void => {
      test('does not throw an error if actual does not contain any of the values in expected.', async (): Promise<void> => {
        const actual = [ 5, 7, 'foo' ];
        const expected = [ 2, 8 ];

        assert.that((): void => {
          assertthatForArray(actual).is.not.containingAnyOf(expected);
        }).is.not.throwing();
      });

      test('does not throw an error if expected is empty.', async (): Promise<void> => {
        const actual = [ 5, 7, 'foo' ];
        const expected: any[] = [];

        assert.that((): void => {
          assertthatForArray(actual).is.not.containingAnyOf(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual does not contain any of the values in expected.', async (): Promise<void> => {
        const actual = [ 5, 7, 'foo' ];
        const expected = [ 12, 5, 38 ];

        assert.that((): void => {
          assertthatForArray(actual).is.not.containingAnyOf(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The array is containing any of the expected values.',
              expected: `To not contain any of these values:\n${expected.map((value): string => JSON.stringify(value)).join('\n')}`,
              actual: prettyPrintArray(actual),
              diff: `These values are contained:\n5`
            })
        );
      });
    });

    suite('containingAllOf', (): void => {
      test('does not throw an error if actual does not contain all of the values in expected.', async (): Promise<void> => {
        const actual = [ 5, 7, 'foo' ];
        const expected = [ 5, 7, 'foo', 2, 8 ];

        assert.that((): void => {
          assertthatForArray(actual).is.not.containingAllOf(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual contains all of the values in expected.', async (): Promise<void> => {
        const actual = [ 5, 7, 'foo' ];
        const expected = [ 5, 7 ];

        assert.that((): void => {
          assertthatForArray(actual).is.not.containingAllOf(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The array is containing all of the expected values.',
              expected: `To not contain all of these values:\n${expected.map((value): string => JSON.stringify(value)).join('\n')}`,
              actual: prettyPrintArray(actual)
            })
        );
      });

      test('throws an error if expected is empty.', async (): Promise<void> => {
        const actual = [ 5, 7, 'foo' ];
        const expected: any[] = [];

        assert.that((): void => {
          assertthatForArray(actual).is.not.containingAllOf(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The array is containing all of the expected values.',
              expected: 'To not contain all of these values:\n',
              actual: prettyPrintArray(actual)
            })
        );
      });
    });

    suite('atLeast', (): void => {
      test('does not throw an error if actual is not a superset of expected.', async (): Promise<void> => {
        const actual = [ 5, 7, 'foo' ];
        const expected = [ 5, 7, 14, 18 ];

        assert.that((): void => {
          assertthatForArray(actual).is.not.atLeast(expected);
        }).is.not.throwing();
      });

      test('throws an error if expected is a superset of expected.', async (): Promise<void> => {
        const actual = [ 5, 7, 'foo' ];
        const expected = [ 5 ];

        assert.that((): void => {
          assertthatForArray(actual).is.not.atLeast(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The array is at least the expected array.',
              expected: `To not be a superset of:\n${prettyPrintArray(expected)}`,
              actual: prettyPrintArray(actual)
            })
        );
      });
    });

    suite('atMost', (): void => {
      test('does not throw an error if actual is not a subset of expected.', async (): Promise<void> => {
        const actual = [ 5, 7, 'foo' ];
        const expected = [ 5, 7, 'foo' ];

        assert.that((): void => {
          assertthatForArray(actual).is.not.atMost(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual is a subset of expected.', async (): Promise<void> => {
        const actual = [ 5, 7, 'foo', 58 ];
        const expected = [ 5, 7, 'foo', 'bar', 23 ];

        assert.that((): void => {
          assertthatForArray(actual).is.not.atMost(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The array is at most the expected array.',
              expected: `To not be a subset of:\n${prettyPrintArray(expected)}`,
              actual: prettyPrintArray(actual)
            })
        );
      });
    });

    suite('empty', (): void => {
      test('does not throw an error if actual is not empty.', async (): Promise<void> => {
        const actual = [ 5 ];

        assert.that((): void => {
          assertthatForArray(actual).is.not.empty();
        }).is.not.throwing();
      });

      test('throws an error if actual is empty.', async (): Promise<void> => {
        const actual: any[] = [];

        assert.that((): void => {
          assertthatForArray(actual).is.not.empty();
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The array is empty.'
            })
        );
      });
    });
  });
});
