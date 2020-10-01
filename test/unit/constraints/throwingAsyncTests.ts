import chaiStatic from 'chai';
import { throwingAsync } from '../../../lib/constraints/throwingAsync';

const chai = chaiStatic.assert;

suite('throwingAsync', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(throwingAsync, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(throwingAsync((): void => {
      // Intentionally left blank.
    }), 'function');
  });

  suite('constraint', (): void => {
    test('throws an error if actual is not throwing an exception, although one is expected.', async (): Promise<void> => {
      try {
        await throwingAsync(async (): Promise<void> => {
          // Intentionally left blank.
        })();
        throw new Error('Should have thrown.');
      } catch (ex: unknown) {
        chai.equal((ex as NodeJS.ErrnoException).message, 'Expected an exception.');
      }
    });

    test('throws an error if actual is not throwing an exception, although one is expected with message.', async (): Promise<void> => {
      try {
        await throwingAsync(async (): Promise<void> => {
          // Intentionally left blank.
        })('Foo failed.');
        throw new Error('Should have thrown.');
      } catch (ex: unknown) {
        chai.equal((ex as NodeJS.ErrnoException).message, 'Expected an exception with message \'Foo failed.\'.');
      }
    });

    test('does not throw an error if actual is throwing as expected.', async (): Promise<void> => {
      try {
        await throwingAsync(async (): Promise<void> => {
          throw new Error('Foo failed.');
        })();
      } catch {
        throw new Error('Should not have thrown.');
      }
    });

    test('does not throw an error if actual is throwing as expected with message.', async (): Promise<void> => {
      try {
        await throwingAsync(async (): Promise<void> => {
          throw new Error('Foo failed.');
        })('Foo failed.');
      } catch {
        throw new Error('Should not have thrown.');
      }
    });

    test('does not throw an error if actual is throwing as expected with message (regex).', async (): Promise<void> => {
      try {
        await throwingAsync(async (): Promise<void> => {
          throw new Error('Foo failed.');
        })(/Foo/u);
      } catch {
        throw new Error('Should not have thrown.');
      }
    });

    test('does not throw an error if actual is throwing as expected with message (function).', async (): Promise<void> => {
      try {
        await throwingAsync(async (): Promise<void> => {
          throw new Error('Foo failed.');
        })((ex: Error): boolean => ex.message.includes('Foo'));
      } catch {
        throw new Error('Should not have thrown.');
      }
    });

    test('throws an error if actual is throwing an exception as expected, but with wrong message.', async (): Promise<void> => {
      try {
        await throwingAsync(async (): Promise<void> => {
          throw new Error('Foo failed.');
        })('Bar failed.');
        throw new Error('Should have thrown.');
      } catch (ex: unknown) {
        chai.equal((ex as NodeJS.ErrnoException).message, 'Expected \'Foo failed.\' to equal \'Bar failed.\'.');
      }
    });

    test('throws an error if actual is throwing an exception as expected, but with wrong message (regex).', async (): Promise<void> => {
      try {
        await throwingAsync(async (): Promise<void> => {
          throw new Error('Foo failed.');
        })(/Bar/u);
        throw new Error('Should have thrown.');
      } catch (ex: unknown) {
        chai.equal((ex as NodeJS.ErrnoException).message, 'Expected \'Foo failed.\' to equal /Bar/u.');
      }
    });

    test('throws an error if actual is throwing an exception as expected, but with wrong message (function).', async (): Promise<void> => {
      try {
        await throwingAsync(async (): Promise<void> => {
          throw new Error('Foo failed.');
        })((ex: Error): boolean => ex.message.includes('Bar'));
        throw new Error('Should have thrown.');
      } catch (ex: unknown) {
        chai.equal((ex as NodeJS.ErrnoException).message, 'Expected \'Foo failed.\' to fulfill predicate.');
      }
    });

    test('throws an error if actual is throwing an exception as expected, but not with empty message as expected.', async (): Promise<void> => {
      try {
        await throwingAsync(async (): Promise<void> => {
          throw new Error('Foo failed.');
        })('');
        throw new Error('Should have thrown.');
      } catch (ex: unknown) {
        chai.equal((ex as NodeJS.ErrnoException).message, 'Expected \'Foo failed.\' to equal \'\'.');
      }
    });

    test('correctly types the exception.', async (): Promise<void> => {
      class CustomError extends Error {
        public code = 'ECODE';
      }

      try {
        await throwingAsync<CustomError>(async (): Promise<void> => {
          throw new CustomError();
        })((ex): boolean => ex.code === 'ECODE');
      } catch {
        throw new Error('Should not have thrown.');
      }
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(throwingAsync.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(throwingAsync.negated((): void => {
        // Intentionally left blank.
      }), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not throwing at all as expected.', async (): Promise<void> => {
        try {
          await throwingAsync.negated(async (): Promise<void> => {
            // Intentionally left blank.
          })();
        } catch {
          throw new Error('Should not have thrown.');
        }
      });

      test('throws an error if actual is throwing although no throwing at all is expected.', async (): Promise<void> => {
        try {
          await throwingAsync.negated(async (): Promise<void> => {
            throw new Error('Foo failed.');
          })();
          throw new Error('Should have thrown.');
        } catch (ex: unknown) {
          chai.equal((ex as NodeJS.ErrnoException).message, `Expected not to throw an exception (received: 'Foo failed.').`);
        }
      });

      test('does not throw an error if actual is not throwing and errX is not expected.', async (): Promise<void> => {
        try {
          await throwingAsync.negated(async (): Promise<void> => {
            // Intentionally left blank.
          })('Foo failed.');
        } catch {
          throw new Error('Should not have thrown.');
        }
      });

      test('throws an error if actual is throwing errX and errY is not expected.', async (): Promise<void> => {
        try {
          await throwingAsync.negated(async (): Promise<void> => {
            throw new Error('Foo failed.');
          })('Foo failed.');
          throw new Error('Should have thrown.');
        } catch (ex: unknown) {
          chai.equal((ex as NodeJS.ErrnoException).message, `Expected not to throw an exception with message 'Foo failed.'.`);
        }
      });

      test('throws an error if actual is throwing errX and errY is not expected (regex).', async (): Promise<void> => {
        try {
          await throwingAsync.negated(async (): Promise<void> => {
            throw new Error('Foo failed.');
          })(/Foo/u);
          throw new Error('Should have thrown.');
        } catch (ex: unknown) {
          chai.equal((ex as NodeJS.ErrnoException).message, `Expected not to throw an exception with message /Foo/u.`);
        }
      });

      test('throws an error if actual is throwing errX and errY is not expected (function).', async (): Promise<void> => {
        try {
          await throwingAsync.negated(async (): Promise<void> => {
            throw new Error('Foo failed.');
          })((ex: Error): boolean => ex.message.includes('Foo'));
          throw new Error('Should have thrown.');
        } catch (ex: unknown) {
          chai.equal((ex as NodeJS.ErrnoException).message, `Expected 'Foo failed.' not to fulfill predicate.`);
        }
      });

      test('does not throw an error if actual is throwing errX and errY is not expected.', async (): Promise<void> => {
        try {
          await throwingAsync.negated(async (): Promise<void> => {
            throw new Error('Foo failed.');
          })('Bar failed.');
        } catch {
          throw new Error('Should not have thrown.');
        }
      });

      test('does not throw an error if actual is throwing errX and errY is not expected (regex).', async (): Promise<void> => {
        try {
          await throwingAsync.negated(async (): Promise<void> => {
            throw new Error('Foo failed.');
          })(/Bar/u);
        } catch {
          throw new Error('Should not have thrown.');
        }
      });

      test('does not throw an error if actual is throwing errX and errY is not expected (function).', async (): Promise<void> => {
        try {
          await throwingAsync.negated(async (): Promise<void> => {
            throw new Error('Foo failed.');
          })((ex: Error): boolean => ex.message.includes('Bar'));
        } catch {
          throw new Error('Should not have thrown.');
        }
      });

      test('does not throw an error if actual is throwing errX and there is no errY expected.', async (): Promise<void> => {
        try {
          await throwingAsync.negated(async (): Promise<void> => {
            throw new Error('Foo failed.');
          })('');
        } catch {
          throw new Error('Should not have thrown.');
        }
      });

      test('correctly types the exception.', async (): Promise<void> => {
        class CustomError extends Error {
          public code = 'ECODE';
        }

        try {
          await throwingAsync.negated<CustomError>(async (): Promise<void> => {
            throw new CustomError('Foo failed.');
          })((ex): boolean => ex.code === 'ECODE');
          throw new Error('Should have thrown.');
        } catch (ex: unknown) {
          chai.equal((ex as NodeJS.ErrnoException).message, `Expected 'Foo failed.' not to fulfill predicate.`);
        }
      });
    });
  });
});
