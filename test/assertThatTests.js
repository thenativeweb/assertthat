'use strict';

var chai = require('chai').assert;

var assert = require('../lib/assertThat');

suite('assert', function () {
  test('is an object.', function (done) {
    chai.typeOf(assert, 'object');
    done();
  });

  suite('that', function () {
    test('is a function.', function (done) {
      chai.typeOf(assert.that, 'function');
      done();
    });

    test('throws an error if actual is missing.', function (done) {
      chai.throw(function () {
        assert.that();
      }, 'Actual is missing.');
      done();
    });

    test('does not throw an error if actual is undefined.', function (done) {
      chai.doesNotThrow(function () {
        assert.that(undefined);
      });
      done();
    });

    test('returns an object.', function (done) {
      chai.typeOf(assert.that(23), 'object');
      done();
    });

    suite('is', function () {
      test('is an object.', function (done) {
        chai.typeOf(assert.that(23).is, 'object');
        done();
      });

      suite('has constraints', function () {
        test('atLeast.', function (done) {
          chai.typeOf(assert.that(23).is.atLeast, 'function');
          done();
        });

        test('atMost.', function (done) {
          chai.typeOf(assert.that(23).is.atMost, 'function');
          done();
        });

        test('between.', function (done) {
          chai.typeOf(assert.that(23).is.between, 'function');
          done();
        });

        test('containing.', function (done) {
          chai.typeOf(assert.that(23).is.containing, 'function');
          done();
        });

        test('endingWith.', function (done) {
          chai.typeOf(assert.that(23).is.endingWith, 'function');
          done();
        });

        test('equalTo.', function (done) {
          chai.typeOf(assert.that(23).is.equalTo, 'function');
          done();
        });

        test('false.', function (done) {
          chai.typeOf(assert.that(23).is.false, 'function');
          done();
        });

        test('falsy.', function (done) {
          chai.typeOf(assert.that(23).is.falsy, 'function');
          done();
        });

        test('greaterThan.', function (done) {
          chai.typeOf(assert.that(23).is.greaterThan, 'function');
          done();
        });

        test('instanceOf.', function (done) {
          chai.typeOf(assert.that(23).is.instanceOf, 'function');
          done();
        });

        test('lessThan.', function (done) {
          chai.typeOf(assert.that(23).is.lessThan, 'function');
          done();
        });

        test('NaN.', function (done) {
          chai.typeOf(assert.that(23).is.NaN, 'function');
          done();
        });

        test('null.', function (done) {
          chai.typeOf(assert.that(23).is.null, 'function');
          done();
        });

        test('ofType.', function (done) {
          chai.typeOf(assert.that(23).is.ofType, 'function');
          done();
        });

        test('sameAs.', function (done) {
          chai.typeOf(assert.that(23).is.sameAs, 'function');
          done();
        });

        test('startingWith.', function (done) {
          chai.typeOf(assert.that(23).is.startingWith, 'function');
          done();
        });

        test('throwing.', function (done) {
          chai.typeOf(assert.that(23).is.throwing, 'function');
          done();
        });

        test('true.', function (done) {
          chai.typeOf(assert.that(23).is.true, 'function');
          done();
        });

        test('undefined.', function (done) {
          chai.typeOf(assert.that(23).is.undefined, 'function');
          done();
        });
      });

      suite('not', function () {
        test('is an object.', function (done) {
          chai.typeOf(assert.that(23).is.not, 'object');
          done();
        });

        suite('has constraints', function () {
          test('atLeast.', function (done) {
            chai.typeOf(assert.that(23).is.not.atLeast, 'function');
            done();
          });

          test('atMost.', function (done) {
            chai.typeOf(assert.that(23).is.not.atMost, 'function');
            done();
          });

          test('between.', function (done) {
            chai.typeOf(assert.that(23).is.not.between, 'function');
            done();
          });

          test('containing.', function (done) {
            chai.typeOf(assert.that(23).is.not.containing, 'function');
            done();
          });

          test('endingWith.', function (done) {
            chai.typeOf(assert.that(23).is.not.endingWith, 'function');
            done();
          });

          test('equalTo.', function (done) {
            chai.typeOf(assert.that(23).is.not.equalTo, 'function');
            done();
          });

          test('false.', function (done) {
            chai.typeOf(assert.that(23).is.not.false, 'function');
            done();
          });

          test('falsy.', function (done) {
            chai.typeOf(assert.that(23).is.not.falsy, 'function');
            done();
          });

          test('greaterThan.', function (done) {
            chai.typeOf(assert.that(23).is.not.greaterThan, 'function');
            done();
          });

          test('instanceOf.', function (done) {
            chai.typeOf(assert.that(23).is.not.instanceOf, 'function');
            done();
          });

          test('lessThan.', function (done) {
            chai.typeOf(assert.that(23).is.not.lessThan, 'function');
            done();
          });

          test('NaN.', function (done) {
            chai.typeOf(assert.that(23).is.not.NaN, 'function');
            done();
          });

          test('null.', function (done) {
            chai.typeOf(assert.that(23).is.not.null, 'function');
            done();
          });

          test('ofType.', function (done) {
            chai.typeOf(assert.that(23).is.not.ofType, 'function');
            done();
          });

          test('sameAs.', function (done) {
            chai.typeOf(assert.that(23).is.not.sameAs, 'function');
            done();
          });

          test('startingWith.', function (done) {
            chai.typeOf(assert.that(23).is.not.startingWith, 'function');
            done();
          });

          test('throwing.', function (done) {
            chai.typeOf(assert.that(23).is.not.throwing, 'function');
            done();
          });

          test('true.', function (done) {
            chai.typeOf(assert.that(23).is.not.true, 'function');
            done();
          });

          test('undefined.', function (done) {
            chai.typeOf(assert.that(23).is.not.undefined, 'function');
            done();
          });
        });
      });
    });
  });
});
