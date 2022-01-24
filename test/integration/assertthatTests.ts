import { assert } from '../../lib';
import { error, value } from 'defekt';

suite(`assertthat's types allow the required assertions on each type`, (): void => {
  suite('any', (): void => {
    test('can assert all relevant things.', async (): Promise<void> => {
      const aValue = 'foo';

      assert.that(aValue).is.equalTo('foo');
      assert.that(aValue).is.identicalTo('foo');
      assert.that(aValue).is.sameJsonAs('foo');
      assert.that('').is.falsy();
      assert.that(aValue).is.truthy();
      assert.that(null).is.null();
      // eslint-disable-next-line unicorn/no-useless-undefined
      assert.that(undefined).is.undefined();
      assert.that(true).is.true();
      assert.that(false).is.false();
      assert.that(aValue).is.ofType('string');

      assert.that(aValue).is.not.equalTo('bar');
      assert.that(aValue).is.not.identicalTo('bar');
      assert.that(aValue).is.not.sameJsonAs('bar');
      assert.that(aValue).is.not.falsy();
      assert.that('').is.not.truthy();
      assert.that(aValue).is.not.null();
      assert.that(aValue).is.not.undefined();
      assert.that(aValue).is.not.true();
      assert.that(aValue).is.not.false();
      assert.that(aValue).is.not.ofType('number');

      assert.that([ 'foo', 'foo' ]).each.is.equalTo('foo');
      assert.that([ 'foo', 'foo' ]).each.is.identicalTo('foo');
      assert.that([ 'foo', 'foo' ]).each.is.sameJsonAs('foo');
      assert.that([ '', false, undefined ]).each.is.falsy();
      assert.that([ true, 'foo', 5 ]).each.is.truthy();
      assert.that([ null, null ]).each.is.null();
      assert.that([ undefined, undefined ]).each.is.undefined();
      assert.that([ true, true ]).each.is.true();
      assert.that([ false, false ]).each.is.false();
      assert.that([ 'foo', 'bar' ]).each.is.ofType('string');

      assert.that([ 'foo', 'notbar' ]).each.is.not.equalTo('bar');
      assert.that([ 'foo', 'notbar' ]).each.is.not.identicalTo('bar');
      assert.that([ 'foo', 'notbar' ]).each.is.not.sameJsonAs('bar');
      assert.that([ true, 'foo', 5 ]).each.is.not.falsy();
      assert.that([ '', false, undefined ]).each.is.not.truthy();
      assert.that([ true, 'foo', 5 ]).each.is.not.null();
      assert.that([ true, 'foo', 5 ]).each.is.not.undefined();
      assert.that([ false, null ]).each.is.not.true();
      assert.that([ true, null ]).each.is.not.false();
      assert.that([ 'foo', false, {}]).each.is.not.ofType('number');
    });
  });

  suite('set', (): void => {
    test('can assert all relevant things.', async (): Promise<void> => {
      const aValue = new Set([
        'foo'
      ]);

      assert.that(aValue).is.containing('foo');
      assert.that(aValue).is.containingAllOf([ 'foo' ]);
      assert.that(aValue).is.containingAnyOf([ 'foo' ]);
      assert.that(aValue).is.atLeast(new Set());
      assert.that(aValue).is.atMost(new Set([ 'foo', 'bar' ]));
      assert.that(new Set()).is.empty();

      assert.that(aValue).is.not.containing('bar');
      assert.that(aValue).is.not.containingAllOf([ 'bar' ]);
      assert.that(aValue).is.not.containingAnyOf([ 'bar' ]);
      assert.that(aValue).is.not.atLeast(new Set([ 'bar' ]));
      assert.that(aValue).is.not.atMost(new Set([]));
      assert.that(aValue).is.not.empty();

      assert.that([ new Set([ 'foo' ]), new Set([ 'foo' ]) ]).each.is.containing('foo');
      assert.that([ new Set([ 'foo' ]), new Set([ 'foo' ]) ]).each.is.containingAllOf([ 'foo' ]);
      assert.that([ new Set([ 'foo' ]), new Set([ 'foo' ]) ]).each.is.containingAnyOf([ 'foo' ]);
      assert.that([ new Set(), new Set() ]).each.is.atLeast(new Set());
      assert.that([ new Set(), new Set() ]).each.is.atMost(new Set([ 'foo', 'bar' ]));
      assert.that([ new Set(), new Set() ]).each.is.empty();

      assert.that([ new Set([ 'foo' ]), new Set([ 'foo' ]) ]).each.is.not.containing('bar');
      assert.that([ new Set([ 'foo' ]), new Set([ 'foo' ]) ]).each.is.not.containingAllOf([ 'bar' ]);
      assert.that([ new Set([ 'foo' ]), new Set([ 'foo' ]) ]).each.is.not.containingAnyOf([ 'bar' ]);
      assert.that([ new Set() ]).each.is.not.atLeast(new Set([ 'bar' ]));
      assert.that([ new Set([ 'anything' ]) ]).each.is.not.atMost(new Set([]));
      assert.that([ new Set([ 'foo' ]), new Set([ 'bar' ]) ]).each.is.not.empty();
    });
  });

  suite('map', (): void => {
    test('can assert all relevant things.', async (): Promise<void> => {
      const aValue = new Map<number, string>();

      aValue.set(5, 'foo');

      assert.that(aValue).is.atLeast(new Map());
      assert.that(aValue).is.atMost(aValue);
      assert.that(new Set()).is.empty();

      assert.that(aValue).is.not.atLeast(new Map([[ 5, 'bar' ], [ 6, 'foo' ]]));
      assert.that(aValue).is.not.atMost(new Map());
      assert.that(aValue).is.not.empty();

      assert.that([ new Map([[ 'foo', 'bar' ]]), new Map([[ 'bar', 'foo' ]]) ]).each.is.atLeast(new Map());
      assert.that([ new Map(), new Map([[ 'foo', 'bar' ]]) ]).each.is.atMost(new Map([[ 'foo', 'bar' ]]));
      assert.that([ new Map(), new Map() ]).each.is.empty();

      assert.that([ new Map([[ 'foo', 'bar' ]]), new Map() ]).each.is.not.atLeast(new Map([[ 5, 'bar' ], [ 6, 'foo' ]]));
      assert.that([ new Map([[ 'foo', 'bar' ]]), new Map([[ 'bar', 'foo' ]]) ]).each.is.not.atMost(new Map());
      assert.that([ new Map([[ 'foo', 'bar' ]]), new Map([[ 'bar', 'foo' ]]) ]).each.is.not.empty();
    });
  });

  suite('array', (): void => {
    test('can assert all relevant things.', async (): Promise<void> => {
      const aValue = [ 'foo' ];

      assert.that(aValue).is.containing('foo');
      assert.that(aValue).is.containingAllOf([ 'foo' ]);
      assert.that(aValue).is.containingAnyOf([ 'foo' ]);
      assert.that([]).is.empty();

      assert.that(aValue).is.not.containing('bar');
      assert.that(aValue).is.not.containingAllOf([ 'bar' ]);
      assert.that(aValue).is.not.containingAnyOf([ 'bar' ]);
      assert.that(aValue).is.not.empty();

      assert.that([[ 'foo', 'bar' ], [ 'bar', 'foo' ]]).each.is.containing('foo');
      assert.that([[ 'foo', 'bar' ], [ 'bar', 'foo' ]]).each.is.containingAllOf([ 'foo' ]);
      assert.that([[ 'foo' ], [ 'bar' ]]).each.is.containingAnyOf([ 'foo', 'bar' ]);
      assert.that([[], []]).each.is.empty();

      assert.that([[ 'foo' ], []]).each.is.not.containing('bar');
      assert.that([[ 'foo' ], []]).each.is.not.containingAllOf([ 'bar' ]);
      assert.that([[ 'foo' ], []]).each.is.not.containingAnyOf([ 'bar' ]);
      assert.that([[ 'foo' ], [ 'bar' ]]).each.is.not.empty();
    });
  });

  suite('result', (): void => {
    test('can assert all relevant things.', async (): Promise<void> => {
      const aValue = value();
      const anError = error(new Error('Foo.'));

      assert.that(aValue).is.aValue();
      assert.that(anError).is.anError();
      assert.that(anError).is.anErrorWithMessage('Foo.');

      assert.that(anError).is.not.aValue();
      assert.that(aValue).is.not.anError();
      assert.that(aValue).is.not.anErrorWithMessage('Foo.');

      assert.that([ value('foo'), value(5) ]).each.is.aValue();
      assert.that([ error(new Error('Foo.')), error(new Error('Bar.')) ]).each.is.anError();
      assert.that([ error(new Error('Foo.')), error(new Error('Foo.')) ]).each.is.anErrorWithMessage('Foo.');

      assert.that([ error(new Error('Foo.')), error(new Error('Bar.')) ]).each.is.not.aValue();
      assert.that([ value(5), value('foo') ]).each.is.not.anError();
      assert.that([ value(5), error(new Error('Bar.')) ]).each.is.not.anErrorWithMessage('Foo.');
    });
  });

  suite('number', (): void => {
    test('can assert all relevant things.', async (): Promise<void> => {
      const aValue = 5;

      assert.that(aValue).is.greaterThan(4);
      assert.that(aValue).is.lessThan(6);
      assert.that(aValue).is.atLeast(5);
      assert.that(aValue).is.atMost(5);
      // eslint-disable-next-line new-cap
      assert.that(Number.NaN).is.NaN();

      assert.that(aValue).is.not.greaterThan(5);
      assert.that(aValue).is.not.lessThan(5);
      assert.that(aValue).is.not.atLeast(6);
      assert.that(aValue).is.not.atMost(4);
      // eslint-disable-next-line new-cap
      assert.that(aValue).is.not.NaN();

      assert.that([ 5, 8 ]).each.is.greaterThan(4);
      assert.that([ 3, 5 ]).each.is.lessThan(6);
      assert.that([ 5, 8 ]).each.is.atLeast(5);
      assert.that([ 3, 5 ]).each.is.atMost(5);
      // eslint-disable-next-line new-cap
      assert.that([ Number.NaN, Number.NaN ]).each.is.NaN();

      assert.that([ 3, 5 ]).each.is.not.greaterThan(5);
      assert.that([ 5, 8 ]).each.is.not.lessThan(5);
      assert.that([ 3, 5 ]).each.is.not.atLeast(6);
      assert.that([ 5, 8 ]).each.is.not.atMost(4);
      // eslint-disable-next-line new-cap
      assert.that([ 5, 8 ]).each.is.not.NaN();
    });
  });

  suite('string', (): void => {
    test('can assert all relevant things.', async (): Promise<void> => {
      const aValue = 'foo';

      assert.that(aValue).is.containing('fo');
      assert.that(aValue).is.startingWith('fo');
      assert.that(aValue).is.endingWith('oo');
      assert.that(aValue).is.containingAllOf([ 'f', 'o' ]);
      assert.that(aValue).is.containingAnyOf([ 'f', 'x' ]);
      assert.that('').is.empty();
      assert.that(aValue).is.matching(/foo/u);

      assert.that(aValue).is.not.containing('bar');
      assert.that(aValue).is.not.startingWith('bar');
      assert.that(aValue).is.not.endingWith('bar');
      assert.that(aValue).is.not.containingAllOf([ 'b', 'f' ]);
      assert.that(aValue).is.not.containingAnyOf([ 'b', 'a' ]);
      assert.that(aValue).is.not.empty();
      assert.that(aValue).is.not.matching(/bar/u);

      assert.that([ 'foo', 'bafo', 'fob' ]).each.is.containing('fo');
      assert.that([ 'foo', 'foobar' ]).each.is.startingWith('fo');
      assert.that([ 'foo', 'boo' ]).each.is.endingWith('oo');
      assert.that([ 'fo', 'of', 'wow even this contains all relevant letters f' ]).each.is.containingAllOf([ 'f', 'o' ]);
      assert.that([ 'foo', 'xxx' ]).each.is.containingAnyOf([ 'f', 'x' ]);
      assert.that([ '', '' ]).each.is.empty();
      assert.that([ 'foo', 'foobar' ]).each.is.matching(/foo/u);

      assert.that([ 'foo', 'bfaoro' ]).each.is.not.containing('bar');
      assert.that([ 'foo', 'foobar' ]).each.is.not.startingWith('bar');
      assert.that([ 'foo', 'barfoo' ]).each.is.not.endingWith('bar');
      assert.that([ 'boo', 'far' ]).each.is.not.containingAllOf([ 'b', 'f' ]);
      assert.that([ 'foo', 'heck' ]).each.is.not.containingAnyOf([ 'b', 'a' ]);
      assert.that([ 'not', 'empty' ]).each.is.not.empty();
      assert.that([ 'foo', 'bam' ]).each.is.not.matching(/bar/u);
    });
  });

  suite('function', (): void => {
    test('can assert all relevant things.', async (): Promise<void> => {
      assert.that((): void => {
        throw new Error('Foo.');
      }).is.throwing();
      await assert.that(async (): Promise<void> => {
        throw new Error('Foo.');
      }).is.throwingAsync();

      assert.that((): void => {
        // Empty function.
      }).is.not.throwing();
      await assert.that(async (): Promise<void> => {
        // Empty function.
      }).is.not.throwingAsync();

      assert.that([
        (): void => {
          throw new Error('Foo.');
        },
        (): void => {
          throw new Error('Bar.');
        }
      ]).each.is.throwing();
      await assert.that([
        async (): Promise<void> => {
          throw new Error('Foo.');
        },
        async (): Promise<void> => {
          throw new Error('Bar.');
        }
      ]).each.is.throwingAsync();

      assert.that([
        (): void => {
        // Empty function.
        },
        (): number => 5
      ]).each.is.not.throwing();
      await assert.that([
        async (): Promise<void> => {
        // Empty function.
        },
        async (): Promise<number> => 5
      ]).each.is.not.throwingAsync();
    });
  });

  suite('object', (): void => {
    class Foo {
      public foo: string;

      public constructor () {
        this.foo = 'foo';
      }
    }

    const aValue = new Foo();

    assert.that(aValue).is.atLeast({});
    assert.that(aValue).is.atMost({ foo: 'foo', bar: 'bar' });
    assert.that(aValue).is.instanceOf(Foo);
    assert.that({}).is.empty();

    assert.that(aValue).is.not.atLeast({ bar: 'bar' });
    assert.that(aValue).is.not.atMost({});
    assert.that(aValue).is.not.instanceOf(Array);
    assert.that(aValue).is.not.empty();

    assert.that([{ foo: 'bar' }, { foo: 5 }]).each.is.atLeast({});
    assert.that([{ foo: 'foo' }, {}]).each.is.atMost({ foo: 'foo', bar: 'bar' });
    assert.that([ new Foo(), new Foo() ]).each.is.instanceOf(Foo);
    assert.that([{}, {}]).each.is.empty();

    assert.that([{ foo: 'foo' }, {}]).each.is.not.atLeast({ bar: 'bar' });
    assert.that([{ foo: 'foo' }, { bar: 5 }]).each.is.not.atMost({});
    assert.that([{ foo: 'foo' }, { bar: 'bar' }]).each.is.not.instanceOf(Array);
    assert.that([{ foo: 'foo' }, { bar: 'bar' }]).each.is.not.empty();
  });
});
