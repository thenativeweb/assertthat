import { assert } from '../../../lib/assertthat';
import { error } from 'defekt';
import { isFunction } from '../../../lib/types/isFunction';
import { recursion } from '../../../lib/types/Recursion';

suite('isFunction', (): void => {
  for (const [ value, type ] of [
    [ (): string => 'foo', 'function' ]
  ] as const) {
    test(`returns true if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isFunction(value)).is.true();
    });
  }

  for (const [ value, type ] of [
    [[], 'array' ],
    [ new Error('foo'), 'error' ],
    [ false, 'boolean' ],
    [ new Map(), 'map' ],
    [ 5, 'number' ],
    [{}, 'object' ],
    [ error(new Error('foo')), 'Result' ],
    [ new Set(), 'set' ],
    [ 'foo', 'string' ],
    [ Symbol('foo'), 'symbol' ],
    [ undefined, 'undefined' ],
    [ recursion({ recursionPath: 'foo.bar' }), 'recursion' ]
  ] as const) {
    test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isFunction(value)).is.false();
    });
  }
});
