'use strict';

const chai = require('chai').assert;

const throwing = require('../../../lib/constraints/throwing');

suite('throwing', () => {
  test('is a function.', done => {
    chai.typeOf(throwing, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(throwing(() => {
      // Intentionally left blank.
    }), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if actual is not throwing an exception, although one is expected.', done => {
      chai.throw(() => {
        throwing(() => {
          // Intentionally left blank.
        })();
      }, 'Expected an exception.');
      done();
    });

    test('throws an error if actual is not throwing an exception, although one is expected with message.', done => {
      chai.throw(() => {
        throwing(() => {
          // Intentionally left blank.
        })('Foo failed.');
      }, 'Expected an exception with message \'Foo failed.\'.');
      done();
    });

    test('does not throw an error if actual is throwing as expected.', done => {
      chai.doesNotThrow(() => {
        throwing(() => {
          throw new Error('Foo failed.');
        })();
      });
      done();
    });

    test('does not throw an error if actual is throwing as expected with message.', done => {
      chai.doesNotThrow(() => {
        throwing(() => {
          throw new Error('Foo failed.');
        })('Foo failed.');
      });
      done();
    });

    test('does not throw an error if actual is throwing as expected with message (regex).', done => {
      chai.doesNotThrow(() => {
        throwing(() => {
          throw new Error('Foo failed.');
        })(/Foo/);
      });
      done();
    });

    test('throws an error if actual is throwing an exception as expected, but with wrong message.', done => {
      chai.throw(() => {
        throwing(() => {
          throw new Error('Foo failed.');
        })('Bar failed.');
      }, 'Expected \'Foo failed.\' to equal \'Bar failed.\'.');
      done();
    });

    test('throws an error if actual is throwing an exception as expected, but with wrong message (regex).', done => {
      chai.throw(() => {
        throwing(() => {
          throw new Error('Foo failed.');
        })(/Bar/);
      }, 'Expected \'Foo failed.\' to equal /Bar/.');
      done();
    });

    test('throws an error if actual is throwing an exception as expected, but not with empty message as expected.', done => {
      chai.throw(() => {
        throwing(() => {
          throw new Error('Foo failed.');
        })('');
      }, 'Expected \'Foo failed.\' to equal \'\'.');
      done();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(throwing.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(throwing.negated(() => {
        // Intentionally left blank.
      }), 'function');
      done();
    });

    suite('constraint', () => {
      test('does not throw an error if actual is not throwing at all as expected.', done => {
        chai.doesNotThrow(() => {
          throwing.negated(() => {
            // Intentionally left blank.
          })();
        });
        done();
      });

      test('throws an error if actual is throwing although no throwing at all is expected.', done => {
        chai.throw(() => {
          throwing.negated(() => {
            throw new Error('Foo failed.');
          })();
        });
        done();
      });

      test('does not throw an error if actual is not throwing and errX is not expected.', done => {
        chai.doesNotThrow(() => {
          throwing.negated(() => {
            // Intentionally left blank.
          })('Foo failed.');
        });
        done();
      });

      test('throws an error if actual is throwing errX and errY is not expected.', done => {
        chai.throw(() => {
          throwing.negated(() => {
            throw new Error('Foo failed.');
          })('Foo failed.');
        });
        done();
      });

      test('throws an error if actual is throwing errX and errY is not expected (regex).', done => {
        chai.throw(() => {
          throwing.negated(() => {
            throw new Error('Foo failed.');
          })(/Foo/);
        });
        done();
      });

      test('does not throw an error if actual is throwing errX and errY is not expected.', done => {
        chai.doesNotThrow(() => {
          throwing.negated(() => {
            throw new Error('Foo failed.');
          })('Bar failed.');
        });
        done();
      });

      test('does not throw an error if actual is throwing errX and errY is not expected (regex).', done => {
        chai.doesNotThrow(() => {
          throwing.negated(() => {
            throw new Error('Foo failed.');
          })(/Bar/);
        });
        done();
      });

      test('does not throw an error if actual is throwing errX and there is no errY expected.', done => {
        chai.doesNotThrow(() => {
          throwing.negated(() => {
            throw new Error('Foo failed.');
          })('');
        });
        done();
      });
    });
  });
});
