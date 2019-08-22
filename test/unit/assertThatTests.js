'use strict';

const chai = require('chai').assert;

const assert = require('../../lib/assertThat');

suite('assert', () => {
  test('is an object.', done => {
    chai.typeOf(assert, 'object');
    done();
  });

  suite('that', () => {
    test('is a function.', done => {
      chai.typeOf(assert.that, 'function');
      done();
    });

    test('throws an error if actual is missing.', done => {
      chai.throw(() => {
        assert.that();
      }, 'Actual is missing.');
      done();
    });

    test('does not throw an error if actual is undefined.', done => {
      chai.doesNotThrow(() => {
        assert.that(undefined);
      });
      done();
    });

    test('returns an object.', done => {
      chai.typeOf(assert.that(23), 'object');
      done();
    });

    suite('is', () => {
      test('is an object.', done => {
        chai.typeOf(assert.that(23).is, 'object');
        done();
      });

      suite('has constraints', () => {
        test('atLeast.', done => {
          chai.typeOf(assert.that(23).is.atLeast, 'function');
          done();
        });

        test('atMost.', done => {
          chai.typeOf(assert.that(23).is.atMost, 'function');
          done();
        });

        test('between.', done => {
          chai.typeOf(assert.that(23).is.between, 'function');
          done();
        });

        test('containing.', done => {
          chai.typeOf(assert.that(23).is.containing, 'function');
          done();
        });

        test('containingAnyOf.', done => {
          chai.typeOf(assert.that(23).is.containingAnyOf, 'function');
          done();
        });

        test('containingAll.', done => {
          chai.typeOf(assert.that(23).is.containingAllOf, 'function');
          done();
        });

        test('endingWith.', done => {
          chai.typeOf(assert.that(23).is.endingWith, 'function');
          done();
        });

        test('equalTo.', done => {
          chai.typeOf(assert.that(23).is.equalTo, 'function');
          done();
        });

        test('false.', done => {
          chai.typeOf(assert.that(23).is.false, 'function');
          done();
        });

        test('falsy.', done => {
          chai.typeOf(assert.that(23).is.falsy, 'function');
          done();
        });

        test('greaterThan.', done => {
          chai.typeOf(assert.that(23).is.greaterThan, 'function');
          done();
        });

        test('instanceOf.', done => {
          chai.typeOf(assert.that(23).is.instanceOf, 'function');
          done();
        });

        test('lessThan.', done => {
          chai.typeOf(assert.that(23).is.lessThan, 'function');
          done();
        });

        test('matching.', done => {
          chai.typeOf(assert.that(23).is.matching, 'function');
          done();
        });

        test('NaN.', done => {
          chai.typeOf(assert.that(23).is.NaN, 'function');
          done();
        });

        test('null.', done => {
          chai.typeOf(assert.that(23).is.null, 'function');
          done();
        });

        test('ofType.', done => {
          chai.typeOf(assert.that(23).is.ofType, 'function');
          done();
        });

        test('sameAs.', done => {
          chai.typeOf(assert.that(23).is.sameAs, 'function');
          done();
        });

        test('sameJsonAs.', done => {
          chai.typeOf(assert.that(23).is.sameJsonAs, 'function');
          done();
        });

        test('startingWith.', done => {
          chai.typeOf(assert.that(23).is.startingWith, 'function');
          done();
        });

        test('throwing.', done => {
          chai.typeOf(assert.that(23).is.throwing, 'function');
          done();
        });

        test('true.', done => {
          chai.typeOf(assert.that(23).is.true, 'function');
          done();
        });

        test('undefined.', done => {
          chai.typeOf(assert.that(23).is.undefined, 'function');
          done();
        });
      });

      suite('not', () => {
        test('is an object.', done => {
          chai.typeOf(assert.that(23).is.not, 'object');
          done();
        });

        suite('has constraints', () => {
          test('atLeast.', done => {
            chai.typeOf(assert.that(23).is.not.atLeast, 'function');
            done();
          });

          test('atMost.', done => {
            chai.typeOf(assert.that(23).is.not.atMost, 'function');
            done();
          });

          test('between.', done => {
            chai.typeOf(assert.that(23).is.not.between, 'function');
            done();
          });

          test('containing.', done => {
            chai.typeOf(assert.that(23).is.not.containing, 'function');
            done();
          });

          test('containingAnyOf.', done => {
            chai.typeOf(assert.that([ 1, 2, 3 ]).is.not.containingAnyOf, 'function');
            done();
          });

          test('containingAll.', done => {
            chai.typeOf(assert.that(23).is.not.containingAllOf, 'function');
            done();
          });

          test('endingWith.', done => {
            chai.typeOf(assert.that(23).is.not.endingWith, 'function');
            done();
          });

          test('equalTo.', done => {
            chai.typeOf(assert.that(23).is.not.equalTo, 'function');
            done();
          });

          test('false.', done => {
            chai.typeOf(assert.that(23).is.not.false, 'function');
            done();
          });

          test('falsy.', done => {
            chai.typeOf(assert.that(23).is.not.falsy, 'function');
            done();
          });

          test('greaterThan.', done => {
            chai.typeOf(assert.that(23).is.not.greaterThan, 'function');
            done();
          });

          test('instanceOf.', done => {
            chai.typeOf(assert.that(23).is.not.instanceOf, 'function');
            done();
          });

          test('lessThan.', done => {
            chai.typeOf(assert.that(23).is.not.lessThan, 'function');
            done();
          });

          test('matching.', done => {
            chai.typeOf(assert.that(23).is.not.matching, 'function');
            done();
          });

          test('NaN.', done => {
            chai.typeOf(assert.that(23).is.not.NaN, 'function');
            done();
          });

          test('null.', done => {
            chai.typeOf(assert.that(23).is.not.null, 'function');
            done();
          });

          test('ofType.', done => {
            chai.typeOf(assert.that(23).is.not.ofType, 'function');
            done();
          });

          test('sameAs.', done => {
            chai.typeOf(assert.that(23).is.not.sameAs, 'function');
            done();
          });

          test('sameJsonAs.', done => {
            chai.typeOf(assert.that(23).is.not.sameJsonAs, 'function');
            done();
          });

          test('startingWith.', done => {
            chai.typeOf(assert.that(23).is.not.startingWith, 'function');
            done();
          });

          test('throwing.', done => {
            chai.typeOf(assert.that(23).is.not.throwing, 'function');
            done();
          });

          test('true.', done => {
            chai.typeOf(assert.that(23).is.not.true, 'function');
            done();
          });

          test('undefined.', done => {
            chai.typeOf(assert.that(23).is.not.undefined, 'function');
            done();
          });
        });
      });
    });
  });
});
