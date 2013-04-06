var cmp = require('../lib/index'),
    should = require('should');

suite('array x array', function () {
  var a1 = [ 2 ],
      a2 = [ 2 ],
      b1 = [ 3 ],
      A1 = new Array(),
      A2 = new Array(),
      B1 = new Array(),
      empty = [],
      Empty = new Array();

  A1.push(2);
  A2.push(2);
  B1.push(3);

  suite('eq', function () {
    suite('equal => true', function () {
      test('array x array'    , function () { cmp.eq(  a1,   a2).should.equal(true); });
      test('array x Array()'  , function () { cmp.eq(  a1,   A1).should.equal(true); });
      test('Array() x array'  , function () { cmp.eq(  A1,   a1).should.equal(true); });
      test('Array() x Array()', function () { cmp.eq(  A1,   A2).should.equal(true); });
      test('null x null'      , function () { cmp.eq(null, null).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('array x array'    , function () { cmp.eq(  a1,   b1).should.equal(false); });
      test('array x Array()'  , function () { cmp.eq(  a1,   B1).should.equal(false); });
      test('Array() x array'  , function () { cmp.eq(  A1,   b1).should.equal(false); });
      test('Array() x Array()', function () { cmp.eq(  A1,   B1).should.equal(false); });
      test('array x null'     , function () { cmp.eq(  a1, null).should.equal(false); });
      test('Array() x null'   , function () { cmp.eq(  A1, null).should.equal(false); });
      test('null x array'     , function () { cmp.eq(null,   a1).should.equal(false); });
      test('null x Array()'   , function () { cmp.eq(null,   A1).should.equal(false); });
    });
  });

  suite('eqs', function () {
    suite('any => false', function () {
      test('array x array'    , function () { cmp.eqs(a1, a1).should.equal(false); });
    });
  });

  suite('ne', function () {
    suite('equal => false', function () {
      test('array x array'    , function () { cmp.ne(  a1,   a2).should.equal(false); });
      test('array x Array()'  , function () { cmp.ne(  a1,   A1).should.equal(false); });
      test('Array() x array'  , function () { cmp.ne(  A1,   a1).should.equal(false); });
      test('Array() x Array()', function () { cmp.ne(  A1,   A2).should.equal(false); });
      test('null x null'      , function () { cmp.ne(null, null).should.equal(false); });
    });

    suite('not equal => true', function () {
      test('array x array'    , function () { cmp.ne(  a1,   b1).should.equal(true); });
      test('array x Array()'  , function () { cmp.ne(  a1,   B1).should.equal(true); });
      test('Array() x array'  , function () { cmp.ne(  A1,   b1).should.equal(true); });
      test('Array() x Array()', function () { cmp.ne(  A1,   B1).should.equal(true); });
      test('array x null'     , function () { cmp.ne(  a1, null).should.equal(true); });
      test('Array() x null'   , function () { cmp.ne(  A1, null).should.equal(true); });
      test('null x array'     , function () { cmp.ne(null,   a1).should.equal(true); });
      test('null x Array()'   , function () { cmp.ne(null,   A1).should.equal(true); });
    });
  });

  suite('nes', function () {
    suite('any => false', function () {
      test('array x array'    , function () { cmp.nes(a1, a1).should.equal(false); });
    });
  });

  suite('gt', function () {
    suite('greater than => true', function () {
      test('array x array'    , function () { cmp.gt(a1, empty).should.equal(true); });
      test('array x Array()'  , function () { cmp.gt(a1, Empty).should.equal(true); });
      test('Array() x array'  , function () { cmp.gt(A1, empty).should.equal(true); });
      test('Array() x Array()', function () { cmp.gt(A1, Empty).should.equal(true); });
    });

    suite('equal => false', function () {
      test('array x array'    , function () { cmp.gt(  a1,   a2).should.equal(false); });
      test('array x Array()'  , function () { cmp.gt(  a1,   A1).should.equal(false); });
      test('Array() x array'  , function () { cmp.gt(  A1,   a1).should.equal(false); });
      test('Array() x Array()', function () { cmp.gt(  A1,   A2).should.equal(false); });
      test('null x null'      , function () { cmp.gt(null, null).should.equal(false); });
    });

    suite('not equal => false', function () {
      test('array x array'    , function () { cmp.gt(  a1,   b1).should.equal(false); });
      test('array x Array()'  , function () { cmp.gt(  a1,   B1).should.equal(false); });
      test('Array() x array'  , function () { cmp.gt(  A1,   b1).should.equal(false); });
      test('Array() x Array()', function () { cmp.gt(  A1,   B1).should.equal(false); });
      test('array x null'     , function () { cmp.gt(  a1, null).should.equal(false); });
      test('Array() x null'   , function () { cmp.gt(  A1, null).should.equal(false); });
      test('null x array'     , function () { cmp.gt(null,   a1).should.equal(false); });
      test('null x Array()'   , function () { cmp.gt(null,   A1).should.equal(false); });
    });

    suite('less than => false', function () {
      test('array x array'    , function () { cmp.gt(empty, a1).should.equal(false); });
      test('array x Array()'  , function () { cmp.gt(Empty, a1).should.equal(false); });
      test('Array() x array'  , function () { cmp.gt(empty, A1).should.equal(false); });
      test('Array() x Array()', function () { cmp.gt(Empty, A1).should.equal(false); });
    });
  });

  suite('gts', function () {
    suite('any => false', function () {
      test('array x array'    , function () { cmp.gts(a1, a1).should.equal(false); });
    });
  });

  suite('ge', function () {
    suite('greater than => true', function () {
      test('array x array'    , function () { cmp.ge(a1, empty).should.equal(true); });
      test('array x Array()'  , function () { cmp.ge(a1, Empty).should.equal(true); });
      test('Array() x array'  , function () { cmp.ge(A1, empty).should.equal(true); });
      test('Array() x Array()', function () { cmp.ge(A1, Empty).should.equal(true); });
    });

    suite('equal => true', function () {
      test('array x array'    , function () { cmp.ge(  a1,   a2).should.equal(true); });
      test('array x Array()'  , function () { cmp.ge(  a1,   A1).should.equal(true); });
      test('Array() x array'  , function () { cmp.ge(  A1,   a1).should.equal(true); });
      test('Array() x Array()', function () { cmp.ge(  A1,   A2).should.equal(true); });
      test('null x null'      , function () { cmp.ge(null, null).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('array x array'    , function () { cmp.ge(  a1,   b1).should.equal(false); });
      test('array x Array()'  , function () { cmp.ge(  a1,   B1).should.equal(false); });
      test('Array() x array'  , function () { cmp.ge(  A1,   b1).should.equal(false); });
      test('Array() x Array()', function () { cmp.ge(  A1,   B1).should.equal(false); });
      test('array x null'     , function () { cmp.ge(  a1, null).should.equal(false); });
      test('Array() x null'   , function () { cmp.ge(  A1, null).should.equal(false); });
      test('null x array'     , function () { cmp.ge(null,   a1).should.equal(false); });
      test('null x Array()'   , function () { cmp.ge(null,   A1).should.equal(false); });
    });

    suite('less than => false', function () {
      test('array x array'    , function () { cmp.ge(empty, a1).should.equal(false); });
      test('array x Array()'  , function () { cmp.ge(Empty, a1).should.equal(false); });
      test('Array() x array'  , function () { cmp.ge(empty, A1).should.equal(false); });
      test('Array() x Array()', function () { cmp.ge(Empty, A1).should.equal(false); });
    });
  });

  suite('ges', function () {
    suite('any => false', function () {
      test('array x array'    , function () { cmp.ges(a1, a1).should.equal(false); });
    });
  });

  suite('lt', function () {
    suite('greater than => false', function () {
      test('array x array'    , function () { cmp.lt(a1, empty).should.equal(false); });
      test('array x Array()'  , function () { cmp.lt(a1, Empty).should.equal(false); });
      test('Array() x array'  , function () { cmp.lt(A1, empty).should.equal(false); });
      test('Array() x Array()', function () { cmp.lt(A1, Empty).should.equal(false); });
    });

    suite('equal => false', function () {
      test('array x array'    , function () { cmp.lt(  a1,   a2).should.equal(false); });
      test('array x Array()'  , function () { cmp.lt(  a1,   A1).should.equal(false); });
      test('Array() x array'  , function () { cmp.lt(  A1,   a1).should.equal(false); });
      test('Array() x Array()', function () { cmp.lt(  A1,   A2).should.equal(false); });
      test('null x null'      , function () { cmp.lt(null, null).should.equal(false); });
    });

    suite('not equal => false', function () {
      test('array x array'    , function () { cmp.lt(  a1,   b1).should.equal(false); });
      test('array x Array()'  , function () { cmp.lt(  a1,   B1).should.equal(false); });
      test('Array() x array'  , function () { cmp.lt(  A1,   b1).should.equal(false); });
      test('Array() x Array()', function () { cmp.lt(  A1,   B1).should.equal(false); });
      test('array x null'     , function () { cmp.lt(  a1, null).should.equal(false); });
      test('Array() x null'   , function () { cmp.lt(  A1, null).should.equal(false); });
      test('null x array'     , function () { cmp.lt(null,   a1).should.equal(false); });
      test('null x Array()'   , function () { cmp.lt(null,   A1).should.equal(false); });
    });

    suite('less than => true', function () {
      test('array x array'    , function () { cmp.lt(empty, a1).should.equal(true); });
      test('array x Array()'  , function () { cmp.lt(Empty, a1).should.equal(true); });
      test('Array() x array'  , function () { cmp.lt(empty, A1).should.equal(true); });
      test('Array() x Array()', function () { cmp.lt(Empty, A1).should.equal(true); });
    });
  });

  suite('lts', function () {
    suite('any => false', function () {
      test('array x array'    , function () { cmp.lts(a1, a1).should.equal(false); });
    });
  });

  suite('le', function () {
    suite('greater than => false', function () {
      test('array x array'    , function () { cmp.le(a1, empty).should.equal(false); });
      test('array x Array()'  , function () { cmp.le(a1, Empty).should.equal(false); });
      test('Array() x array'  , function () { cmp.le(A1, empty).should.equal(false); });
      test('Array() x Array()', function () { cmp.le(A1, Empty).should.equal(false); });
    });

    suite('equal => true', function () {
      test('array x array'    , function () { cmp.le(  a1,   a2).should.equal(true); });
      test('array x Array()'  , function () { cmp.le(  a1,   A1).should.equal(true); });
      test('Array() x array'  , function () { cmp.le(  A1,   a1).should.equal(true); });
      test('Array() x Array()', function () { cmp.le(  A1,   A2).should.equal(true); });
      test('null x null'      , function () { cmp.le(null, null).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('array x array'    , function () { cmp.le(  a1,   b1).should.equal(false); });
      test('array x Array()'  , function () { cmp.le(  a1,   B1).should.equal(false); });
      test('Array() x array'  , function () { cmp.le(  A1,   b1).should.equal(false); });
      test('Array() x Array()', function () { cmp.le(  A1,   B1).should.equal(false); });
      test('array x null'     , function () { cmp.le(  a1, null).should.equal(false); });
      test('Array() x null'   , function () { cmp.le(  A1, null).should.equal(false); });
      test('null x array'     , function () { cmp.le(null,   a1).should.equal(false); });
      test('null x Array()'   , function () { cmp.le(null,   A1).should.equal(false); });
    });

    suite('less than => true', function () {
      test('array x array'    , function () { cmp.le(empty, a1).should.equal(true); });
      test('array x Array()'  , function () { cmp.le(Empty, a1).should.equal(true); });
      test('Array() x array'  , function () { cmp.le(empty, A1).should.equal(true); });
      test('Array() x Array()', function () { cmp.le(Empty, A1).should.equal(true); });
    });
  });

  suite('les', function () {
    suite('any => false', function () {
      test('array x array'    , function () { cmp.les(a1, a1).should.equal(false); });
    });
  });

  suite('id', function () {
    suite('identical => true', function () {
      test('array x array'    , function () { cmp.id(  a1,   a1).should.equal(true); });
      test('Array() x Array()', function () { cmp.id(  A1,   A1).should.equal(true); });
      test('null x null'      , function () { cmp.id(null, null).should.equal(true); });
    });

    suite('not identical => false', function () {
      test('array x array'    , function () { cmp.id(  a1,   a2).should.equal(false); });
      test('array x Array()'  , function () { cmp.id(  a1,   A1).should.equal(false); });
      test('Array() x array'  , function () { cmp.id(  A1,   a1).should.equal(false); });
      test('Array() x Array()', function () { cmp.id(  A1,   A2).should.equal(false); });
    });
  });
});