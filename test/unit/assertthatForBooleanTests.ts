import { assert } from '../../lib/assertthat';
import { AssertionFailed } from '../../lib/errors';
import { assertthatForBoolean } from '../../lib/assertthatForBoolean';
import { formatErrorMessage } from '../../lib/formatErrorMessage';

suite('assertthatForBoolean', (): void => {
  suite('equalTo', (): void => {
    test('does not throw an error if actual is equal to expected.', async (): Promise<void> => {
      const actual = true;
      const expected = true;

      assert.that((): void => {
        assertthatForBoolean(actual).is.equalTo(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual is not equal to expected.', async (): Promise<void> => {
      const actual = true;
      const expected = false;

      assert.that((): void => {
        assertthatForBoolean(actual).is.equalTo(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The booleans are not equal.',
            expected: `${expected}`,
            actual: `${actual}`
          })
      );
    });
  });

  suite('falsy', (): void => {
    test('does not throw an error if actual is falsy.', async (): Promise<void> => {
      const actual = false;

      assert.that((): void => {
        assertthatForBoolean(actual).is.falsy();
      }).is.not.throwing();
    });

    test('throws an error if actual is not falsy.', async (): Promise<void> => {
      const actual = true;

      assert.that((): void => {
        assertthatForBoolean(actual).is.falsy();
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The boolean is not falsy.',
            actual: `${actual}`
          })
      );
    });
  });

  suite('truthy', (): void => {
    test('does not throw an error if actual is truthy.', async (): Promise<void> => {
      const actual = true;

      assert.that((): void => {
        assertthatForBoolean(actual).is.truthy();
      }).is.not.throwing();
    });

    test('throws an error if actual is not truthy.', async (): Promise<void> => {
      const actual = false;

      assert.that((): void => {
        assertthatForBoolean(actual).is.truthy();
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The boolean is not truthy.',
            actual: `${actual}`
          })
      );
    });
  });

  suite('sameAs', (): void => {
    test('does not throw an error if actual is the same as expected.', async (): Promise<void> => {
      const actual = true;
      const expected = true;

      assert.that((): void => {
        assertthatForBoolean(actual).is.sameAs(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual is not the same as expected.', async (): Promise<void> => {
      const actual = true;
      const expected = false;

      assert.that((): void => {
        assertthatForBoolean(actual).is.sameAs(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The booleans are not the same.',
            expected: `${expected}`,
            actual: `${actual}`
          })
      );
    });
  });

  suite('sameJsonAs', (): void => {
    test('does not throw an error if actual has the same JSON representation as expected.', async (): Promise<void> => {
      const actual = true;
      const expected = true;

      assert.that((): void => {
        assertthatForBoolean(actual).is.sameJsonAs(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual does not have the same JSON representation as expected.', async (): Promise<void> => {
      const actual = true;
      const expected = false;

      assert.that((): void => {
        assertthatForBoolean(actual).is.sameJsonAs(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The booleans do not have the same JSON representation.',
            expected: JSON.stringify(expected),
            actual: JSON.stringify(actual)
          })
      );
    });
  });

  suite('true', (): void => {
    test('does not throw an error if actual is true.', async (): Promise<void> => {
      const actual = true;

      assert.that((): void => {
        assertthatForBoolean(actual).is.true();
      }).is.not.throwing();
    });

    test('throws an error if actual is not true.', async (): Promise<void> => {
      const actual = false;

      assert.that((): void => {
        assertthatForBoolean(actual).is.true();
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The boolean is not true.',
            actual: `${actual}`
          })
      );
    });
  });

  suite('false', (): void => {
    test('does not throw an error if actual is false.', async (): Promise<void> => {
      const actual = false;

      assert.that((): void => {
        assertthatForBoolean(actual).is.false();
      }).is.not.throwing();
    });

    test('throws an error if actual is not false.', async (): Promise<void> => {
      const actual = true;

      assert.that((): void => {
        assertthatForBoolean(actual).is.false();
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The boolean is not false.',
            actual: `${actual}`
          })
      );
    });
  });

  suite('not', (): void => {
    suite('equalTo', (): void => {
      test('does not throw an error if actual is not equal to expected.', async (): Promise<void> => {
        const actual = true;
        const expected = false;

        assert.that((): void => {
          assertthatForBoolean(actual).is.not.equalTo(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual is equal to expected.', async (): Promise<void> => {
        const actual = true;
        const expected = true;

        assert.that((): void => {
          assertthatForBoolean(actual).is.not.equalTo(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The booleans are equal.',
              expected: `To not equal:\n${expected}`,
              actual: `${actual}`
            })
        );
      });
    });

    suite('falsy', (): void => {
      test('does not throw an error if actual is not falsy.', async (): Promise<void> => {
        const actual = true;

        assert.that((): void => {
          assertthatForBoolean(actual).is.not.falsy();
        }).is.not.throwing();
      });

      test('throws an error if actual is falsy.', async (): Promise<void> => {
        const actual = false;

        assert.that((): void => {
          assertthatForBoolean(actual).is.not.falsy();
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The boolean is falsy.',
              actual: `${actual}`
            })
        );
      });
    });

    suite('truthy', (): void => {
      test('does not throw an error if actual is not truthy.', async (): Promise<void> => {
        const actual = false;

        assert.that((): void => {
          assertthatForBoolean(actual).is.not.truthy();
        }).is.not.throwing();
      });

      test('throws an error if actual is truthy.', async (): Promise<void> => {
        const actual = true;

        assert.that((): void => {
          assertthatForBoolean(actual).is.not.truthy();
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The boolean is truthy.',
              actual: `${actual}`
            })
        );
      });
    });

    suite('sameAs', (): void => {
      test('does not throw an error if actual is not the same as expected.', async (): Promise<void> => {
        const actual = true;
        const expected = false;

        assert.that((): void => {
          assertthatForBoolean(actual).is.not.sameAs(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual is the same as expected.', async (): Promise<void> => {
        const actual = true;
        const expected = true;

        assert.that((): void => {
          assertthatForBoolean(actual).is.not.sameAs(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The booleans are the same.',
              expected: `To not be the same as:\n${expected}`,
              actual: `${actual}`
            })
        );
      });
    });

    suite('sameJsonAs', (): void => {
      test('does not throw an error if actual does not have the same JSON representation as expected.', async (): Promise<void> => {
        const actual = true;
        const expected = false;

        assert.that((): void => {
          assertthatForBoolean(actual).is.not.sameJsonAs(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual has the same JSON representation as expected.', async (): Promise<void> => {
        const actual = true;
        const expected = true;

        assert.that((): void => {
          assertthatForBoolean(actual).is.not.sameJsonAs(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The booleans have the same JSON representation.',
              expected: `To not equal:\n${JSON.stringify(expected)}`,
              actual: JSON.stringify(actual)
            })
        );
      });
    });

    suite('true', (): void => {
      test('does not throw an error if actual is not true.', async (): Promise<void> => {
        const actual = false;

        assert.that((): void => {
          assertthatForBoolean(actual).is.not.true();
        }).is.not.throwing();
      });

      test('throws an error if actual is true.', async (): Promise<void> => {
        const actual = true;

        assert.that((): void => {
          assertthatForBoolean(actual).is.not.true();
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The boolean is true.',
              actual: `${actual}`
            })
        );
      });
    });

    suite('false', (): void => {
      test('does not throw an error if actual is not false.', async (): Promise<void> => {
        const actual = true;

        assert.that((): void => {
          assertthatForBoolean(actual).is.not.false();
        }).is.not.throwing();
      });

      test('throws an error if actual is false.', async (): Promise<void> => {
        const actual = false;

        assert.that((): void => {
          assertthatForBoolean(actual).is.not.false();
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The boolean is false.',
              actual: `${actual}`
            })
        );
      });
    });
  });
});
