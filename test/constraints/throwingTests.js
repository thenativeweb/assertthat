'use strict';

var chai = require('chai').assert;

var throwing = require('../../lib/constraints/throwing');

suite('throwing', function () {
  test('is a function.', function (done) {
    chai.typeOf(throwing, 'function');
    done();
  });

  test('returns a constraint.', function (done) {
    chai.typeOf(throwing(function () {}), 'function');
    done();
  });

  suite('constraint', function () {
    test('throws an error if actual is not throwing an exception, although one is expected.', function (done) {
      chai.throw(function () {
        throwing(function () {})();
      }, 'Expected an exception.');
      done();
    });

    test('throws an error if actual is not throwing an exception, although one is expected with message.', function (done) {
      chai.throw(function () {
        throwing(function () {})('Foo failed.');
      }, 'Expected an exception with message \'Foo failed.\'.');
      done();
    });

    test('does not throw an error if actual is throwing as expected.', function (done) {
      chai.doesNotThrow(function () {
        throwing(function () {
          throw new Error('Foo failed.');
        })();
      });
      done();
    });

    test('does not throw an error if actual is throwing as expected with message.', function (done) {
      chai.doesNotThrow(function () {
        throwing(function () {
          throw new Error('Foo failed.');
        })('Foo failed.');
      });
      done();
    });

    test('does not throw an error if actual is throwing as expected with message (regex).', function (done) {
      chai.doesNotThrow(function () {
        throwing(function () {
          throw new Error('Foo failed.');
        })(/Foo/);
      });
      done();
    });

    test('throws an error if actual is throwing an exception as expected, but with wrong message.', function (done) {
      chai.throw(function () {
        throwing(function () {
          throw new Error('Foo failed.');
        })('Bar failed.');
      }, 'Expected \'Foo failed.\' to equal \'Bar failed.\'.');
      done();
    });

    test('throws an error if actual is throwing an exception as expected, but with wrong message (regex).', function (done) {
      chai.throw(function () {
        throwing(function () {
          throw new Error('Foo failed.');
        })(/Bar/);
      }, 'Expected \'Foo failed.\' to equal /Bar/.');
      done();
    });

    test('throws an error if actual is throwing an exception as expected, but not with empty message as expected.', function (done) {
      chai.throw(function () {
        throwing(function () {
          throw new Error('Foo failed.');
        })('');
      }, 'Expected \'Foo failed.\' to equal \'\'.');
      done();
    });
  });

  suite('negated', function () {
    test('is a function.', function (done) {
      chai.typeOf(throwing.negated, 'function');
      done();
    });

    test('returns a constraint.', function (done) {
      chai.typeOf(throwing.negated(function () {}), 'function');
      done();
    });

    suite('constraint', function () {
      test('does not throw an error if actual is not throwing at all as expected.', function (done) {
        chai.doesNotThrow(function () {
          throwing.negated(function () {})();
        });
        done();
      });

      test('throws an error if actual is throwing although no throwing at all is expected.', function (done) {
        chai.throw(function () {
          throwing.negated(function () {
            throw new Error('Foo failed.');
          })();
        });
        done();
      });

      test('does not throw an error if actual is not throwing and errX is not expected.', function (done) {
        chai.doesNotThrow(function () {
          throwing.negated(function () {})('Foo failed.');
        });
        done();
      });

      test('throws an error if actual is throwing errX and errY is not expected.', function (done) {
        chai.throw(function () {
          throwing.negated(function () {
            throw new Error('Foo failed.');
          })('Foo failed.');
        });
        done();
      });

      test('throws an error if actual is throwing errX and errY is not expected (regex).', function (done) {
        chai.throw(function () {
          throwing.negated(function () {
            throw new Error('Foo failed.');
          })(/Foo/);
        });
        done();
      });

      test('does not throw an error if actual is throwing errX and errY is not expected.', function (done) {
        chai.doesNotThrow(function () {
          throwing.negated(function () {
            throw new Error('Foo failed.');
          })('Bar failed.');
        });
        done();
      });

      test('does not throw an error if actual is throwing errX and errY is not expected (regex).', function (done) {
        chai.doesNotThrow(function () {
          throwing.negated(function () {
            throw new Error('Foo failed.');
          })(/Bar/);
        });
        done();
      });

      test('does not throw an error if actual is throwing errX and errY is not expected.', function (done) {
        chai.doesNotThrow(function () {
          throwing.negated(function () {
            throw new Error('Foo failed.');
          })('');
        });
        done();
      });
    });
  });
});
