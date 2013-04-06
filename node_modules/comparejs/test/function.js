var cmp = require('../lib/index'),
    should = require('should');

suite('function x function', function () {
  var f1 = function () { return 23; },
      f2 = function () { return 23; },
      g1 = function () { return 42; },
      F1 = new Function('return 23;'),
      F2 = new Function('return 23;'),
      G1 = new Function('return 42;');

  suite('eq', function () {
    suite('equal => true', function () {
      test('function   x function'  , function () { cmp.eq(f1, f2).should.equal(true); });
      test('Function() x Function()', function () { cmp.eq(F1, F2).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('function   x function'  , function () { cmp.eq(f1, g1).should.equal(false); });
      test('function   x Function()', function () { cmp.eq(f1, F1).should.equal(false); });
      test('Function() x function  ', function () { cmp.eq(F1, f1).should.equal(false); });
      test('Function() x Function()', function () { cmp.eq(F1, G1).should.equal(false); });
    });
  });

  suite('eqs', function () {
    suite('any => false', function () {
      test('function x function', function () { cmp.eqs(f1, f1).should.equal(false); });
    });
  });

  suite('ne', function () {
    suite('equal => false', function () {
      test('function   x function'  , function () { cmp.ne(f1, f2).should.equal(false); });
      test('Function() x Function()', function () { cmp.ne(F1, F2).should.equal(false); });
    });

    suite('not equal => true', function () {
      test('function   x function'  , function () { cmp.ne(f1, g1).should.equal(true); });
      test('function   x Function()', function () { cmp.ne(f1, F1).should.equal(true); });
      test('Function() x function  ', function () { cmp.ne(F1, f1).should.equal(true); });
      test('Function() x Function()', function () { cmp.ne(F1, G1).should.equal(true); });
    });
  });

  suite('nes', function () {
    suite('any => false', function () {
      test('function x function', function () { cmp.nes(f1, f1).should.equal(false); });
    });
  });

  suite('gt', function () {
    suite('any => false', function () {
      test('function   x function'  , function () { cmp.gt(f1, f2).should.equal(false); });
      test('function   x function'  , function () { cmp.gt(f1, g1).should.equal(false); });
      test('function   x Function()', function () { cmp.gt(f1, F1).should.equal(false); });
      test('Function() x function  ', function () { cmp.gt(F1, f1).should.equal(false); });
      test('Function() x Function()', function () { cmp.gt(F1, F2).should.equal(false); });
      test('Function() x Function()', function () { cmp.gt(F1, G1).should.equal(false); });
    });
  });

  suite('gts', function () {
    suite('any => false', function () {
      test('function x function', function () { cmp.gts(f1, f1).should.equal(false); });
    });
  });

  suite('ge', function () {
    suite('equal => true', function () {
      test('function   x function'  , function () { cmp.ge(f1, f2).should.equal(true); });
      test('Function() x Function()', function () { cmp.ge(F1, F2).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('function   x function'  , function () { cmp.ge(f1, g1).should.equal(false); });
      test('function   x Function()', function () { cmp.ge(f1, F1).should.equal(false); });
      test('Function() x function  ', function () { cmp.ge(F1, f1).should.equal(false); });
      test('Function() x Function()', function () { cmp.ge(F1, G1).should.equal(false); });
    });
  });

  suite('ges', function () {
    suite('any => false', function () {
      test('function x function', function () { cmp.ges(f1, f1).should.equal(false); });
    });
  });

  suite('lt', function () {
    suite('any => false', function () {
      test('function   x function'  , function () { cmp.lt(f1, f2).should.equal(false); });
      test('function   x function'  , function () { cmp.lt(f1, g1).should.equal(false); });
      test('function   x Function()', function () { cmp.lt(f1, F1).should.equal(false); });
      test('Function() x function  ', function () { cmp.lt(F1, f1).should.equal(false); });
      test('Function() x Function()', function () { cmp.lt(F1, F2).should.equal(false); });
      test('Function() x Function()', function () { cmp.lt(F1, G1).should.equal(false); });
    });
  });

  suite('lts', function () {
    suite('any => false', function () {
      test('function x function', function () { cmp.lts(f1, f1).should.equal(false); });
    });
  });

  suite('le', function () {
    suite('equal => true', function () {
      test('function   x function'  , function () { cmp.le(f1, f2).should.equal(true); });
      test('Function() x Function()', function () { cmp.le(F1, F2).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('function   x function'  , function () { cmp.le(f1, g1).should.equal(false); });
      test('function   x Function()', function () { cmp.le(f1, F1).should.equal(false); });
      test('Function() x function  ', function () { cmp.le(F1, f1).should.equal(false); });
      test('Function() x Function()', function () { cmp.le(F1, G1).should.equal(false); });
    });
  });

  suite('les', function () {
    suite('any => false', function () {
      test('function x function', function () { cmp.les(f1, f1).should.equal(false); });
    });
  });

  suite('id', function () {
    suite('equal => true', function () {
      test('function   x function'  , function () { cmp.id(f1, f1).should.equal(true); });
      test('Function() x Function()', function () { cmp.id(F1, F1).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('function   x function'  , function () { cmp.id(f1, f2).should.equal(false); });
      test('function   x function'  , function () { cmp.id(f1, g1).should.equal(false); });
      test('function   x Function()', function () { cmp.id(f1, F1).should.equal(false); });
      test('Function() x function  ', function () { cmp.id(F1, f1).should.equal(false); });
      test('Function() x Function()', function () { cmp.id(F1, F2).should.equal(false); });
      test('Function() x Function()', function () { cmp.id(F1, G1).should.equal(false); });
    });
  });
});