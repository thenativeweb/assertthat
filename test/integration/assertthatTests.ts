import { assert } from '../../lib';
import { error, value } from 'defekt';

suite(`assertthat's types allow the required assertions on each type`, (): void => {
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
  });
});
