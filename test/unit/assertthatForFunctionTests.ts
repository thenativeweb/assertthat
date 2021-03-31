import { assert } from '../../lib/assertthat';
import { AssertionFailed } from '../../lib/errors';
import { assertthatForFunction } from '../../lib/assertthatForFunction';
import { stripIndent } from 'common-tags';

suite('assertthatForFunction', (): void => {
  suite('equalTo', (): void => {
    test('does not throw an error if actual is equal to expected.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const function1 = (): number => 5;
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const function2 = (): number => 5;

      assert.that((): void => {
        assertthatForFunction(function1).is.equalTo(function2);
      }).is.not.throwing();
    });

    test('throws an error if actual is not equal to expected.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const function1 = (): number => 5;
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const function2 = (): number => 7;

      assert.that((): void => {
        assertthatForFunction(function1).is.equalTo(function2);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === 'The functions are not equal.' &&
          ex.data.formattedMessage === stripIndent`
            The functions are not equal.
            Expected: ${function2.toString()}
            Actual: ${function1.toString()}
          `
      );
    });
  });

  suite('sameAs', (): void => {
    test('does not throw an error if actual is the same as expected.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const function1 = (): number => 5;

      assert.that((): void => {
        assertthatForFunction(function1).is.sameAs(function1);
      }).is.not.throwing();
    });

    test('throws an error if actual is not the same as expected.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const function1 = (): number => 5;
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const function2 = (): number => 5;

      assert.that((): void => {
        assertthatForFunction(function1).is.sameAs(function2);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === 'The functions are not the same.' &&
          ex.data.formattedMessage === 'The functions are not the same.'
      );
    });
  });

  suite('throwing', (): void => {
    test('does not throw an error if actual is throwing an error.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const fun = (): void => {
        throw new Error('Foo');
      };

      assert.that((): void => {
        assertthatForFunction(fun).is.throwing();
      }).is.not.throwing();
    });

    test('throws an error if actual is not throwing an error.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const fun = (): void => {
        // Intentionally left blank.
      };

      assert.that((): void => {
        assertthatForFunction(fun).is.throwing();
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === 'The function did not throw an exception.' &&
          ex.data.formattedMessage === 'The function did not throw an exception.'
      );
    });

    test('does not throw an error if actual is throwing an error with the correct message.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const fun = (): void => {
        throw new Error('Foo');
      };

      assert.that((): void => {
        assertthatForFunction(fun).is.throwing('Foo');
      }).is.not.throwing();
    });

    test('throws an error if actual is throwing an error with an incorrect message.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const fun = (): void => {
        throw new Error('Foo');
      };

      assert.that((): void => {
        assertthatForFunction(fun).is.throwing('Bar');
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === 'The function threw an unexpected exception.' &&
          ex.data.formattedMessage === stripIndent`
            The function threw an unexpected exception.
            Expected the message to be: Bar
            Actual message: Foo
          `
      );
    });

    test('does not throw an error if actual is throwing an error whose message matches the RegExp.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const fun = (): void => {
        throw new Error('Foo bar.');
      };
      const regExp = /^Foo.*/u;

      assert.that((): void => {
        assertthatForFunction(fun).is.throwing(regExp);
      }).is.not.throwing();
    });

    test('throws an error if actual is throwing an error whose message does not match the RegExp.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const fun = (): void => {
        throw new Error('Foo bar.');
      };
      const regExp = /^Not foo.*/u;

      assert.that((): void => {
        assertthatForFunction(fun).is.throwing(regExp);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === 'The function threw an unexpected exception.' &&
          ex.data.formattedMessage === stripIndent`
            The function threw an unexpected exception.
            Expected the message to match: ${regExp.toString()}
            Actual message: Foo bar.
          `
      );
    });

    test('does not throw an error if actual is throwing an error that fulfils the predicate.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const fun = (): void => {
        throw new Error('Foo bar.');
      };
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const predicate = (ex: Error): boolean => ex.message === 'Foo bar.';

      assert.that((): void => {
        assertthatForFunction(fun).is.throwing(predicate);
      }).is.not.throwing();
    });

    test('throws an error if actual is throwing an error that does not fulfil the predicate.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const fun = (): void => {
        throw new Error('Foo bar.');
      };
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const predicate = (ex: Error): boolean => ex.message === 'Not foo.';

      assert.that((): void => {
        assertthatForFunction(fun).is.throwing(predicate);
      }).is.throwing<AssertionFailed>(
        (ex): boolean =>
          ex.message === 'The function threw an unexpected exception.' &&
          ex.data.formattedMessage === stripIndent`
            The function threw an unexpected exception.
            Expected the exception to fulfil a predicate.
            Actual message: Foo bar.
          `
      );
    });
  });

  suite('throwingAsync', (): void => {
    test('does not throw an error if actual is throwing an asynchronous error.', async (): Promise<void> => {

    });

    test('throws an error if actual is not throwing an asynchronous error.', async (): Promise<void> => {

    });

    test('does not throw an error if actual is throwing an asynchronous error with the correct message.', async (): Promise<void> => {

    });

    test('throws an error if actual is throwing an asynchronous error with an incorrect message.', async (): Promise<void> => {

    });

    test('does not throw an error if actual is throwing an asynchronous error whose message matches the RegExp.', async (): Promise<void> => {

    });

    test('throws an error if actual is throwing an asynchronous error whose message does not match the RegExp.', async (): Promise<void> => {

    });

    test('does not throw an error if actual is throwing an asynchronous error that fulfils the predicate.', async (): Promise<void> => {

    });

    test('throws an error if actual is throwing an asynchronous error that does not fulfil the predicate.', async (): Promise<void> => {

    });
  });

  suite('not', (): void => {
    suite('equalTo', (): void => {
      test('does not throw an error if actual is not equal to expected.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
        const function1 = (): number => 5;
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const function2 = (): number => 7;

        assert.that((): void => {
          assertthatForFunction(function1).is.not.equalTo(function2);
        }).is.not.throwing();
      });

      test('throws an error if actual is equal to expected.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
        const function1 = (): number => 5;
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const function2 = (): number => 5;

        assert.that((): void => {
          assertthatForFunction(function1).is.not.equalTo(function2);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === 'The functions are equal.' &&
            ex.data.formattedMessage === stripIndent`
              The functions are equal.
              Expected not to be: ${function2.toString()}
              Actual: ${function1.toString()}
            `
        );
      });
    });

    suite('sameAs', (): void => {
      test('does not throw an error if actual is not the same as expected.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
        const function1 = (): number => 5;
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const function2 = (): number => 5;

        assert.that((): void => {
          assertthatForFunction(function1).is.not.sameAs(function2);
        }).is.not.throwing();
      });

      test('throws an error if actual is the same as expected.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
        const function1 = (): number => 5;

        assert.that((): void => {
          assertthatForFunction(function1).is.not.sameAs(function1);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === 'The functions are the same.' &&
            ex.data.formattedMessage === 'The functions are the same.'
        );
      });
    });

    suite('throwing', (): void => {
      test('does not throw an error if actual is not throwing an error.', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const fun = (): void => {
          // Intentionally left blank.
        };

        assert.that((): void => {
          assertthatForFunction(fun).is.not.throwing();
        }).is.not.throwing();
      });

      test('throws an error if actual is throwing an error.', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const fun = (): void => {
          throw new Error('Foo');
        };

        assert.that((): void => {
          assertthatForFunction(fun).is.not.throwing();
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === 'The function threw an unexpected exception.' &&
            ex.data.formattedMessage === stripIndent`
              The function threw an unexpected exception.
              Actual message: Foo
            `
        );
      });

      test('does not throw an error if actual is not throwing an error that is equal to the given message.', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const fun = (): void => {
          throw new Error('Foo');
        };

        assert.that((): void => {
          assertthatForFunction(fun).is.not.throwing('Not foo');
        }).is.not.throwing();
      });

      test('throws an error if actual is throwing an error that is equal to the given message.', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const fun = (): void => {
          throw new Error('Foo');
        };

        assert.that((): void => {
          assertthatForFunction(fun).is.not.throwing('Foo');
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === 'The function threw an unexpected exception.' &&
            ex.data.formattedMessage === stripIndent`
              The function threw an unexpected exception.
              Expected the message not to be: Foo
              Actual message: Foo
            `
        );
      });

      test('does not throw an error if actual is throwing an error that does not match the given RegExp.', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const fun = (): void => {
          throw new Error('Bar.');
        };
        const regExp = /^Foo.*/u;

        assert.that((): void => {
          assert.that(fun).is.not.throwing(regExp);
        }).is.not.throwing();
      });

      test('throws an error if actual is throwing an error whose message matches the given RegExp.', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const fun = (): void => {
          throw new Error('Foo bar.');
        };
        const regExp = /^Foo.*/u;

        assert.that((): void => {
          assert.that(fun).is.not.throwing(regExp);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === 'The function threw an unexpected exception.' &&
            ex.data.formattedMessage === stripIndent`
              The function threw an unexpected exception.
              Expected the message not to match: ${regExp.toString()}
              Actual message: Foo bar.
            `
        );
      });

      test('does not throw an error if actual is not throwing an error that fulfils the predicate.', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const fun = (): void => {
          throw new Error('Foo bar.');
        };
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const predicate = (ex: Error): boolean => ex.message === 'Not foo.';

        assert.that((): void => {
          assertthatForFunction(fun).is.not.throwing(predicate);
        }).is.not.throwing();
      });

      test('throws an error if actual is throwing an error that fulfils the predicate.', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const fun = (): void => {
          throw new Error('Foo bar.');
        };
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const predicate = (ex: Error): boolean => ex.message === 'Foo bar.';

        assert.that((): void => {
          assertthatForFunction(fun).is.not.throwing(predicate);
        }).is.throwing<AssertionFailed>(
          (ex): boolean =>
            ex.message === 'The function threw an unexpected exception.' &&
            ex.data.formattedMessage === stripIndent`
              The function threw an unexpected exception.
              Expected the exception not to fulfil a predicate.
              Actual message: Foo bar.
            `
        );
      });
    });

    suite('throwingAsync', (): void => {
      test('does not throw an error if actual is not throwing an asynchronous error.', async (): Promise<void> => {

      });

      test('throws an error if actual is throwing an asynochronous error.', async (): Promise<void> => {

      });

      test('does not throw an error if actual is not throwing an asynchronous error that is equal to the given message.', async (): Promise<void> => {

      });

      test('throws an error if actual is throwing an asynchronous error that is equal to the given message.', async (): Promise<void> => {

      });

      test('does not throw an error if actual is throwing an asynchronous error that does not match the given RegExp.', async (): Promise<void> => {

      });

      test('throws an error if actual is throwing an asynchronous error whose message matches the given RegExp.', async (): Promise<void> => {

      });

      test('does not throw an error if actual is not throwing an asynchronous error that fulfils the predicate.', async (): Promise<void> => {

      });

      test('throws an error if actual is throwing an asynchronous error that fulfils the predicate.', async (): Promise<void> => {

      });
    });
  });
});
