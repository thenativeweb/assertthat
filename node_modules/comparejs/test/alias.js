var cmp = require('../lib/index'),
    should = require('should');

suite('alias', function () {
  test('eq x equal'             , function () { cmp.eq(cmp.eq(23, 23), cmp.equal(             23, 23)).should.equal(true); });
  test('ne x notEqual'          , function () { cmp.eq(cmp.ne(23, 23), cmp.notEqual(          23, 23)).should.equal(true); });
  test('gt x greaterThan'       , function () { cmp.eq(cmp.gt(23, 23), cmp.greaterThan(       23, 23)).should.equal(true); });
  test('ge x greaterThanOrEqual', function () { cmp.eq(cmp.ge(23, 23), cmp.greaterThanOrEqual(23, 23)).should.equal(true); });
  test('lt x lessThan'          , function () { cmp.eq(cmp.lt(23, 23), cmp.lessThan(          23, 23)).should.equal(true); });
  test('le x lessThanOrEqual'   , function () { cmp.eq(cmp.le(23, 23), cmp.lessThanOrEqual(   23, 23)).should.equal(true); });
  test('id x identical'         , function () { cmp.eq(cmp.id(23, 23), cmp.identical(         23, 23)).should.equal(true); });

  test('eqs x equalByStructure'             , function () { cmp.eq(cmp.eqs({}, {}), cmp.equalByStructure(             {}, {})).should.equal(true); });
  test('nes x notEqualByStructure'          , function () { cmp.eq(cmp.nes({}, {}), cmp.notEqualByStructure(          {}, {})).should.equal(true); });
  test('gts x greaterThanByStructure'       , function () { cmp.eq(cmp.gts({}, {}), cmp.greaterThanByStructure(       {}, {})).should.equal(true); });
  test('ges x greaterThanOrEqualByStructure', function () { cmp.eq(cmp.ges({}, {}), cmp.greaterThanOrEqualByStructure({}, {})).should.equal(true); });
  test('lts x lessThanByStructure'          , function () { cmp.eq(cmp.lts({}, {}), cmp.lessThanByStructure(          {}, {})).should.equal(true); });
  test('les x lessThanOrEqualByStructure'   , function () { cmp.eq(cmp.les({}, {}), cmp.lessThanOrEqualByStructure(   {}, {})).should.equal(true); });
});