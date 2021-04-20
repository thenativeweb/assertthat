import { assert } from '../../../lib/assertthat';
import { error } from 'defekt';
import { isObject } from '../../../lib/types/isObject';
import { recursion } from '../../../lib/types/Recursion';

suite('isObject', (): void => {
  for (const [ value, type ] of [
    [[], 'array' ],
    [ new Error('foo'), 'error' ],
    [ new Map(), 'map' ],
    [{}, 'object' ],
    [ error(new Error('foo')), 'Result' ],
    [ new Set(), 'set' ],
    [ recursion({ recursionPath: 'foo.bar' }), 'recursion' ]
  ] as const) {
    test(`returns true if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isObject(value)).is.true();
    });
  }

  for (const [ value, type ] of [
    [ false, 'boolean' ],
    [ (): string => 'foo', 'function' ],
    [ 5, 'number' ],
    [ 'foo', 'string' ],
    [ Symbol('foo'), 'symbol' ],
    [ undefined, 'undefined' ]
  ] as const) {
    test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isObject(value)).is.false();
    });
  }
});
