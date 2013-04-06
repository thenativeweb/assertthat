var cmp = require('../lib/index'),
    should = require('should');

suite('falsy values', function () {
  suite('eq', function () {
    test(' 0 x         0', function () { cmp.eq(0,         0).should.equal(true); });
    test(' 0 x        ""', function () { cmp.eq(0,        '').should.equal(false); });
    test(' 0 x     false', function () { cmp.eq(0,     false).should.equal(false); });
    test(' 0 x      null', function () { cmp.eq(0,      null).should.equal(false); });
    test(' 0 x undefined', function () { cmp.eq(0, undefined).should.equal(false); });

    test('"" x         0', function () { cmp.eq('',         0).should.equal(false); });
    test('"" x        ""', function () { cmp.eq('',        '').should.equal(true); });
    test('"" x     false', function () { cmp.eq('',     false).should.equal(false); });
    test('"" x      null', function () { cmp.eq('',      null).should.equal(false); });
    test('"" x undefined', function () { cmp.eq('', undefined).should.equal(false); });

    test('false x         0', function () { cmp.eq(false,         0).should.equal(false); });
    test('false x        ""', function () { cmp.eq(false,        '').should.equal(false); });
    test('false x     false', function () { cmp.eq(false,     false).should.equal(true); });
    test('false x      null', function () { cmp.eq(false,      null).should.equal(false); });
    test('false x undefined', function () { cmp.eq(false, undefined).should.equal(false); });

    test('null x         0', function () { cmp.eq(null,         0).should.equal(false); });
    test('null x        ""', function () { cmp.eq(null,        '').should.equal(false); });
    test('null x     false', function () { cmp.eq(null,     false).should.equal(false); });
    test('null x      null', function () { cmp.eq(null,      null).should.equal(true); });
    test('null x undefined', function () { cmp.eq(null, undefined).should.equal(false); });

    test('undefined x         0', function () { cmp.eq(undefined,         0).should.equal(false); });
    test('undefined x        ""', function () { cmp.eq(undefined,        '').should.equal(false); });
    test('undefined x     false', function () { cmp.eq(undefined,     false).should.equal(false); });
    test('undefined x      null', function () { cmp.eq(undefined,      null).should.equal(false); });
    test('undefined x undefined', function () { cmp.eq(undefined, undefined).should.equal(true); });
  });
});