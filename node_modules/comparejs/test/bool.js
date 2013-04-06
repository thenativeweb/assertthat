var cmp = require('../lib/index'),
    should = require('should');

suite('bool x bool', function () {
  var True = new Boolean(true),
      False = new Boolean(false);

  suite('eq', function () {
    suite('equal => true', function () {
      test('true    x true'   , function () { cmp.eq(true ,  true).should.equal(true); });
      test('true    x True()' , function () { cmp.eq(true ,  True).should.equal(true); });
      test('True()  x true'   , function () { cmp.eq(True ,  true).should.equal(true); });
      test('True()  x True()' , function () { cmp.eq(True ,  True).should.equal(true); });
      test('false   x false'  , function () { cmp.eq(false, false).should.equal(true); });
      test('false   x False()', function () { cmp.eq(false, False).should.equal(true); });
      test('False() x false'  , function () { cmp.eq(False, false).should.equal(true); });
      test('False() x False()', function () { cmp.eq(False, False).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('true    x false'  , function () { cmp.eq(true , false).should.equal(false); });
      test('true    x False()', function () { cmp.eq(true , False).should.equal(false); });
      test('True()  x false'  , function () { cmp.eq(True , false).should.equal(false); });
      test('True()  x False()', function () { cmp.eq(True , False).should.equal(false); });
      test('false   x true'   , function () { cmp.eq(false,  true).should.equal(false); });
      test('false   x True()' , function () { cmp.eq(false,  True).should.equal(false); });
      test('False() x true'   , function () { cmp.eq(False,  true).should.equal(false); });
      test('False() x True()' , function () { cmp.eq(False,  True).should.equal(false); });
    });
  });

  suite('eqs', function () {
    suite('any => false', function () {
      test('true x true', function () { cmp.eqs(true, true).should.equal(false); });
    });
  });

  suite('ne', function () {
    suite('equal => false', function () {
      test('true    x true'   , function () { cmp.ne(true ,  true).should.equal(false); });
      test('true    x True()' , function () { cmp.ne(true ,  True).should.equal(false); });
      test('True()  x true'   , function () { cmp.ne(True ,  true).should.equal(false); });
      test('True()  x True()' , function () { cmp.ne(True ,  True).should.equal(false); });
      test('false   x false'  , function () { cmp.ne(false, false).should.equal(false); });
      test('false   x False()', function () { cmp.ne(false, False).should.equal(false); });
      test('False() x false'  , function () { cmp.ne(False, false).should.equal(false); });
      test('False() x False()', function () { cmp.ne(False, False).should.equal(false); });
    });

    suite('not equal => true', function () {
      test('true    x false'  , function () { cmp.ne(true , false).should.equal(true); });
      test('true    x False()', function () { cmp.ne(true , False).should.equal(true); });
      test('True()  x false'  , function () { cmp.ne(True , false).should.equal(true); });
      test('True()  x False()', function () { cmp.ne(True , False).should.equal(true); });
      test('false   x true'   , function () { cmp.ne(false,  true).should.equal(true); });
      test('false   x True()' , function () { cmp.ne(false,  True).should.equal(true); });
      test('False() x true'   , function () { cmp.ne(False,  true).should.equal(true); });
      test('False() x True()' , function () { cmp.ne(False,  True).should.equal(true); });
    });
  });

  suite('nes', function () {
    suite('any => false', function () {
      test('true x true', function () { cmp.nes(true, true).should.equal(false); });
    });
  });

  suite('gt', function () {
    suite('greater => true', function () {
      test('true    x false'  , function () { cmp.gt(true , false).should.equal(true); });
      test('true    x False()', function () { cmp.gt(true , False).should.equal(true); });
      test('True()  x false'  , function () { cmp.gt(True , false).should.equal(true); });
      test('True()  x False()', function () { cmp.gt(True , False).should.equal(true); });
    });

    suite('equal => false', function () {
      test('true    x true'   , function () { cmp.gt(true ,  true).should.equal(false); });
      test('true    x True()' , function () { cmp.gt(true ,  True).should.equal(false); });
      test('True()  x true'   , function () { cmp.gt(True ,  true).should.equal(false); });
      test('True()  x True()' , function () { cmp.gt(True ,  True).should.equal(false); });
      test('false   x false'  , function () { cmp.gt(false, false).should.equal(false); });
      test('false   x False()', function () { cmp.gt(false, False).should.equal(false); });
      test('False() x false'  , function () { cmp.gt(False, false).should.equal(false); });
      test('False() x False()', function () { cmp.gt(False, False).should.equal(false); });
    });

    suite('less => false', function () {
      test('false   x true'   , function () { cmp.gt(false,  true).should.equal(false); });
      test('false   x True()' , function () { cmp.gt(false,  True).should.equal(false); });
      test('False() x true'   , function () { cmp.gt(False,  true).should.equal(false); });
      test('False() x True()' , function () { cmp.gt(False,  True).should.equal(false); });
    });
  });

  suite('gts', function () {
    suite('any => false', function () {
      test('true x true', function () { cmp.gts(true, true).should.equal(false); });
    });
  });

  suite('ge', function () {
    suite('greater => true', function () {
      test('true    x false'  , function () { cmp.ge(true , false).should.equal(true); });
      test('true    x False()', function () { cmp.ge(true , False).should.equal(true); });
      test('True()  x false'  , function () { cmp.ge(True , false).should.equal(true); });
      test('True()  x False()', function () { cmp.ge(True , False).should.equal(true); });
    });

    suite('equal => true', function () {
      test('true    x true'   , function () { cmp.ge(true ,  true).should.equal(true); });
      test('true    x True()' , function () { cmp.ge(true ,  True).should.equal(true); });
      test('True()  x true'   , function () { cmp.ge(True ,  true).should.equal(true); });
      test('True()  x True()' , function () { cmp.ge(True ,  True).should.equal(true); });
      test('false   x false'  , function () { cmp.ge(false, false).should.equal(true); });
      test('false   x False()', function () { cmp.ge(false, False).should.equal(true); });
      test('False() x false'  , function () { cmp.ge(False, false).should.equal(true); });
      test('False() x False()', function () { cmp.ge(False, False).should.equal(true); });
    });

    suite('less => false', function () {
      test('false   x true'   , function () { cmp.ge(false,  true).should.equal(false); });
      test('false   x True()' , function () { cmp.ge(false,  True).should.equal(false); });
      test('False() x true'   , function () { cmp.ge(False,  true).should.equal(false); });
      test('False() x True()' , function () { cmp.ge(False,  True).should.equal(false); });
    });
  });

  suite('ges', function () {
    suite('any => false', function () {
      test('true x true', function () { cmp.ges(true, true).should.equal(false); });
    });
  });

  suite('lt', function () {
    suite('greater => false', function () {
      test('true    x false'  , function () { cmp.lt(true , false).should.equal(false); });
      test('true    x False()', function () { cmp.lt(true , False).should.equal(false); });
      test('True()  x false'  , function () { cmp.lt(True , false).should.equal(false); });
      test('True()  x False()', function () { cmp.lt(True , False).should.equal(false); });
    });

    suite('equal => false', function () {
      test('true    x true'   , function () { cmp.lt(true ,  true).should.equal(false); });
      test('true    x True()' , function () { cmp.lt(true ,  True).should.equal(false); });
      test('True()  x true'   , function () { cmp.lt(True ,  true).should.equal(false); });
      test('True()  x True()' , function () { cmp.lt(True ,  True).should.equal(false); });
      test('false   x false'  , function () { cmp.lt(false, false).should.equal(false); });
      test('false   x False()', function () { cmp.lt(false, False).should.equal(false); });
      test('False() x false'  , function () { cmp.lt(False, false).should.equal(false); });
      test('False() x False()', function () { cmp.lt(False, False).should.equal(false); });
    });

    suite('less => true', function () {
      test('false   x true'   , function () { cmp.lt(false,  true).should.equal(true); });
      test('false   x True()' , function () { cmp.lt(false,  True).should.equal(true); });
      test('False() x true'   , function () { cmp.lt(False,  true).should.equal(true); });
      test('False() x True()' , function () { cmp.lt(False,  True).should.equal(true); });
    });
  });

  suite('lts', function () {
    suite('any => false', function () {
      test('true x true', function () { cmp.lts(true, true).should.equal(false); });
    });
  });

  suite('le', function () {
    suite('greater => false', function () {
      test('true    x false'  , function () { cmp.le(true , false).should.equal(false); });
      test('true    x False()', function () { cmp.le(true , False).should.equal(false); });
      test('True()  x false'  , function () { cmp.le(True , false).should.equal(false); });
      test('True()  x False()', function () { cmp.le(True , False).should.equal(false); });
    });

    suite('equal => true', function () {
      test('true    x true'   , function () { cmp.le(true ,  true).should.equal(true); });
      test('true    x True()' , function () { cmp.le(true ,  True).should.equal(true); });
      test('True()  x true'   , function () { cmp.le(True ,  true).should.equal(true); });
      test('True()  x True()' , function () { cmp.le(True ,  True).should.equal(true); });
      test('false   x false'  , function () { cmp.le(false, false).should.equal(true); });
      test('false   x False()', function () { cmp.le(false, False).should.equal(true); });
      test('False() x false'  , function () { cmp.le(False, false).should.equal(true); });
      test('False() x False()', function () { cmp.le(False, False).should.equal(true); });
    });

    suite('less => true', function () {
      test('false   x true'   , function () { cmp.le(false,  true).should.equal(true); });
      test('false   x True()' , function () { cmp.le(false,  True).should.equal(true); });
      test('False() x true'   , function () { cmp.le(False,  true).should.equal(true); });
      test('False() x True()' , function () { cmp.le(False,  True).should.equal(true); });
    });
  });

  suite('les', function () {
    suite('any => false', function () {
      test('true x true', function () { cmp.les(true, true).should.equal(false); });
    });
  });

  suite('id', function () {
    suite('identical => true', function () {
      test('true    x true'   , function () { cmp.id(true ,  true).should.equal(true); });
      test('true    x True()' , function () { cmp.id(true ,  True).should.equal(true); });
      test('True()  x true'   , function () { cmp.id(True ,  true).should.equal(true); });
      test('True()  x True()' , function () { cmp.id(True ,  True).should.equal(true); });
      test('false   x false'  , function () { cmp.id(false, false).should.equal(true); });
      test('false   x False()', function () { cmp.id(false, False).should.equal(true); });
      test('False() x false'  , function () { cmp.id(False, false).should.equal(true); });
      test('False() x False()', function () { cmp.id(False, False).should.equal(true); });
    });

    suite('not identical => false', function () {
      test('true    x false'  , function () { cmp.id(true , false).should.equal(false); });
      test('true    x False()', function () { cmp.id(true , False).should.equal(false); });
      test('True()  x false'  , function () { cmp.id(True , false).should.equal(false); });
      test('True()  x False()', function () { cmp.id(True , False).should.equal(false); });
      test('false   x true'   , function () { cmp.id(false,  true).should.equal(false); });
      test('false   x True()' , function () { cmp.id(false,  True).should.equal(false); });
      test('False() x true'   , function () { cmp.id(False,  true).should.equal(false); });
      test('False() x True()' , function () { cmp.id(False,  True).should.equal(false); });
    });
  });
});