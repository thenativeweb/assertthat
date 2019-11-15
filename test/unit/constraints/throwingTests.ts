import chaiStatic from 'chai';
import { throwing } from '../../../lib/constraints/throwing';

const chai = chaiStatic.assert;

suite('throwing', (): void => {
  test('is a function.', async (): Promise<void> => {
    chai.typeOf(throwing, 'function');
  });

  test('returns a constraint.', async (): Promise<void> => {
    chai.typeOf(throwing((): void => {
      // Intentionally left blank.
    }), 'function');
  });

  suite('constraint', (): void => {
    test('throws an error if actual is not throwing an exception, although one is expected.', async (): Promise<void> => {
      chai.throw((): void => {
        throwing((): void => {
          // Intentionally left blank.
        })();
      }, 'Expected an exception.');
    });

    test('throws an error if actual is not throwing an exception, although one is expected with message.', async (): Promise<void> => {
      chai.throw((): void => {
        throwing((): void => {
          // Intentionally left blank.
        })('Foo failed.');
      }, 'Expected an exception with message \'Foo failed.\'.');
    });

    test('does not throw an error if actual is throwing as expected.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        throwing((): void => {
          throw new Error('Foo failed.');
        })();
      });
    });

    test('does not throw an error if actual is throwing as expected with message.', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        throwing((): void => {
          throw new Error('Foo failed.');
        })('Foo failed.');
      });
    });

    test('does not throw an error if actual is throwing as expected with message (regex).', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        throwing((): void => {
          throw new Error('Foo failed.');
        })(/Foo/u);
      });
    });

    test('does not throw an error if actual is throwing as expected with message (function).', async (): Promise<void> => {
      chai.doesNotThrow((): void => {
        throwing((): void => {
          throw new Error('Foo failed.');
        })((ex: Error): boolean => ex.message.includes('Foo'));
      });
    });

    test('throws an error if actual is throwing an exception as expected, but with wrong message.', async (): Promise<void> => {
      chai.throw((): void => {
        throwing((): void => {
          throw new Error('Foo failed.');
        })('Bar failed.');
      }, 'Expected \'Foo failed.\' to equal \'Bar failed.\'.');
    });

    test('throws an error if actual is throwing an exception as expected, but with wrong message (regex).', async (): Promise<void> => {
      chai.throw((): void => {
        throwing((): void => {
          throw new Error('Foo failed.');
        })(/Bar/u);
      }, 'Expected \'Foo failed.\' to equal /Bar/u.');
    });

    test('throws an error if actual is throwing an exception as expected, but with wrong message (function).', async (): Promise<void> => {
      chai.throw((): void => {
        throwing((): void => {
          throw new Error('Foo failed.');
        })((ex: Error): boolean => ex.message.includes('Bar'));
      }, 'Expected \'Foo failed.\' to fulfill predicate.');
    });

    test('throws an error if actual is throwing an exception as expected, but not with empty message as expected.', async (): Promise<void> => {
      chai.throw((): void => {
        throwing((): void => {
          throw new Error('Foo failed.');
        })('');
      }, 'Expected \'Foo failed.\' to equal \'\'.');
    });
  });

  suite('negated', (): void => {
    test('is a function.', async (): Promise<void> => {
      chai.typeOf(throwing.negated, 'function');
    });

    test('returns a constraint.', async (): Promise<void> => {
      chai.typeOf(throwing.negated((): void => {
        // Intentionally left blank.
      }), 'function');
    });

    suite('constraint', (): void => {
      test('does not throw an error if actual is not throwing at all as expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          throwing.negated((): void => {
            // Intentionally left blank.
          })();
        });
      });

      test('throws an error if actual is throwing although no throwing at all is expected.', async (): Promise<void> => {
        chai.throw((): void => {
          throwing.negated((): void => {
            throw new Error('Foo failed.');
          })();
        });
      });

      test('does not throw an error if actual is not throwing and errX is not expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          throwing.negated((): void => {
            // Intentionally left blank.
          })('Foo failed.');
        });
      });

      test('throws an error if actual is throwing errX and errY is not expected.', async (): Promise<void> => {
        chai.throw((): void => {
          throwing.negated((): void => {
            throw new Error('Foo failed.');
          })('Foo failed.');
        });
      });

      test('throws an error if actual is throwing errX and errY is not expected (regex).', async (): Promise<void> => {
        chai.throw((): void => {
          throwing.negated((): void => {
            throw new Error('Foo failed.');
          })(/Foo/u);
        });
      });

      test('throws an error if actual is throwing errX and errY is not expected (function).', async (): Promise<void> => {
        chai.throw((): void => {
          throwing.negated((): void => {
            throw new Error('Foo failed.');
          })((ex: Error): boolean => ex.message.includes('Foo'));
        });
      });

      test('does not throw an error if actual is throwing errX and errY is not expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          throwing.negated((): void => {
            throw new Error('Foo failed.');
          })('Bar failed.');
        });
      });

      test('does not throw an error if actual is throwing errX and errY is not expected (regex).', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          throwing.negated((): void => {
            throw new Error('Foo failed.');
          })(/Bar/u);
        });
      });

      test('does not throw an error if actual is throwing errX and errY is not expected (function).', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          throwing.negated((): void => {
            throw new Error('Foo failed.');
          })((ex: Error): boolean => ex.message.includes('Bar'));
        });
      });

      test('does not throw an error if actual is throwing errX and there is no errY expected.', async (): Promise<void> => {
        chai.doesNotThrow((): void => {
          throwing.negated((): void => {
            throw new Error('Foo failed.');
          })('');
        });
      });
    });
  });
});
