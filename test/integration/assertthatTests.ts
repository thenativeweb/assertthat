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

      assert.that.eachElementOf([ 'foo', 'foo' ]).is.equalTo('foo');
      assert.that.eachElementOf([ 'foo', 'foo' ]).is.identicalTo('foo');
      assert.that.eachElementOf([ 'foo', 'foo' ]).is.sameJsonAs('foo');
      assert.that.eachElementOf([ '', false, undefined ]).is.falsy();
      assert.that.eachElementOf([ true, 'foo', 5 ]).is.truthy();
      assert.that.eachElementOf([ null, null ]).is.null();
      assert.that.eachElementOf([ undefined, undefined ]).is.undefined();
      assert.that.eachElementOf([ true, true ]).is.true();
      assert.that.eachElementOf([ false, false ]).is.false();
      assert.that.eachElementOf([ 'foo', 'bar' ]).is.ofType('string');

      assert.that.eachElementOf([ 'foo', 'notbar' ]).is.not.equalTo('bar');
      assert.that.eachElementOf([ 'foo', 'notbar' ]).is.not.identicalTo('bar');
      assert.that.eachElementOf([ 'foo', 'notbar' ]).is.not.sameJsonAs('bar');
      assert.that.eachElementOf([ true, 'foo', 5 ]).is.not.falsy();
      assert.that.eachElementOf([ '', false, undefined ]).is.not.truthy();
      assert.that.eachElementOf([ true, 'foo', 5 ]).is.not.null();
      assert.that.eachElementOf([ true, 'foo', 5 ]).is.not.undefined();
      assert.that.eachElementOf([ false, null ]).is.not.true();
      assert.that.eachElementOf([ true, null ]).is.not.false();
      assert.that.eachElementOf([ 'foo', false, {}]).is.not.ofType('number');
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

      assert.that.eachElementOf([ new Set([ 'foo' ]), new Set([ 'foo' ]) ]).is.containing('foo');
      assert.that.eachElementOf([ new Set([ 'foo' ]), new Set([ 'foo' ]) ]).is.containingAllOf([ 'foo' ]);
      assert.that.eachElementOf([ new Set([ 'foo' ]), new Set([ 'foo' ]) ]).is.containingAnyOf([ 'foo' ]);
      assert.that.eachElementOf([ new Set(), new Set() ]).is.atLeast(new Set());
      assert.that.eachElementOf([ new Set(), new Set() ]).is.atMost(new Set([ 'foo', 'bar' ]));
      assert.that.eachElementOf([ new Set(), new Set() ]).is.empty();

      assert.that.eachElementOf([ new Set([ 'foo' ]), new Set([ 'foo' ]) ]).is.not.containing('bar');
      assert.that.eachElementOf([ new Set([ 'foo' ]), new Set([ 'foo' ]) ]).is.not.containingAllOf([ 'bar' ]);
      assert.that.eachElementOf([ new Set([ 'foo' ]), new Set([ 'foo' ]) ]).is.not.containingAnyOf([ 'bar' ]);
      assert.that.eachElementOf([ new Set() ]).is.not.atLeast(new Set([ 'bar' ]));
      assert.that.eachElementOf([ new Set([ 'anything' ]) ]).is.not.atMost(new Set([]));
      assert.that.eachElementOf([ new Set([ 'foo' ]), new Set([ 'bar' ]) ]).is.not.empty();
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

      assert.that.eachElementOf([ new Map([[ 'foo', 'bar' ]]), new Map([[ 'bar', 'foo' ]]) ]).is.atLeast(new Map());
      assert.that.eachElementOf([ new Map(), new Map([[ 'foo', 'bar' ]]) ]).is.atMost(new Map([[ 'foo', 'bar' ]]));
      assert.that.eachElementOf([ new Map(), new Map() ]).is.empty();

      assert.that.eachElementOf([ new Map([[ 'foo', 'bar' ]]), new Map() ]).is.not.atLeast(new Map([[ 5, 'bar' ], [ 6, 'foo' ]]));
      assert.that.eachElementOf([ new Map([[ 'foo', 'bar' ]]), new Map([[ 'bar', 'foo' ]]) ]).is.not.atMost(new Map());
      assert.that.eachElementOf([ new Map([[ 'foo', 'bar' ]]), new Map([[ 'bar', 'foo' ]]) ]).is.not.empty();
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

      assert.that.eachElementOf([[ 'foo', 'bar' ], [ 'bar', 'foo' ]]).is.containing('foo');
      assert.that.eachElementOf([[ 'foo', 'bar' ], [ 'bar', 'foo' ]]).is.containingAllOf([ 'foo' ]);
      assert.that.eachElementOf([[ 'foo' ], [ 'bar' ]]).is.containingAnyOf([ 'foo', 'bar' ]);
      assert.that.eachElementOf([[], []]).is.empty();

      assert.that.eachElementOf([[ 'foo' ], []]).is.not.containing('bar');
      assert.that.eachElementOf([[ 'foo' ], []]).is.not.containingAllOf([ 'bar' ]);
      assert.that.eachElementOf([[ 'foo' ], []]).is.not.containingAnyOf([ 'bar' ]);
      assert.that.eachElementOf([[ 'foo' ], [ 'bar' ]]).is.not.empty();
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

      assert.that.eachElementOf([ value('foo'), value(5) ]).is.aValue();
      assert.that.eachElementOf([ error(new Error('Foo.')), error(new Error('Bar.')) ]).is.anError();
      assert.that.eachElementOf([ error(new Error('Foo.')), error(new Error('Foo.')) ]).is.anErrorWithMessage('Foo.');

      assert.that.eachElementOf([ error(new Error('Foo.')), error(new Error('Bar.')) ]).is.not.aValue();
      assert.that.eachElementOf([ value(5), value('foo') ]).is.not.anError();
      assert.that.eachElementOf([ value(5), error(new Error('Bar.')) ]).is.not.anErrorWithMessage('Foo.');
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

      assert.that.eachElementOf([ 5, 8 ]).is.greaterThan(4);
      assert.that.eachElementOf([ 3, 5 ]).is.lessThan(6);
      assert.that.eachElementOf([ 5, 8 ]).is.atLeast(5);
      assert.that.eachElementOf([ 3, 5 ]).is.atMost(5);
      // eslint-disable-next-line new-cap
      assert.that.eachElementOf([ Number.NaN, Number.NaN ]).is.NaN();

      assert.that.eachElementOf([ 3, 5 ]).is.not.greaterThan(5);
      assert.that.eachElementOf([ 5, 8 ]).is.not.lessThan(5);
      assert.that.eachElementOf([ 3, 5 ]).is.not.atLeast(6);
      assert.that.eachElementOf([ 5, 8 ]).is.not.atMost(4);
      // eslint-disable-next-line new-cap
      assert.that.eachElementOf([ 5, 8 ]).is.not.NaN();
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

      assert.that.eachElementOf([ 'foo', 'bafo', 'fob' ]).is.containing('fo');
      assert.that.eachElementOf([ 'foo', 'foobar' ]).is.startingWith('fo');
      assert.that.eachElementOf([ 'foo', 'boo' ]).is.endingWith('oo');
      assert.that.eachElementOf([ 'fo', 'of', 'wow even this contains all relevant letters f' ]).is.containingAllOf([ 'f', 'o' ]);
      assert.that.eachElementOf([ 'foo', 'xxx' ]).is.containingAnyOf([ 'f', 'x' ]);
      assert.that.eachElementOf([ '', '' ]).is.empty();
      assert.that.eachElementOf([ 'foo', 'foobar' ]).is.matching(/foo/u);

      assert.that.eachElementOf([ 'foo', 'bfaoro' ]).is.not.containing('bar');
      assert.that.eachElementOf([ 'foo', 'foobar' ]).is.not.startingWith('bar');
      assert.that.eachElementOf([ 'foo', 'barfoo' ]).is.not.endingWith('bar');
      assert.that.eachElementOf([ 'boo', 'far' ]).is.not.containingAllOf([ 'b', 'f' ]);
      assert.that.eachElementOf([ 'foo', 'heck' ]).is.not.containingAnyOf([ 'b', 'a' ]);
      assert.that.eachElementOf([ 'not', 'empty' ]).is.not.empty();
      assert.that.eachElementOf([ 'foo', 'bam' ]).is.not.matching(/bar/u);
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

      assert.that.eachElementOf([
        (): void => {
          throw new Error('Foo.');
        },
        (): void => {
          throw new Error('Bar.');
        }
      ]).is.throwing();
      await assert.that.eachElementOf([
        async (): Promise<void> => {
          throw new Error('Foo.');
        },
        async (): Promise<void> => {
          throw new Error('Bar.');
        }
      ]).is.throwingAsync();

      assert.that.eachElementOf([
        (): void => {
        // Empty function.
        },
        (): number => 5
      ]).is.not.throwing();
      await assert.that.eachElementOf([
        async (): Promise<void> => {
        // Empty function.
        },
        async (): Promise<number> => 5
      ]).is.not.throwingAsync();
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

    assert.that.eachElementOf([{ foo: 'bar' }, { foo: 5 }]).is.atLeast({});
    assert.that.eachElementOf([{ foo: 'foo' }, {}]).is.atMost({ foo: 'foo', bar: 'bar' });
    assert.that.eachElementOf([ new Foo(), new Foo() ]).is.instanceOf(Foo);
    assert.that.eachElementOf([{}, {}]).is.empty();

    assert.that.eachElementOf([{ foo: 'foo' }, {}]).is.not.atLeast({ bar: 'bar' });
    assert.that.eachElementOf([{ foo: 'foo' }, { bar: 5 }]).is.not.atMost({});
    assert.that.eachElementOf([{ foo: 'foo' }, { bar: 'bar' }]).is.not.instanceOf(Array);
    assert.that.eachElementOf([{ foo: 'foo' }, { bar: 'bar' }]).is.not.empty();
  });
});
