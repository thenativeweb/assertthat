var assert = require('../lib/assert.js');

module.exports = {
  'sameAs succeeds when comparing two numbers with the same values.': function() {
    var actual = 23,
        expected = 23;

    assert.doesNotThrow(function() {
      assert.that(actual, is.sameAs(expected));
    });
  },
  'sameAs fails when comparing two numbers with different values.': function() {
    var actual = 23,
        expected = 42;

    assert.throws(function() {
      assert.that(actual, is.sameAs(expected));
    }, assert.AssertionError);
  },
  'sameAs succeeds when comparing two strings with the same values.': function() {
    var actual = 'foo',
        expected = 'foo';

    assert.doesNotThrow(function() {
      assert.that(actual, is.sameAs(expected));
    });
  },
  'sameAs fails when comparing two strings with different values.': function() {
    var actual = 'foo',
        expected = 'bar';

    assert.throws(function() {
      assert.that(actual, is.sameAs(expected));
    }, assert.AssertionError);
  },
  'sameAs fails when comparing two objects with the same values, but different identities.': function() {
    var actual = { foo: 'foo', bar: 'bar' },
        expected = { foo: 'foo', bar: 'bar' };

    assert.throws(function() {
      assert.that(actual, is.sameAs(expected));
    }, assert.AssertionError);
  },
  'sameAs fails when comparing two objects with different values.': function() {
    var actual = { foo: 'foo', bar: 'bar' },
        expected = { foo: 'foo', bar: 'baz' };

    assert.throws(function() {
      assert.that(actual, is.sameAs(expected));
    }, assert.AssertionError);
  },
  'sameAs succeeds when comparing two objects with the same identity.': function() {
    var actual = expected = { foo: 'foo', bar: 'bar' };

    assert.doesNotThrow(function() {
      assert.that(actual, is.sameAs(expected));
    });
  },
  'not.sameAs succeeds when comparing two numbers with different values.': function() {
    var actual = 23,
        expected = 42;

    assert.doesNotThrow(function() {
      assert.that(actual, is.not.sameAs(expected));
    });
  },
  'not.sameAs fails when comparing two numbers with the same values.': function() {
    var actual = 23,
        expected = 23;

    assert.throws(function() {
      assert.that(actual, is.not.sameAs(expected));
    }, assert.AssertionError);
  },
  'not.sameAs succeeds when comparing two strings with different values.': function() {
    var actual = 'foo',
        expected = 'bar';

    assert.doesNotThrow(function() {
      assert.that(actual, is.not.sameAs(expected));
    });
  },
  'not.sameAs fails when comparing two strings with the same values.': function() {
    var actual = 'foo',
        expected = 'foo';

    assert.throws(function() {
      assert.that(actual, is.not.sameAs(expected));
    }, assert.AssertionError);
  },
  'not.sameAs succeeds when comparing two objects with the same values, but different identities.': function() {
    var actual = { foo: 'foo', bar: 'bar' },
        expected = { foo: 'foo', bar: 'bar' };

    assert.doesNotThrow(function() {
      assert.that(actual, is.not.sameAs(expected));
    });
  },
  'not.sameAs succeeds when comparing two objects with different values.': function() {
    var actual = { foo: 'foo', bar: 'bar' },
        expected = { foo: 'foo', bar: 'baz' };

    assert.doesNotThrow(function() {
      assert.that(actual, is.not.sameAs(expected));
    });
  },
  'not.sameAs fails when comparing two objects with the same identity.': function() {
    var actual = expected = { foo: 'foo', bar: 'bar' };

    assert.throws(function() {
      assert.that(actual, is.not.sameAs(expected));
    }, assert.AssertionError);
  }};
