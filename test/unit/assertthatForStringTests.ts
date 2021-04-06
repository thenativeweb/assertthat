import { assert } from '../../lib/assertthat';
import { AssertionFailed } from '../../lib/errors';
import { assertthatForString } from '../../lib/assertthatForString';
import { formatErrorMessage } from '../../lib/formatErrorMessage';

suite('assertthatForString', (): void => {
  suite('equalTo', (): void => {
    test('does not throw an error if actual is equal to expected.', async (): Promise<void> => {
      const actual = 'foo';
      const expected = 'foo';

      assert.that((): void => {
        assertthatForString(actual).is.equalTo(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual is not equal to expected.', async (): Promise<void> => {
      const actual = 'foo';
      const expected = 'bar';

      assert.that((): void => {
        assertthatForString(actual).is.equalTo(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The strings are not equal.',
            expected,
            actual
          })
      );
    });
  });

  suite('falsy', (): void => {
    test('does not throw an error if actual is falsy.', async (): Promise<void> => {
      const actual = '';

      assert.that((): void => {
        assertthatForString(actual).is.falsy();
      }).is.not.throwing();
    });

    test('throws an error if actual is not falsy.', async (): Promise<void> => {
      const actual = 'foo';

      assert.that((): void => {
        assertthatForString(actual).is.falsy();
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The string is not falsy.',
            actual
          })
      );
    });
  });

  suite('truthy', (): void => {
    test('does not throw an error if actual is truthy.', async (): Promise<void> => {
      const actual = 'foo';

      assert.that((): void => {
        assertthatForString(actual).is.truthy();
      }).is.not.throwing();
    });

    test('throws an error if actual is not truthy.', async (): Promise<void> => {
      const actual = '';

      assert.that((): void => {
        assertthatForString(actual).is.truthy();
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The string is not truthy.',
            actual
          })
      );
    });
  });

  suite('sameAs', (): void => {
    test('does not throw an error if actual is the same as expected.', async (): Promise<void> => {
      const actual = 'foo';
      const expected = 'foo';

      assert.that((): void => {
        assertthatForString(actual).is.sameAs(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual is not the same as expected.', async (): Promise<void> => {
      const actual = 'foo';
      const expected = 'bar';

      assert.that((): void => {
        assertthatForString(actual).is.sameAs(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The strings are not the same.',
            expected,
            actual
          })
      );
    });
  });

  suite('sameJsonAs', (): void => {
    test('does not throw an error if actual has the same JSON representation as expected.', async (): Promise<void> => {
      const actual = 'foo';
      const expected = 'foo';

      assert.that((): void => {
        assertthatForString(actual).is.sameJsonAs(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual does not have the same JSON representation as expected.', async (): Promise<void> => {
      const actual = 'foo';
      const expected = 'bar';

      assert.that((): void => {
        assertthatForString(actual).is.sameJsonAs(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The strings do not have the same JSON representation.',
            expected: JSON.stringify(expected),
            actual: JSON.stringify(actual)
          })
      );
    });
  });

  suite('containing', (): void => {
    test('does not throw an error if actual contains expected.', async (): Promise<void> => {
      const actual = 'foobarfoo';
      const expected = 'bar';

      assert.that((): void => {
        assertthatForString(actual).is.containing(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual does not contain expected.', async (): Promise<void> => {
      const actual = 'foo';
      const expected = 'bar';

      assert.that((): void => {
        assertthatForString(actual).is.containing(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The string is not containing the expected sub-string.',
            expected: `To contain the sub-string:\n${expected}`,
            actual
          })
      );
    });
  });

  suite('startingWith', (): void => {
    test('does not throw an error if actual starts with expected.', async (): Promise<void> => {
      const actual = 'foobar';
      const expected = 'foo';

      assert.that((): void => {
        assertthatForString(actual).is.startingWith(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual does not start with expected.', async (): Promise<void> => {
      const actual = 'foobar';
      const expected = 'bar';

      assert.that((): void => {
        assertthatForString(actual).is.startingWith(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The string is not starting with the expected sub-string.',
            expected: `To start with the sub-string:\n${expected}`,
            actual
          })
      );
    });
  });

  suite('endingWith', (): void => {
    test('does not throw an error if actual ends with expected.', async (): Promise<void> => {
      const actual = 'foobar';
      const expected = 'bar';

      assert.that((): void => {
        assertthatForString(actual).is.endingWith(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual does not end with expected.', async (): Promise<void> => {
      const actual = 'foobar';
      const expected = 'foo';

      assert.that((): void => {
        assertthatForString(actual).is.endingWith(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The string is not ending with the expected sub-string.',
            expected: `To end with the sub-string:\n${expected}`,
            actual
          })
      );
    });
  });

  suite('containingAnyOf', (): void => {
    test('does not throw an error if actual contains any of the values in expected.', async (): Promise<void> => {
      const actual = 'foo bar baz bam bas bat';
      const expected = [ 'uiae', 'nrtd', 'foo' ];

      assert.that((): void => {
        assertthatForString(actual).is.containingAnyOf(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual does not contain any of the values in expected.', async (): Promise<void> => {
      const actual = 'foo bar baz bam bas bat';
      const expected = [ 'uiae', 'nrtd', 'asdf', 'hjkl' ];

      assert.that((): void => {
        assertthatForString(actual).is.containingAnyOf(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The string is not containing any of the expected sub-strings.',
            expected: `To contain any of these sub-strings:\n${expected.join('\n')}`,
            actual
          })
      );
    });

    test('throws an error if expected is empty.', async (): Promise<void> => {
      const actual = 'foo bar baz bam bas bat';
      const expected: string[] = [];

      assert.that((): void => {
        assertthatForString(actual).is.containingAnyOf(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The string is not containing any of the expected sub-strings.',
            expected: `To contain any of these sub-strings:\n`,
            actual
          })
      );
    });
  });

  suite('containingAllOf', (): void => {
    test('does not throw an error if actual contains all of the values in expected.', async (): Promise<void> => {
      const actual = 'foo bar baz bam bas bat';
      const expected = [ 'foo', 'bam', 'bas bat' ];

      assert.that((): void => {
        assertthatForString(actual).is.containingAllOf(expected);
      }).is.not.throwing();
    });

    test('does not throw an error if expected is empty.', async (): Promise<void> => {
      const actual = 'foo bar baz bam bas bat';
      const expected: string[] = [];

      assert.that((): void => {
        assertthatForString(actual).is.containingAllOf(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual does not contain all of the values in expected.', async (): Promise<void> => {
      const actual = 'foo bar baz bam bas bat';
      const expected = [ 'foo', 'bam', 'uiae' ];

      assert.that((): void => {
        assertthatForString(actual).is.containingAllOf(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The string is not containing all of the expected sub-strings.',
            expected: `To contain all of these sub-strings:\n${expected.join('\n')}`,
            actual,
            diff: `These sub-strings are missing:\nuiae`
          })
      );
    });
  });

  suite('matching', (): void => {
    test('does not throw an error if actual matches the expected RegExp.', async (): Promise<void> => {
      const actual = 'foo bar';
      const expected = /^foo.*/u;

      assert.that((): void => {
        assertthatForString(actual).is.matching(expected);
      }).is.not.throwing();
    });

    test('throws an error if actual does not match the expected RegExp.', async (): Promise<void> => {
      const actual = 'foo bar';
      const expected = /^bar.*/u;

      assert.that((): void => {
        assertthatForString(actual).is.matching(expected);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The string is not matching the RegExp.',
            expected: `To match the RegExp:\n${expected}`,
            actual
          })
      );
    });
  });

  suite('empty', (): void => {
    test('does not throw an error if actual is an empty string.', async (): Promise<void> => {
      const actual = '';

      assert.that((): void => {
        assertthatForString(actual).is.empty();
      }).is.not.throwing();
    });

    test('throws an error if actual is not an empty string.', async (): Promise<void> => {
      const actual = 'foo';

      assert.that((): void => {
        assertthatForString(actual).is.empty();
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The string is not empty.',
            actual
          })
      );
    });
  });

  suite('not', (): void => {
    suite('equalTo', (): void => {
      test('does not throw an error if actual is not equal to expected.', async (): Promise<void> => {
        const actual = '';
        const expected = 'foo';

        assert.that((): void => {
          assertthatForString(actual).is.not.equalTo(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual is equal to expected.', async (): Promise<void> => {
        const actual = '';
        const expected = '';

        assert.that((): void => {
          assertthatForString(actual).is.not.equalTo(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The strings are equal.',
              expected,
              actual
            })
        );
      });
    });

    suite('falsy', (): void => {
      test('does not throw an error if actual is not falsy.', async (): Promise<void> => {
        const actual = 'foo';

        assert.that((): void => {
          assertthatForString(actual).is.not.falsy();
        }).is.not.throwing();
      });

      test('throws an error if actual is falsy.', async (): Promise<void> => {
        const actual = '';

        assert.that((): void => {
          assertthatForString(actual).is.not.falsy();
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The string is falsy.',
              actual
            })
        );
      });
    });

    suite('truthy', (): void => {
      test('does not throw an error if actual is not truthy.', async (): Promise<void> => {
        const actual = '';

        assert.that((): void => {
          assertthatForString(actual).is.not.truthy();
        }).is.not.throwing();
      });

      test('throws an error if actual is truthy.', async (): Promise<void> => {
        const actual = 'foo';

        assert.that((): void => {
          assertthatForString(actual).is.not.truthy();
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The string is truthy.',
              actual
            })
        );
      });
    });

    suite('sameAs', (): void => {
      test('does not throw an error if actual is not the same as expected.', async (): Promise<void> => {
        const actual = 'foo';
        const expected = 'bar';

        assert.that((): void => {
          assertthatForString(actual).is.not.sameAs(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual is the same as expected.', async (): Promise<void> => {
        const actual = 'foo';
        const expected = 'foo';

        assert.that((): void => {
          assertthatForString(actual).is.not.sameAs(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The strings are the same.',
              expected,
              actual
            })
        );
      });
    });

    suite('sameJsonAs', (): void => {
      test('does not throw an error if actual does not have the same JSON representation as expected.', async (): Promise<void> => {
        const actual = 'foo';
        const expected = 'bar';

        assert.that((): void => {
          assertthatForString(actual).is.not.sameJsonAs(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual has the same JSON representation as expected.', async (): Promise<void> => {
        const actual = 'foo';
        const expected = 'foo';

        assert.that((): void => {
          assertthatForString(actual).is.not.sameJsonAs(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The strings have the same JSON representation.',
              expected: JSON.stringify(expected),
              actual: JSON.stringify(actual)
            })
        );
      });
    });

    suite('containing', (): void => {
      test('does not throw an error if actual does not contain expected.', async (): Promise<void> => {
        const actual = 'foo';
        const expected = 'bar';

        assert.that((): void => {
          assertthatForString(actual).is.not.containing(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual contains expected.', async (): Promise<void> => {
        const actual = 'foobarfoo';
        const expected = 'bar';

        assert.that((): void => {
          assertthatForString(actual).is.not.containing(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The string is containing the not expected sub-string.',
              expected: `To not contain the sub-string:\n${expected}`,
              actual
            })
        );
      });
    });

    suite('startingWith', (): void => {
      test('does not throw an error if actual does not start with expected.', async (): Promise<void> => {
        const actual = 'foo bar';
        const expected = 'bar';

        assert.that((): void => {
          assertthatForString(actual).is.not.startingWith(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual starts with expected.', async (): Promise<void> => {
        const actual = 'foo bar';
        const expected = 'foo';

        assert.that((): void => {
          assertthatForString(actual).is.not.startingWith(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The string is starting with the not expected sub-string.',
              expected: `To not start with the sub-string:\n${expected}`,
              actual
            })
        );
      });
    });

    suite('endingWith', (): void => {
      test('does not throw an error if actual does not end with expected.', async (): Promise<void> => {
        const actual = 'foo bar';
        const expected = 'foo';

        assert.that((): void => {
          assertthatForString(actual).is.not.endingWith(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual ends with expected.', async (): Promise<void> => {
        const actual = 'foo bar';
        const expected = 'bar';

        assert.that((): void => {
          assertthatForString(actual).is.not.endingWith(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The string is ending with the not expected sub-string.',
              expected: `To not end with the sub-string:\n${expected}`,
              actual
            })
        );
      });
    });

    suite('containingAnyOf', (): void => {
      test('does not throw an error if actual does not contain any of the values in expected.', async (): Promise<void> => {
        const actual = 'foo bar baz bam bas bat';
        const expected = [ 'uiae', 'nrtd' ];

        assert.that((): void => {
          assertthatForString(actual).is.not.containingAnyOf(expected);
        }).is.not.throwing();
      });

      test('does not throw an error if expected is empty.', async (): Promise<void> => {
        const actual = 'foo bar baz bam bas bat';
        const expected: string[] = [];

        assert.that((): void => {
          assertthatForString(actual).is.not.containingAnyOf(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual contains any of the values in expected.', async (): Promise<void> => {
        const actual = 'foo bar baz bam bas bat';
        const expected = [ 'foo' ];

        assert.that((): void => {
          assertthatForString(actual).is.not.containingAnyOf(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The string is containing any of the not expected sub-strings.',
              expected: `To not contain any of these sub-strings:\n${expected.join('\n')}`,
              actual,
              diff: `These sub-strings are contained:\nfoo`
            })
        );
      });
    });

    suite('containingAllOf', (): void => {
      test('does not throw an error if actual does not contain all of the values in expected.', async (): Promise<void> => {
        const actual = 'foo bar baz bam bas bat';
        const expected = [ 'foo', 'bar', 'uiae' ];

        assert.that((): void => {
          assertthatForString(actual).is.not.containingAllOf(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual contains all of the values in expected.', async (): Promise<void> => {
        const actual = 'foo bar baz bam bas bat';
        const expected = [ 'foo', 'bar', 'bas' ];

        assert.that((): void => {
          assertthatForString(actual).is.not.containingAllOf(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The string is containing all of the not expected sub-strings.',
              expected: `To contain none of these sub-strings:\n${expected.join('\n')}`,
              actual
            })
        );
      });

      test('throws an error if expected is empty.', async (): Promise<void> => {
        const actual = 'foo bar baz bam bas bat';
        const expected: string[] = [];

        assert.that((): void => {
          assertthatForString(actual).is.not.containingAllOf(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The string is containing all of the not expected sub-strings.',
              expected: `To contain none of these sub-strings:\n`,
              actual
            })
        );
      });
    });

    suite('matching', (): void => {
      test('does not throw an error if actual does not match the expected RegExp.', async (): Promise<void> => {
        const actual = 'foo bar';
        const expected = /^bar.*/u;

        assert.that((): void => {
          assertthatForString(actual).is.not.matching(expected);
        }).is.not.throwing();
      });

      test('throws an error if actual matches the expected RegExp.', async (): Promise<void> => {
        const actual = 'foo bar';
        const expected = /^foo.*/u;

        assert.that((): void => {
          assertthatForString(actual).is.not.matching(expected);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The string is matching the RegExp.',
              expected: `To not match the RegExp:\n${expected}`,
              actual
            })
        );
      });
    });

    suite('empty', (): void => {
      test('does not throw an error if actual is not an empty string.', async (): Promise<void> => {
        const actual = 'foo';

        assert.that((): void => {
          assertthatForString(actual).is.not.empty();
        }).is.not.throwing();
      });

      test('throws an error if actual is an empty string.', async (): Promise<void> => {
        const actual = '';

        assert.that((): void => {
          assertthatForString(actual).is.not.empty();
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The string is empty.',
              actual
            })
        );
      });
    });
  });
});
