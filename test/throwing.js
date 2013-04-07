'use strict';

var assert = require('../lib/assert.js');

var falsyCode = function () {
  throw new Error('foo');
};

var falsyCode2 = function () {
  throw new Error('bar');
};

var truthyCode = function () {
};

suite('is.throwing', function () {
  test('falsy code => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(falsyCode, is.throwing());
    });
  });
  test('truthy code => exception', function () {
    assert.throws(function () {
      assert.that(truthyCode, is.throwing());
    });
  });
});

suite('is.throwing with message', function () {
  test('falsy code => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(falsyCode, is.throwing('foo'));
    });
  });
  test('falsy code with other message => exception', function () {
    assert.throws(function () {
      assert.that(falsyCode2, is.throwing('foo'));
    });
  });
  test('truthy code => exception', function () {
    assert.throws(function () {
      assert.that(truthyCode, is.throwing('foo'));
    });
  });
});

suite('is.not.throwing', function () {
  test('falsy code => exception', function () {
    assert.throws(function () {
      assert.that(falsyCode, is.not.throwing());
    });
  });
  test('truthy code => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(truthyCode, is.not.throwing());
    });
  });
});

suite('is.not.throwing with message', function () {
  test('falsy code => exception', function () {
    assert.throws(function () {
      assert.that(falsyCode, is.not.throwing('foo'));
    });
  });
  test('falsy code with other message => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(falsyCode2, is.not.throwing('foo'));
    });
  });
  test('truthy code => ok', function () {
    assert.doesNotThrow(function () {
      assert.that(truthyCode, is.not.throwing('foo'));
    });
  });
});