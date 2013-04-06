var cmp = require('../lib/index'),
    should = require('should');

suite('number x number', function () {
  var smallNumber = 23,
      largeNumber = 42,
      SmallNumber = new Number(23),
      LargeNumber = new Number(42),
      notANumber  = Number.NaN;

  suite('eq', function () {
    suite('equal => true', function () {
      test('number x number'    , function () { cmp.eq(smallNumber, smallNumber).should.equal(true); });
      test('number x Number()'  , function () { cmp.eq(smallNumber, SmallNumber).should.equal(true); });
      test('Number() x number'  , function () { cmp.eq(SmallNumber, smallNumber).should.equal(true); });
      test('Number() x Number()', function () { cmp.eq(SmallNumber, SmallNumber).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('number x number'    , function () { cmp.eq(smallNumber, largeNumber).should.equal(false); });
      test('number x Number()'  , function () { cmp.eq(smallNumber, LargeNumber).should.equal(false); });
      test('Number() x number'  , function () { cmp.eq(SmallNumber, largeNumber).should.equal(false); });
      test('Number() x Number()', function () { cmp.eq(SmallNumber, LargeNumber).should.equal(false); });
    });

    suite('isNaN => false', function () {
      test('number x isNaN'  , function () { cmp.eq(smallNumber,  notANumber).should.equal(false); });
      test('Number() x isNaN', function () { cmp.eq(SmallNumber,  notANumber).should.equal(false); });
      test('isNaN x isNaN'   , function () { cmp.eq( notANumber,  notANumber).should.equal(false); });
      test('isNan x number'  , function () { cmp.eq( notANumber, smallNumber).should.equal(false); });
      test('isNan x Number()', function () { cmp.eq( notANumber, SmallNumber).should.equal(false); });
    });
  });

  suite('eqs', function () {
    suite('any => false', function () {
      test('number x number', function () { cmp.eqs(smallNumber, smallNumber).should.equal(false); });
    });
  });

  suite('ne', function () {
    suite('equal => false', function () {
      test('number x number'    , function () { cmp.ne(smallNumber, smallNumber).should.equal(false); });
      test('number x Number()'  , function () { cmp.ne(smallNumber, SmallNumber).should.equal(false); });
      test('Number() x number'  , function () { cmp.ne(SmallNumber, smallNumber).should.equal(false); });
      test('Number() x Number()', function () { cmp.ne(SmallNumber, SmallNumber).should.equal(false); });
    });
    
    suite('not equal => true', function () {
      test('number x number'    , function () { cmp.ne(smallNumber, largeNumber).should.equal(true); });
      test('number x Number()'  , function () { cmp.ne(smallNumber, LargeNumber).should.equal(true); });
      test('Number() x number'  , function () { cmp.ne(SmallNumber, largeNumber).should.equal(true); });
      test('Number() x Number()', function () { cmp.ne(SmallNumber, LargeNumber).should.equal(true); });
    });

    suite('isNaN => true', function () {
      test('number x isNaN'  , function () { cmp.ne(smallNumber,  notANumber).should.equal(true); });
      test('Number() x isNaN', function () { cmp.ne(SmallNumber,  notANumber).should.equal(true); });
      test('isNaN x isNaN'   , function () { cmp.ne( notANumber,  notANumber).should.equal(true); });
      test('isNan x number'  , function () { cmp.ne( notANumber, smallNumber).should.equal(true); });
      test('isNan x Number()', function () { cmp.ne( notANumber, SmallNumber).should.equal(true); });
    });
  });

  suite('nes', function () {
    suite('any => false', function () {
      test('number x number', function () { cmp.nes(smallNumber, smallNumber).should.equal(false); });
    });
  });

  suite('gt', function () {
    suite('greater => true', function () {
      test('number x number'    , function () { cmp.gt(largeNumber, smallNumber).should.equal(true); });
      test('number x Number()'  , function () { cmp.gt(largeNumber, SmallNumber).should.equal(true); });
      test('Number() x number'  , function () { cmp.gt(LargeNumber, smallNumber).should.equal(true); });
      test('Number() x Number()', function () { cmp.gt(LargeNumber, SmallNumber).should.equal(true); });
    });

    suite('equal => false', function () {
      test('number x number'    , function () { cmp.gt(smallNumber, smallNumber).should.equal(false); });
      test('number x Number()'  , function () { cmp.gt(smallNumber, SmallNumber).should.equal(false); });
      test('Number() x number'  , function () { cmp.gt(SmallNumber, smallNumber).should.equal(false); });
      test('Number() x Number()', function () { cmp.gt(SmallNumber, SmallNumber).should.equal(false); });
    });

    suite('less => false', function () {
      test('number x number'    , function () { cmp.gt(smallNumber, largeNumber).should.equal(false); });
      test('number x Number()'  , function () { cmp.gt(smallNumber, LargeNumber).should.equal(false); });
      test('Number() x number'  , function () { cmp.gt(SmallNumber, largeNumber).should.equal(false); });
      test('Number() x Number()', function () { cmp.gt(SmallNumber, LargeNumber).should.equal(false); });
    });

    suite('isNan => false', function () {
      test('number x isNaN'  , function () { cmp.gt(smallNumber,  notANumber).should.equal(false); });
      test('Number() x isNaN', function () { cmp.gt(SmallNumber,  notANumber).should.equal(false); });
      test('isNaN x isNaN'   , function () { cmp.gt( notANumber,  notANumber).should.equal(false); });
      test('isNan x number'  , function () { cmp.gt( notANumber, smallNumber).should.equal(false); });
      test('isNan x Number()', function () { cmp.gt( notANumber, SmallNumber).should.equal(false); });
    });
  });

  suite('gts', function () {
    suite('any => false', function () {
      test('number x number', function () { cmp.gts(smallNumber, smallNumber).should.equal(false); });
    });
  });

  suite('ge', function () {
    suite('greater => true', function () {
      test('number x number'    , function () { cmp.ge(largeNumber, smallNumber).should.equal(true); });
      test('number x Number()'  , function () { cmp.ge(largeNumber, SmallNumber).should.equal(true); });
      test('Number() x number'  , function () { cmp.ge(LargeNumber, smallNumber).should.equal(true); });
      test('Number() x Number()', function () { cmp.ge(LargeNumber, SmallNumber).should.equal(true); });
    });

    suite('equal => true', function () {
      test('number x number'    , function () { cmp.ge(smallNumber, smallNumber).should.equal(true); });
      test('number x Number()'  , function () { cmp.ge(smallNumber, SmallNumber).should.equal(true); });
      test('Number() x number'  , function () { cmp.ge(SmallNumber, smallNumber).should.equal(true); });
      test('Number() x Number()', function () { cmp.ge(SmallNumber, SmallNumber).should.equal(true); });
    });

    suite('less => false', function () {
      test('number x number'    , function () { cmp.ge(smallNumber, largeNumber).should.equal(false); });
      test('number x Number()'  , function () { cmp.ge(smallNumber, LargeNumber).should.equal(false); });
      test('Number() x number'  , function () { cmp.ge(SmallNumber, largeNumber).should.equal(false); });
      test('Number() x Number()', function () { cmp.ge(SmallNumber, LargeNumber).should.equal(false); });
    });

    suite('isNan => false', function () {
      test('number x isNaN'  , function () { cmp.ge(smallNumber,  notANumber).should.equal(false); });
      test('Number() x isNaN', function () { cmp.ge(SmallNumber,  notANumber).should.equal(false); });
      test('isNaN x isNaN'   , function () { cmp.ge( notANumber,  notANumber).should.equal(false); });
      test('isNan x number'  , function () { cmp.ge( notANumber, smallNumber).should.equal(false); });
      test('isNan x Number()', function () { cmp.ge( notANumber, SmallNumber).should.equal(false); });
    });
  });

  suite('ges', function () {
    suite('any => false', function () {
      test('number x number', function () { cmp.ges(smallNumber, smallNumber).should.equal(false); });
    });
  });

  suite('lt', function () {
    suite('greater => false', function () {
      test('number x number'    , function () { cmp.lt(largeNumber, smallNumber).should.equal(false); });
      test('number x Number()'  , function () { cmp.lt(largeNumber, SmallNumber).should.equal(false); });
      test('Number() x number'  , function () { cmp.lt(LargeNumber, smallNumber).should.equal(false); });
      test('Number() x Number()', function () { cmp.lt(LargeNumber, SmallNumber).should.equal(false); });
    });

    suite('equal => false', function () {
      test('number x number'    , function () { cmp.lt(smallNumber, smallNumber).should.equal(false); });
      test('number x Number()'  , function () { cmp.lt(smallNumber, SmallNumber).should.equal(false); });
      test('Number() x number'  , function () { cmp.lt(SmallNumber, smallNumber).should.equal(false); });
      test('Number() x Number()', function () { cmp.lt(SmallNumber, SmallNumber).should.equal(false); });
    });

    suite('less => true', function () {
      test('number x number'    , function () { cmp.lt(smallNumber, largeNumber).should.equal(true); });
      test('number x Number()'  , function () { cmp.lt(smallNumber, LargeNumber).should.equal(true); });
      test('Number() x number'  , function () { cmp.lt(SmallNumber, largeNumber).should.equal(true); });
      test('Number() x Number()', function () { cmp.lt(SmallNumber, LargeNumber).should.equal(true); });
    });

    suite('isNan => false', function () {
      test('number x isNaN'  , function () { cmp.lt(smallNumber,  notANumber).should.equal(false); });
      test('Number() x isNaN', function () { cmp.lt(SmallNumber,  notANumber).should.equal(false); });
      test('isNaN x isNaN'   , function () { cmp.lt( notANumber,  notANumber).should.equal(false); });
      test('isNan x number'  , function () { cmp.lt( notANumber, smallNumber).should.equal(false); });
      test('isNan x Number()', function () { cmp.lt( notANumber, SmallNumber).should.equal(false); });
    });
  });

  suite('lts', function () {
    suite('any => false', function () {
      test('number x number', function () { cmp.lts(smallNumber, smallNumber).should.equal(false); });
    });
  });

  suite('le', function () {
    suite('greater => false', function () {
      test('number x number'    , function () { cmp.le(largeNumber, smallNumber).should.equal(false); });
      test('number x Number()'  , function () { cmp.le(largeNumber, SmallNumber).should.equal(false); });
      test('Number() x number'  , function () { cmp.le(LargeNumber, smallNumber).should.equal(false); });
      test('Number() x Number()', function () { cmp.le(LargeNumber, SmallNumber).should.equal(false); });
    });

    suite('equal => true', function () {
      test('number x number'    , function () { cmp.le(smallNumber, smallNumber).should.equal(true); });
      test('number x Number()'  , function () { cmp.le(smallNumber, SmallNumber).should.equal(true); });
      test('Number() x number'  , function () { cmp.le(SmallNumber, smallNumber).should.equal(true); });
      test('Number() x Number()', function () { cmp.le(SmallNumber, SmallNumber).should.equal(true); });
    });

    suite('less => true', function () {
      test('number x number'    , function () { cmp.le(smallNumber, largeNumber).should.equal(true); });
      test('number x Number()'  , function () { cmp.le(smallNumber, LargeNumber).should.equal(true); });
      test('Number() x number'  , function () { cmp.le(SmallNumber, largeNumber).should.equal(true); });
      test('Number() x Number()', function () { cmp.le(SmallNumber, LargeNumber).should.equal(true); });
    });

    suite('isNan => false', function () {
      test('number x isNaN'  , function () { cmp.le(smallNumber,  notANumber).should.equal(false); });
      test('Number() x isNaN', function () { cmp.le(SmallNumber,  notANumber).should.equal(false); });
      test('isNaN x isNaN'   , function () { cmp.le( notANumber,  notANumber).should.equal(false); });
      test('isNan x number'  , function () { cmp.le( notANumber, smallNumber).should.equal(false); });
      test('isNan x Number()', function () { cmp.le( notANumber, SmallNumber).should.equal(false); });
    });
  });

  suite('les', function () {
    suite('any => false', function () {
      test('number x number', function () { cmp.les(smallNumber, smallNumber).should.equal(false); });
    });
  });

  suite('id', function () {
    suite('identical => true', function () {
      test('number x number'    , function () { cmp.id(smallNumber, smallNumber).should.equal(true); });
      test('number x Number()'  , function () { cmp.id(smallNumber, SmallNumber).should.equal(true); });
      test('Number() x number'  , function () { cmp.id(SmallNumber, smallNumber).should.equal(true); });
      test('Number() x Number()', function () { cmp.id(SmallNumber, SmallNumber).should.equal(true); });
    });

    suite('not identical => false', function () {
      test('number x number'    , function () { cmp.id(smallNumber, largeNumber).should.equal(false); });
      test('number x Number()'  , function () { cmp.id(smallNumber, LargeNumber).should.equal(false); });
      test('Number() x number'  , function () { cmp.id(SmallNumber, largeNumber).should.equal(false); });
      test('Number() x Number()', function () { cmp.id(SmallNumber, LargeNumber).should.equal(false); });
    });

    suite('isNaN => false', function () {
      test('number x isNaN'  , function () { cmp.id(smallNumber,  notANumber).should.equal(false); });
      test('Number() x isNaN', function () { cmp.id(SmallNumber,  notANumber).should.equal(false); });
      test('isNaN x isNaN'   , function () { cmp.id( notANumber,  notANumber).should.equal(false); });
      test('isNan x number'  , function () { cmp.id( notANumber, smallNumber).should.equal(false); });
      test('isNan x Number()', function () { cmp.id( notANumber, SmallNumber).should.equal(false); });
    });
  });
});