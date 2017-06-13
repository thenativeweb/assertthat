'use strict';

const chai = require('chai').assert;

const throwingAsync = require('../../../lib/constraints/throwingAsync');

suite('throwingAsync', () => {
  test('is a function.', done => {
    chai.typeOf(throwingAsync, 'function');
    done();
  });

  test('returns a constraint.', done => {
    chai.typeOf(throwingAsync(() => {
      // Intentionally left blank.
    }), 'function');
    done();
  });

  suite('constraint', () => {
    test('throws an error if actual is not throwing an exception, although one is expected.', done => {
      (async function () {
        try {
          await throwingAsync(async () => {
            // Intentionally left blank.
          })();
        } catch (ex) {
          try {
            chai.equal(ex.message, 'Expected an exception.');
          } catch (exChai) {
            return done(exChai);
          }

          return done();
        }

        return done(new Error('Invalid operation.'));
      })();
    });

    test('throws an error if actual is not throwing an exception, although one is expected with message.', done => {
      (async function () {
        try {
          await throwingAsync(async () => {
            // Intentionally left blank.
          })('Foo failed.');
        } catch (ex) {
          try {
            chai.equal(ex.message, 'Expected an exception with message \'Foo failed.\'.');
          } catch (exChai) {
            return done(exChai);
          }

          return done();
        }

        return done(new Error('Invalid operation.'));
      })();
    });

    test('does not throw an error if actual is throwing as expected.', done => {
      (async function () {
        try {
          await throwingAsync(async () => {
            throw new Error('Foo failed.');
          })();
        } catch (ex) {
          return done(new Error('Invalid operation.'));
        }

        return done();
      })();
    });

    test('does not throw an error if actual is throwing as expected with message.', done => {
      (async function () {
        try {
          await throwingAsync(async () => {
            throw new Error('Foo failed.');
          })('Foo failed.');
        } catch (ex) {
          return done(new Error('Invalid operation.'));
        }

        return done();
      })();
    });

    test('does not throw an error if actual is throwing as expected with message (regex).', done => {
      (async function () {
        try {
          await throwingAsync(async () => {
            throw new Error('Foo failed.');
          })(/Foo/);
        } catch (ex) {
          return done(new Error('Invalid operation.'));
        }

        return done();
      })();
    });

    test('throws an error if actual is throwing an exception as expected, but with wrong message.', done => {
      (async function () {
        try {
          await throwingAsync(async () => {
            throw new Error('Foo failed.');
          })('Bar failed.');
        } catch (ex) {
          try {
            chai.equal(ex.message, 'Expected \'Foo failed.\' to equal \'Bar failed.\'.');
          } catch (exChai) {
            return done(exChai);
          }

          return done();
        }

        return done(new Error('Invalid operation.'));
      })();
    });

    test('throws an error if actual is throwing an exception as expected, but with wrong message (regex).', done => {
      (async function () {
        try {
          await throwingAsync(async () => {
            throw new Error('Foo failed.');
          })(/Bar/);
        } catch (ex) {
          try {
            chai.equal(ex.message, 'Expected \'Foo failed.\' to equal /Bar/.');
          } catch (exChai) {
            return done(exChai);
          }

          return done();
        }

        return done(new Error('Invalid operation.'));
      })();
    });

    test('throws an error if actual is throwing an exception as expected, but not with empty message as expected.', done => {
      (async function () {
        try {
          await throwingAsync(async () => {
            throw new Error('Foo failed.');
          })('');
        } catch (ex) {
          try {
            chai.equal(ex.message, 'Expected \'Foo failed.\' to equal \'\'.');
          } catch (exChai) {
            return done(exChai);
          }

          return done();
        }

        return done(new Error('Invalid operation.'));
      })();
    });
  });

  suite('negated', () => {
    test('is a function.', done => {
      chai.typeOf(throwingAsync.negated, 'function');
      done();
    });

    test('returns a constraint.', done => {
      chai.typeOf(throwingAsync.negated(() => {
        // Intentionally left blank.
      }), 'function');
      done();
    });

    suite('constraint', () => {
      test('does not throw an error if actual is not throwing at all as expected.', done => {
        (async function () {
          try {
            await throwingAsync.negated(async () => {
              // Intentionally left blank.
            })();
          } catch (ex) {
            return done('Invalid operation.');
          }

          return done();
        })();
      });

      test('throws an error if actual is throwing although no throwing at all is expected.', done => {
        (async function () {
          try {
            await throwingAsync.negated(async () => {
              throw new Error('Foo failed.');
            })();
          } catch (ex) {
            return done();
          }

          return done('Invalid operation.');
        })();
      });

      test('does not throw an error if actual is not throwing and errX is not expected.', done => {
        (async function () {
          try {
            await throwingAsync.negated(async () => {
              // Intentionally left blank.
            })('Foo failed.');
          } catch (ex) {
            return done('Invalid operation.');
          }

          return done();
        })();
      });

      test('throws an error if actual is throwing errX and errY is not expected.', done => {
        (async function () {
          try {
            await throwingAsync.negated(async () => {
              throw new Error('Foo failed.');
            })('Foo failed.');
          } catch (ex) {
            return done();
          }

          return done('Invalid operation.');
        })();
      });

      test('throws an error if actual is throwing errX and errY is not expected (regex).', done => {
        (async function () {
          try {
            await throwingAsync.negated(async () => {
              throw new Error('Foo failed.');
            })(/Foo/);
          } catch (ex) {
            return done();
          }

          return done('Invalid operation.');
        })();
      });

      test('does not throw an error if actual is throwing errX and errY is not expected.', done => {
        (async function () {
          try {
            await throwingAsync.negated(async () => {
              throw new Error('Foo failed.');
            })('Bar failed.');
          } catch (ex) {
            return done('Invalid operation.');
          }

          return done();
        })();
      });

      test('does not throw an error if actual is throwing errX and errY is not expected (regex).', done => {
        (async function () {
          try {
            await throwingAsync.negated(async () => {
              throw new Error('Foo failed.');
            })(/Bar/);
          } catch (ex) {
            return done('Invalid operation.');
          }

          return done();
        })();
      });

      test('does not throw an error if actual is throwing errX and there is no errY expected.', done => {
        (async function () {
          try {
            await throwingAsync.negated(async () => {
              throw new Error('Foo failed.');
            })('');
          } catch (ex) {
            return done('Invalid operation.');
          }

          return done();
        })();
      });
    });
  });
});
