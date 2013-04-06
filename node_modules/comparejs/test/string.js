var cmp = require('../lib/index'),
    should = require('should');

suite('string x string', function () {
  var foo   = 'foo',
      bar   = 'bar',
      Foo   = new String('foo'),
      Bar   = new String('bar'),
      empty = '',
      Empty = new String('');

  suite('eq', function () {
    suite('equal => true', function () {
      test('string x string'    , function () { cmp.eq(foo  ,   foo).should.equal(true); });
      test('string x String()'  , function () { cmp.eq(foo  ,   Foo).should.equal(true); });
      test('String() x string'  , function () { cmp.eq(Foo  ,   foo).should.equal(true); });
      test('String() x String()', function () { cmp.eq(Foo  ,   Foo).should.equal(true); });
      test('empty x empty'      , function () { cmp.eq(empty, empty).should.equal(true); });
      test('empty x Empty()'    , function () { cmp.eq(empty, Empty).should.equal(true); });
      test('Empty() x empty'    , function () { cmp.eq(Empty, empty).should.equal(true); });
      test('Empty() x Empty()'  , function () { cmp.eq(Empty, Empty).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('string x string'    , function () { cmp.eq(foo  ,   bar).should.equal(false); });
      test('string x String()'  , function () { cmp.eq(foo  ,   Bar).should.equal(false); });
      test('String() x string'  , function () { cmp.eq(Foo  ,   bar).should.equal(false); });
      test('String() x String()', function () { cmp.eq(Foo  ,   Bar).should.equal(false); });
      test('string x empty'     , function () { cmp.eq(foo  , empty).should.equal(false); });
      test('string x Empty()'   , function () { cmp.eq(foo  , Empty).should.equal(false); });
      test('String() x empty'   , function () { cmp.eq(Foo  , empty).should.equal(false); });
      test('String() x Empty()' , function () { cmp.eq(Foo  , Empty).should.equal(false); });
      test('empty x string'     , function () { cmp.eq(empty,   foo).should.equal(false); });
      test('empty x String()'   , function () { cmp.eq(empty,   Foo).should.equal(false); });
      test('Empty() x string'   , function () { cmp.eq(Empty,   foo).should.equal(false); });
      test('Empty() x String()' , function () { cmp.eq(Empty,   Foo).should.equal(false); });
    });
  });

  suite('eqs', function () {
    suite('any => false', function () {
      test('string x string', function () { cmp.eqs(foo, foo).should.equal(false); });
    });
  });

  suite('ne', function () {
    suite('equal => false', function () {
      test('string x string'    , function () { cmp.ne(foo  ,   foo).should.equal(false); });
      test('string x String()'  , function () { cmp.ne(foo  ,   Foo).should.equal(false); });
      test('String() x string'  , function () { cmp.ne(Foo  ,   foo).should.equal(false); });
      test('String() x String()', function () { cmp.ne(Foo  ,   Foo).should.equal(false); });
      test('empty x empty'      , function () { cmp.ne(empty, empty).should.equal(false); });
      test('empty x Empty()'    , function () { cmp.ne(empty, Empty).should.equal(false); });
      test('Empty() x empty'    , function () { cmp.ne(Empty, empty).should.equal(false); });
      test('Empty() x Empty()'  , function () { cmp.ne(Empty, Empty).should.equal(false); });
    });

    suite('not equal => true', function () {
      test('string x string'    , function () { cmp.ne(foo  ,   bar).should.equal(true); });
      test('string x String()'  , function () { cmp.ne(foo  ,   Bar).should.equal(true); });
      test('String() x string'  , function () { cmp.ne(Foo  ,   bar).should.equal(true); });
      test('String() x String()', function () { cmp.ne(Foo  ,   Bar).should.equal(true); });
      test('string x empty'     , function () { cmp.ne(foo  , empty).should.equal(true); });
      test('string x Empty()'   , function () { cmp.ne(foo  , Empty).should.equal(true); });
      test('String() x empty'   , function () { cmp.ne(Foo  , empty).should.equal(true); });
      test('String() x Empty()' , function () { cmp.ne(Foo  , Empty).should.equal(true); });
      test('empty x string'     , function () { cmp.ne(empty,   foo).should.equal(true); });
      test('empty x String()'   , function () { cmp.ne(empty,   Foo).should.equal(true); });
      test('Empty() x string'   , function () { cmp.ne(Empty,   foo).should.equal(true); });
      test('Empty() x String()' , function () { cmp.ne(Empty,   Foo).should.equal(true); });
    });
  });

  suite('nes', function () {
    suite('any => false', function () {
      test('string x string', function () { cmp.nes(foo, foo).should.equal(false); });
    });
  });

  suite('gt', function () {
    suite('greater => true', function () {
      test('string x string'    , function () { cmp.gt(foo,   bar).should.equal(true); });
      test('string x String()'  , function () { cmp.gt(foo,   Bar).should.equal(true); });
      test('String() x string'  , function () { cmp.gt(Foo,   bar).should.equal(true); });
      test('String() x String()', function () { cmp.gt(Foo,   Bar).should.equal(true); });
      test('string x empty'     , function () { cmp.gt(foo, empty).should.equal(true); });
      test('string x Empty()'   , function () { cmp.gt(foo, Empty).should.equal(true); });
      test('String() x empty'   , function () { cmp.gt(Foo, empty).should.equal(true); });
      test('String() x Empty()' , function () { cmp.gt(Foo, Empty).should.equal(true); });
    });

    suite('equal => false', function () {
      test('string x string'    , function () { cmp.gt(foo  ,   foo).should.equal(false); });
      test('string x String()'  , function () { cmp.gt(foo  ,   Foo).should.equal(false); });
      test('String() x string'  , function () { cmp.gt(Foo  ,   foo).should.equal(false); });
      test('String() x String()', function () { cmp.gt(Foo  ,   Foo).should.equal(false); });
      test('empty x empty'      , function () { cmp.gt(empty, empty).should.equal(false); });
      test('empty x Empty()'    , function () { cmp.gt(empty, Empty).should.equal(false); });
      test('Empty() x empty'    , function () { cmp.gt(Empty, empty).should.equal(false); });
      test('Empty() x Empty()'  , function () { cmp.gt(Empty, Empty).should.equal(false); });
    });

    suite('less => false', function () {
      test('string x string'    , function () { cmp.gt(bar  , foo).should.equal(false); });
      test('string x String()'  , function () { cmp.gt(bar  , Foo).should.equal(false); });
      test('String() x string'  , function () { cmp.gt(Bar  , foo).should.equal(false); });
      test('String() x String()', function () { cmp.gt(Bar  , Foo).should.equal(false); });
      test('empty x string'     , function () { cmp.gt(empty, foo).should.equal(false); });
      test('empty x String()'   , function () { cmp.gt(empty, Foo).should.equal(false); });
      test('Empty() x string'   , function () { cmp.gt(Empty, foo).should.equal(false); });
      test('Empty() x String()' , function () { cmp.gt(Empty, Foo).should.equal(false); });
    });
  });

  suite('gts', function () {
    suite('any => false', function () {
      test('string x string', function () { cmp.gts(foo, foo).should.equal(false); });
    });
  });

  suite('ge', function () {
    suite('greater => true', function () {
      test('string x string'    , function () { cmp.ge(foo,   bar).should.equal(true); });
      test('string x String()'  , function () { cmp.ge(foo,   Bar).should.equal(true); });
      test('String() x string'  , function () { cmp.ge(Foo,   bar).should.equal(true); });
      test('String() x String()', function () { cmp.ge(Foo,   Bar).should.equal(true); });
      test('string x empty'     , function () { cmp.ge(foo, empty).should.equal(true); });
      test('string x Empty()'   , function () { cmp.ge(foo, Empty).should.equal(true); });
      test('String() x empty'   , function () { cmp.ge(Foo, empty).should.equal(true); });
      test('String() x Empty()' , function () { cmp.ge(Foo, Empty).should.equal(true); });
    });

    suite('equal => true', function () {
      test('string x string'    , function () { cmp.ge(foo  ,   foo).should.equal(true); });
      test('string x String()'  , function () { cmp.ge(foo  ,   Foo).should.equal(true); });
      test('String() x string'  , function () { cmp.ge(Foo  ,   foo).should.equal(true); });
      test('String() x String()', function () { cmp.ge(Foo  ,   Foo).should.equal(true); });
      test('empty x empty'      , function () { cmp.ge(empty, empty).should.equal(true); });
      test('empty x Empty()'    , function () { cmp.ge(empty, Empty).should.equal(true); });
      test('Empty() x empty'    , function () { cmp.ge(Empty, empty).should.equal(true); });
      test('Empty() x Empty()'  , function () { cmp.ge(Empty, Empty).should.equal(true); });
    });

    suite('less => false', function () {
      test('string x string'    , function () { cmp.ge(bar  , foo).should.equal(false); });
      test('string x String()'  , function () { cmp.ge(bar  , Foo).should.equal(false); });
      test('String() x string'  , function () { cmp.ge(Bar  , foo).should.equal(false); });
      test('String() x String()', function () { cmp.ge(Bar  , Foo).should.equal(false); });
      test('empty x string'     , function () { cmp.ge(empty, foo).should.equal(false); });
      test('empty x String()'   , function () { cmp.ge(empty, Foo).should.equal(false); });
      test('Empty() x string'   , function () { cmp.ge(Empty, foo).should.equal(false); });
      test('Empty() x String()' , function () { cmp.ge(Empty, Foo).should.equal(false); });
    });
  });

  suite('ges', function () {
    suite('any => false', function () {
      test('string x string', function () { cmp.ges(foo, foo).should.equal(false); });
    });
  });

  suite('lt', function () {
    suite('greater => false', function () {
      test('string x string'    , function () { cmp.lt(foo,   bar).should.equal(false); });
      test('string x String()'  , function () { cmp.lt(foo,   Bar).should.equal(false); });
      test('String() x string'  , function () { cmp.lt(Foo,   bar).should.equal(false); });
      test('String() x String()', function () { cmp.lt(Foo,   Bar).should.equal(false); });
      test('string x empty'     , function () { cmp.lt(foo, empty).should.equal(false); });
      test('string x Empty()'   , function () { cmp.lt(foo, Empty).should.equal(false); });
      test('String() x empty'   , function () { cmp.lt(Foo, empty).should.equal(false); });
      test('String() x Empty()' , function () { cmp.lt(Foo, Empty).should.equal(false); });
    });

    suite('equal => false', function () {
      test('string x string'    , function () { cmp.lt(foo  ,   foo).should.equal(false); });
      test('string x String()'  , function () { cmp.lt(foo  ,   Foo).should.equal(false); });
      test('String() x string'  , function () { cmp.lt(Foo  ,   foo).should.equal(false); });
      test('String() x String()', function () { cmp.lt(Foo  ,   Foo).should.equal(false); });
      test('empty x empty'      , function () { cmp.lt(empty, empty).should.equal(false); });
      test('empty x Empty()'    , function () { cmp.lt(empty, Empty).should.equal(false); });
      test('Empty() x empty'    , function () { cmp.lt(Empty, empty).should.equal(false); });
      test('Empty() x Empty()'  , function () { cmp.lt(Empty, Empty).should.equal(false); });
    });

    suite('less => true', function () {
      test('string x string'    , function () { cmp.lt(bar  , foo).should.equal(true); });
      test('string x String()'  , function () { cmp.lt(bar  , Foo).should.equal(true); });
      test('String() x string'  , function () { cmp.lt(Bar  , foo).should.equal(true); });
      test('String() x String()', function () { cmp.lt(Bar  , Foo).should.equal(true); });
      test('empty x string'     , function () { cmp.lt(empty, foo).should.equal(true); });
      test('empty x String()'   , function () { cmp.lt(empty, Foo).should.equal(true); });
      test('Empty() x string'   , function () { cmp.lt(Empty, foo).should.equal(true); });
      test('Empty() x String()' , function () { cmp.lt(Empty, Foo).should.equal(true); });
    });
  });

  suite('lts', function () {
    suite('any => false', function () {
      test('string x string', function () { cmp.lts(foo, foo).should.equal(false); });
    });
  });

  suite('le', function () {
    suite('greater => false', function () {
      test('string x string'    , function () { cmp.le(foo,   bar).should.equal(false); });
      test('string x String()'  , function () { cmp.le(foo,   Bar).should.equal(false); });
      test('String() x string'  , function () { cmp.le(Foo,   bar).should.equal(false); });
      test('String() x String()', function () { cmp.le(Foo,   Bar).should.equal(false); });
      test('string x empty'     , function () { cmp.le(foo, empty).should.equal(false); });
      test('string x Empty()'   , function () { cmp.le(foo, Empty).should.equal(false); });
      test('String() x empty'   , function () { cmp.le(Foo, empty).should.equal(false); });
      test('String() x Empty()' , function () { cmp.le(Foo, Empty).should.equal(false); });
    });

    suite('equal => true', function () {
      test('string x string'    , function () { cmp.le(foo  ,   foo).should.equal(true); });
      test('string x String()'  , function () { cmp.le(foo  ,   Foo).should.equal(true); });
      test('String() x string'  , function () { cmp.le(Foo  ,   foo).should.equal(true); });
      test('String() x String()', function () { cmp.le(Foo  ,   Foo).should.equal(true); });
      test('empty x empty'      , function () { cmp.le(empty, empty).should.equal(true); });
      test('empty x Empty()'    , function () { cmp.le(empty, Empty).should.equal(true); });
      test('Empty() x empty'    , function () { cmp.le(Empty, empty).should.equal(true); });
      test('Empty() x Empty()'  , function () { cmp.le(Empty, Empty).should.equal(true); });
    });

    suite('less => true', function () {
      test('string x string'    , function () { cmp.le(bar  , foo).should.equal(true); });
      test('string x String()'  , function () { cmp.le(bar  , Foo).should.equal(true); });
      test('String() x string'  , function () { cmp.le(Bar  , foo).should.equal(true); });
      test('String() x String()', function () { cmp.le(Bar  , Foo).should.equal(true); });
      test('empty x string'     , function () { cmp.le(empty, foo).should.equal(true); });
      test('empty x String()'   , function () { cmp.le(empty, Foo).should.equal(true); });
      test('Empty() x string'   , function () { cmp.le(Empty, foo).should.equal(true); });
      test('Empty() x String()' , function () { cmp.le(Empty, Foo).should.equal(true); });
    });
  });

  suite('les', function () {
    suite('any => false', function () {
      test('string x string', function () { cmp.les(foo, foo).should.equal(false); });
    });
  });

  suite('id', function () {
    suite('identical => true', function () {
      test('string x string'    , function () { cmp.id(foo  ,   foo).should.equal(true); });
      test('string x String()'  , function () { cmp.id(foo  ,   Foo).should.equal(true); });
      test('String() x string'  , function () { cmp.id(Foo  ,   foo).should.equal(true); });
      test('String() x String()', function () { cmp.id(Foo  ,   Foo).should.equal(true); });
      test('empty x empty'      , function () { cmp.id(empty, empty).should.equal(true); });
      test('empty x Empty()'    , function () { cmp.id(empty, Empty).should.equal(true); });
      test('Empty() x empty'    , function () { cmp.id(Empty, empty).should.equal(true); });
      test('Empty() x Empty()'  , function () { cmp.id(Empty, Empty).should.equal(true); });
    });

    suite('not identical => false', function () {
      test('string x string'    , function () { cmp.id(foo  ,   bar).should.equal(false); });
      test('string x String()'  , function () { cmp.id(foo  ,   Bar).should.equal(false); });
      test('String() x string'  , function () { cmp.id(Foo  ,   bar).should.equal(false); });
      test('String() x String()', function () { cmp.id(Foo  ,   Bar).should.equal(false); });
      test('string x empty'     , function () { cmp.id(foo  , empty).should.equal(false); });
      test('string x Empty()'   , function () { cmp.id(foo  , Empty).should.equal(false); });
      test('String() x empty'   , function () { cmp.id(Foo  , empty).should.equal(false); });
      test('String() x Empty()' , function () { cmp.id(Foo  , Empty).should.equal(false); });
      test('empty x string'     , function () { cmp.id(empty,   foo).should.equal(false); });
      test('empty x String()'   , function () { cmp.id(empty,   Foo).should.equal(false); });
      test('Empty() x string'   , function () { cmp.id(Empty,   foo).should.equal(false); });
      test('Empty() x String()' , function () { cmp.id(Empty,   Foo).should.equal(false); });
    });
  });
});