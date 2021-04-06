import { assert } from '../../lib/assertthat';
import { AssertionFailed } from '../../lib/errors';
import { assertthatForNumber } from '../../lib/assertthatForNumber';
import { formatErrorMessage } from 'lib/formatErrorMessage';

suite('assertthatForNumber', (): void => {
  suite('equalTo', (): void => {
    test('does not throw an error if actual is equal to expected.', async (): Promise<void> => {
      const actual = 5;
      const expected = 5;

      assert.that((): void => {
        assertthatForNumber(actual).is.equalTo(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual is not equal to expected.', async (): Promise<void> => {
      const actual = 5;
      const expected = 8;

      assert.that((): void => {
        assertthatForNumber(actual).is.equalTo(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The numbers are not equal.',
            expected: '8',
            actual: '5'
          })
      );
    });
  });

  suite('falsy', (): void => {
    test('does not throw an error if actual is falsy.', async (): Promise<void> => {
      const actual = 0;

      assert.that((): void => {
        assertthatForNumber(actual).is.falsy();
      }).is.not.throwing();
    });

    test('throws an error if actual is not falsy.', async (): Promise<void> => {
      const actual = 5;

      assert.that((): void => {
        assertthatForNumber(actual).is.falsy();
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The number is not falsy.',
            actual: `${actual}`
          })
      );
    });
  });

  suite('truthy', (): void => {
    test('does not throw an error if actual is truthy.', async (): Promise<void> => {
      const actual = 5;

      assert.that((): void => {
        assertthatForNumber(actual).is.truthy();
      }).is.not.throwing();
    });

    test('throws an error if actual is not truthy.', async (): Promise<void> => {
      const actual = 0;

      assert.that((): void => {
        assertthatForNumber(actual).is.truthy();
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The number is not truthy.',
            actual: `${actual}`
          })
      );
    });
  });

  suite('sameAs', (): void => {
    test('does not throw an error if actual is the same as expected.', async (): Promise<void> => {
      const actual = 5;
      const expected = 5;

      assert.that((): void => {
        assertthatForNumber(actual).is.sameAs(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual is not the same as expected.', async (): Promise<void> => {
      const actual = 5;
      const expected = 8;

      assert.that((): void => {
        assertthatForNumber(actual).is.sameAs(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The numbers are not the same.',
            expected: '8',
            actual: '5'
          })
      );
    });
  });

  suite('sameJsonAs', (): void => {
    test('does not throw an error if actual has the same JSON representation as expected.', async (): Promise<void> => {
      const actual = Number.NaN;
      const expected = Number.POSITIVE_INFINITY;

      assert.that((): void => {
        assertthatForNumber(actual).is.sameJsonAs(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual does not have the same JSON representation as expected.', async (): Promise<void> => {
      const actual = 5;
      const expected = 25;

      assert.that((): void => {
        assertthatForNumber(actual).is.sameJsonAs(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The numbers do not have the same JSON representation.',
            expected: JSON.stringify(expected),
            actual: JSON.stringify(actual)
          })
      );
    });
  });

  suite('greaterThan', (): void => {
    test('does not throw an error if actual is greater than expected.', async (): Promise<void> => {
      const actual = 8;
      const expected = 5;

      assert.that((): void => {
        assertthatForNumber(actual).is.greaterThan(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual is less than expected.', async (): Promise<void> => {
      const actual = 5;
      const expected = 8;

      assert.that((): void => {
        assertthatForNumber(actual).is.greaterThan(expected);
      }).is.throwing(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The number is not greater than the expected value.',
            expected: `${expected}`,
            actual: `${actual}`
          })
      );
    });

    test('throws an error if actual is equal to expected.', async (): Promise<void> => {
      const actual = 8;
      const expected = 8;

      assert.that((): void => {
        assertthatForNumber(actual).is.greaterThan(expected);
      }).is.throwing(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The number is not greater than the expected value.',
            expected: `${expected}`,
            actual: `${actual}`
          })
      );
    });
  });

  suite('lessThan', (): void => {
    test('does not throw an error if actual is less than expected.', async (): Promise<void> => {
      const actual = 5;
      const expected = 8;

      assert.that((): void => {
        assertthatForNumber(actual).is.lessThan(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual is greater than expected.', async (): Promise<void> => {
      const actual = 8;
      const expected = 5;

      assert.that((): void => {
        assertthatForNumber(actual).is.lessThan(expected);
      }).is.throwing(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The number is not less than the expected value.',
            expected: `${expected}`,
            actual: `${actual}`
          })
      );
    });

    test('throws an error if actual is equal to expected.', async (): Promise<void> => {
      const actual = 8;
      const expected = 8;

      assert.that((): void => {
        assertthatForNumber(actual).is.lessThan(expected);
      }).is.throwing(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The number is not less than the expected value.',
            expected: `${expected}`,
            actual: `${actual}`
          })
      );
    });
  });

  suite('atLeast', (): void => {
    test('does not throw an error if actual is greater than expected.', async (): Promise<void> => {
      const actual = 8;
      const expected = 5;

      assert.that((): void => {
        assertthatForNumber(actual).is.atLeast(expected);
      }).is.not.throwing();
    });

    test('does not throw an error if actual is equal to expected.', async (): Promise<void> => {
      const actual = 8;
      const expected = 8;

      assert.that((): void => {
        assertthatForNumber(actual).is.atLeast(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual is less than expected.', async (): Promise<void> => {
      const actual = 5;
      const expected = 8;

      assert.that((): void => {
        assertthatForNumber(actual).is.atLeast(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The number is not at least the expected value.',
            expected: `${expected}`,
            actual: `${actual}`
          })
      );
    });
  });

  suite('atMost', (): void => {
    test('does not throw an error if actual is less than expected.', async (): Promise<void> => {
      const actual = 5;
      const expected = 8;

      assert.that((): void => {
        assertthatForNumber(actual).is.atMost(expected);
      }).is.not.throwing();
    });

    test('does not throw an error if actual is equal to expected.', async (): Promise<void> => {
      const actual = 8;
      const expected = 8;

      assert.that((): void => {
        assertthatForNumber(actual).is.atMost(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual is greater than expected.', async (): Promise<void> => {
      const actual = 8;
      const expected = 5;

      assert.that((): void => {
        assertthatForNumber(actual).is.atMost(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The number is not at most the expected value.',
            expected: `${expected}`,
            actual: `${actual}`
          })
      );
    });
  });

  suite('nan', (): void => {
    test('does not throw an error if actual is NaN.', async (): Promise<void> => {
      const actual = Number.NaN;

      assert.that((): void => {
        assertthatForNumber(actual).is.nan();
      }).is.not.throwing();
    });

    test('throws an error if actual is not NaN.', async (): Promise<void> => {
      const actual = 5;

      assert.that((): void => {
        assertthatForNumber(actual).is.nan();
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The number is not NaN.',
            actual: `${actual}`
          })
      );
    });
  });

  suite('not', (): void => {
    suite('equalTo', (): void => {
      test('does not throw an error if actual is not equal to expected.', async (): Promise<void> => {
        const actual = 5;
        const expected = 8;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.equalTo(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual is equal to expected.', async (): Promise<void> => {
        const actual = 5;
        const expected = 5;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.equalTo(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The numbers are equal.',
              expected: 'To not equal:\n5',
              actual: '5'
            })
        );
      });
    });

    suite('falsy', (): void => {
      test('does not throw an error if actual is not falsy.', async (): Promise<void> => {
        const actual = 5;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.falsy();
        }).is.not.throwing();
      });

      test('throws an error if actual is falsy.', async (): Promise<void> => {
        const actual = 0;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.falsy();
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The number is falsy.',
              actual: `${actual}`
            })
        );
      });
    });

    suite('truthy', (): void => {
      test('does not throw an error if actual is not truthy.', async (): Promise<void> => {
        const actual = 0;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.truthy();
        }).is.not.throwing();
      });

      test('throws an error if actual is truthy.', async (): Promise<void> => {
        const actual = 5;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.truthy();
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The number is truthy.',
              actual: `${actual}`
            })
        );
      });
    });

    suite('sameAs', (): void => {
      test('does not throw an error if actual is not the same as expected.', async (): Promise<void> => {
        const actual = 5;
        const expected = 8;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.sameAs(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual is the same as expected.', async (): Promise<void> => {
        const actual = 5;
        const expected = 5;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.sameAs(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The numbers are the same.',
              expected: 'To not be the same as:\n5',
              actual: '5'
            })
        );
      });
    });

    suite('sameJsonAs', (): void => {
      test('does not throw an error if actual does not have the same JSON representation as expected.', async (): Promise<void> => {
        const actual = 5;
        const expected = 25;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.sameJsonAs(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual has the same JSON representation as expected.', async (): Promise<void> => {
        const actual = Number.NaN;
        const expected = Number.POSITIVE_INFINITY;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.sameJsonAs(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The numbers have the same JSON representation.',
              expected: `To not equal:\n${JSON.stringify(expected)}`,
              actual: JSON.stringify(actual)
            })
        );
      });
    });

    suite('greaterThan', (): void => {
      test('does not throw an error if actual is less than expected.', async (): Promise<void> => {
        const actual = 5;
        const expected = 8;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.greaterThan(expected);
        }).is.not.throwing();
      });

      test('does not throw an error if actual is equal to expected.', async (): Promise<void> => {
        const actual = 8;
        const expected = 8;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.greaterThan(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual is greater than expected.', async (): Promise<void> => {
        const actual = 8;
        const expected = 5;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.greaterThan(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The number is greater than the expected value.',
              expected: `To not be greater than:\n${expected}`,
              actual: `${actual}`
            })
        );
      });
    });

    suite('lessThan', (): void => {
      test('does not throw an error if actual is greater than expected.', async (): Promise<void> => {
        const actual = 8;
        const expected = 5;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.lessThan(expected);
        }).is.not.throwing();
      });

      test('does not throw an error if actual is equal to expected.', async (): Promise<void> => {
        const actual = 8;
        const expected = 8;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.lessThan(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual is less than expected.', async (): Promise<void> => {
        const actual = 5;
        const expected = 8;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.lessThan(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The number is less than the expected value.',
              expected: `To not be less than:\n${expected}`,
              actual: `${actual}`
            })
        );
      });
    });

    suite('atLeast', (): void => {
      test('does not throw an error if actual is less than expected.', async (): Promise<void> => {
        const actual = 5;
        const expected = 8;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.atLeast(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual is greater than expected.', async (): Promise<void> => {
        const actual = 8;
        const expected = 5;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.atLeast(expected);
        }).is.throwing(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The number is at least the expected value.',
              expected: `To not be at least:\n${expected}`,
              actual: `${actual}`
            })
        );
      });

      test('throws an error if actual is equal to expected.', async (): Promise<void> => {
        const actual = 8;
        const expected = 8;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.atLeast(expected);
        }).is.throwing(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The number is at least the expected value.',
              expected: `To not be at least:\n${expected}`,
              actual: `${actual}`
            })
        );
      });
    });

    suite('atMost', (): void => {
      test('does not throw an error if actual is greater than expected.', async (): Promise<void> => {
        const actual = 8;
        const expected = 5;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.atMost(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual is less than expected.', async (): Promise<void> => {
        const actual = 5;
        const expected = 8;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.atMost(expected);
        }).is.throwing(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The number is at most the expected value.',
              expected: `To not be at most:\n${expected}`,
              actual: `${actual}`
            })
        );
      });

      test('throws an error if actual is equal to expected.', async (): Promise<void> => {
        const actual = 8;
        const expected = 8;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.atMost(expected);
        }).is.throwing(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The number is at most the expected value.',
              expected: `To not be at most:\n${expected}`,
              actual: `${actual}`
            })
        );
      });
    });

    suite('isNan', (): void => {
      test('does not throw an error if actual is not NaN.', async (): Promise<void> => {
        const actual = 5;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.nan();
        }).is.not.throwing();
      });

      test('throws an error if actual is NaN.', async (): Promise<void> => {
        const actual = Number.NaN;

        assert.that((): void => {
          assertthatForNumber(actual).is.not.nan();
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The number is NaN.',
              actual: `${actual}`
            })
        );
      });
    });
  });
});
