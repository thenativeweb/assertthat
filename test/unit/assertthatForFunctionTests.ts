import { assert } from '../../lib/assertthat';
import { AssertionFailed } from '../../lib/errors';
import { assertthatForFunction } from '../../lib/assertthatForFunction';
import { stripIndent } from 'common-tags';
import { formatErrorMessage } from 'lib/formatErrorMessage';

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
          ex.message === formatErrorMessage({
            message: 'The functions are not equal.',
            expected: function2.toString(),
            actual: function1.toString()
          })
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
          ex.message === formatErrorMessage({
            message: 'The functions are not the same.'
          })
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
          ex.message === formatErrorMessage({
            message: 'The function did not throw an exception.'
          })
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
          ex.message === formatErrorMessage({
            message: 'The function threw an unexpected exception.',
            expected: 'The message should have been:\nBar',
            actual: 'Error message:\nFoo'
          })
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
          ex.message === formatErrorMessage({
            message: 'The function threw an unexpected exception.',
            expected: `The message should have matched:\n${regExp.toString()}`,
            actual: 'Error message:\nFoo bar.'
          })
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
          ex.message === formatErrorMessage({
            message: 'The function threw an unexpected exception.',
            expected: 'The exception should have fulfilled a predicate.',
            actual: 'Error message:\nFoo bar.'
          })
      );
    });
  });

  suite('throwingAsync', (): void => {
    test('throws an error if actual is not returning a promise.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const fun = (): void => {
        // Intentionally left blank.
      };

      await assert.that(async (): Promise<void> => {
        await assert.that(fun).is.throwingAsync();
      }).is.throwingAsync<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The function did not return a Promise.'
          })
      );
    });

    test('does not throw an error if actual is throwing an asynchronous error.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const fun = async (): Promise<void> => {
        throw new Error('Foo');
      };

      await assert.that(async (): Promise<void> => {
        await assert.that(fun).is.throwingAsync();
      }).is.not.throwingAsync();
    });

    test('throws an error if actual is not throwing an asynchronous error.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const fun = async (): Promise<void> => {
        // Intentionally left blank.
      };

      await assert.that(async (): Promise<void> => {
        await assert.that(fun).is.throwingAsync();
      }).is.throwingAsync<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The function did not throw an asynchronous exception.'
          })
      );
    });

    test('does not throw an error if actual is throwing an asynchronous error with the correct message.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const fun = async (): Promise<void> => {
        throw new Error('Foo');
      };

      await assert.that(async (): Promise<void> => {
        await assert.that(fun).is.throwingAsync('Foo');
      }).is.not.throwingAsync();
    });

    test('throws an error if actual is throwing an asynchronous error with an incorrect message.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const fun = async (): Promise<void> => {
        throw new Error('Not foo');
      };

      await assert.that(async (): Promise<void> => {
        await assert.that(fun).is.throwingAsync('Foo');
      }).is.throwingAsync<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The function threw an unexpected asynchronous exception.',
            expected: 'The message should have been:\nFoo',
            actual: 'Error message:\nNot foo'
          })
      );
    });

    test('does not throw an error if actual is throwing an asynchronous error whose message matches the RegExp.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const fun = async (): Promise<void> => {
        throw new Error('Foo bar');
      };

      await assert.that(async (): Promise<void> => {
        await assert.that(fun).is.throwingAsync(/^Foo.*/u);
      }).is.not.throwingAsync();
    });

    test('throws an error if actual is throwing an asynchronous error whose message does not match the RegExp.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const fun = async (): Promise<void> => {
        throw new Error('Not foo');
      };
      const regExp = /^Foo.*/u;

      await assert.that(async (): Promise<void> => {
        await assert.that(fun).is.throwingAsync(regExp);
      }).is.throwingAsync<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The function threw an unexpected asynchronous exception.',
            expected: `The message should have matched:\n${regExp.toString()}`,
            actual: 'Error message:\nNot foo'
          })
      );
    });

    test('does not throw an error if actual is throwing an asynchronous error that fulfils the predicate.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const fun = async (): Promise<void> => {
        throw new Error('Foo');
      };

      await assert.that(async (): Promise<void> => {
        await assert.that(fun).is.throwingAsync((ex): boolean => ex.message === 'Foo');
      }).is.not.throwingAsync();
    });

    test('throws an error if actual is throwing an asynchronous error that does not fulfil the predicate.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/consistent-function-scoping
      const fun = async (): Promise<void> => {
        throw new Error('Not foo');
      };

      await assert.that(async (): Promise<void> => {
        await assert.that(fun).is.throwingAsync((ex): boolean => ex.message === 'Foo');
      }).is.throwingAsync<AssertionFailed>(
        (ex): boolean =>
          ex.message === formatErrorMessage({
            message: 'The function threw an unexpected asynchronous exception.',
            expected: 'The exception should have fulfilled a predicate.',
            actual: 'Error message:\nNot foo'
          })
      );
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
            ex.message === formatErrorMessage({
              message: 'The functions are equal.',
              expected: `Not to equal:\n${function2.toString()}`,
              actual: function1.toString()
            })
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
            ex.message === formatErrorMessage({
              message: 'The functions are the same.'
            })
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
            ex.message === formatErrorMessage({
              message: 'The function threw an unexpected exception.',
              actual: 'Error message:\nFoo'
            })
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
            ex.message === formatErrorMessage({
              message: 'The function threw an unexpected exception.',
              expected: 'The message should not have been:\nFoo',
              actual: 'Error message:\nFoo'
            })
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
            ex.message === formatErrorMessage({
              message: 'The function threw an unexpected exception.',
              expected: `The message should not have matched:\n${regExp.toString()}`,
              actual: 'Error message:\nFoo bar.'
            })
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
            ex.message === formatErrorMessage({
              message: 'The function threw an unexpected exception.',
              expected: 'The exception should not have fulfilled a predicate.',
              actual: 'Error message:\nFoo bar.'
            })
        );
      });
    });

    suite('throwingAsync', (): void => {
      test('throws an error if actual is not returning a promise.', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const fun = (): void => {
          // Intentionally left empty.
        };

        await assert.that(async (): Promise<void> => {
          await assert.that(fun).is.not.throwingAsync();
        }).is.throwingAsync<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The function did not return a Promise.'
            })
        );
      });

      test('does not throw an error if actual is not throwing an asynchronous error.', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const fun = async (): Promise<void> => {
          // Intentionally left empty.
        };

        await assert.that(async (): Promise<void> => {
          await assert.that(fun).is.not.throwingAsync();
        }).is.not.throwingAsync();
      });

      test('throws an error if actual is throwing an asynochronous error.', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const fun = async (): Promise<void> => {
          throw new Error('Foo');
        };

        await assert.that(async (): Promise<void> => {
          await assert.that(fun).is.not.throwingAsync();
        }).is.throwingAsync<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The function threw an unexpected asynchronous exception.',
              actual: 'Error message:\nFoo'
            })
        );
      });

      test('does not throw an error if actual is not throwing an asynchronous error that is equal to the given message.', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const fun = async (): Promise<void> => {
          throw new Error('Foo');
        };

        await assert.that(async (): Promise<void> => {
          await assert.that(fun).is.not.throwingAsync('Not foo');
        }).is.not.throwingAsync();
      });

      test('throws an error if actual is throwing an asynchronous error that is equal to the given message.', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const fun = async (): Promise<void> => {
          throw new Error('Foo');
        };

        await assert.that(async (): Promise<void> => {
          await assert.that(fun).is.not.throwingAsync('Foo');
        }).is.throwingAsync<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The function threw an unexpected asynchronous exception.',
              expected: 'The message should not have been:\nFoo',
              actual: 'Error message:\nFoo'
            })
        );
      });

      test('does not throw an error if actual is throwing an asynchronous error that does not match the given RegExp.', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const fun = async (): Promise<void> => {
          throw new Error('Not foo');
        };

        await assert.that(async (): Promise<void> => {
          await assert.that(fun).is.not.throwingAsync(/^Foo.*/u);
        }).is.not.throwingAsync();
      });

      test('throws an error if actual is throwing an asynchronous error whose message matches the given RegExp.', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const fun = async (): Promise<void> => {
          throw new Error('Foo bar');
        };
        const regExp = /^Foo.*/u;

        await assert.that(async (): Promise<void> => {
          await assert.that(fun).is.not.throwingAsync(regExp);
        }).is.throwingAsync<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The function threw an unexpected asynchronous exception.',
              expected: `The message should not have matched:\n${regExp.toString()}`,
              actual: 'Error message:\nFoo bar'
            })
        );
      });

      test('does not throw an error if actual is not throwing an asynchronous error that fulfils the predicate.', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const fun = async (): Promise<void> => {
          throw new Error('Not foo');
        };

        await assert.that(async (): Promise<void> => {
          await assert.that(fun).is.not.throwingAsync((ex): boolean => ex.message === 'Foo');
        }).is.not.throwingAsync();
      });

      test('throws an error if actual is throwing an asynchronous error that fulfils the predicate.', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const fun = async (): Promise<void> => {
          throw new Error('Foo');
        };

        await assert.that(async (): Promise<void> => {
          await assert.that(fun).is.not.throwingAsync((ex): boolean => ex.message === 'Foo');
        }).is.throwingAsync<AssertionFailed>(
          (ex): boolean =>
            ex.message === formatErrorMessage({
              message: 'The function threw an unexpected asynchronous exception.',
              expected: 'The exception should not have fulfilled a predicate.',
              actual: 'Error message:\nFoo'
            })
        );
      });
    });
  });
});
