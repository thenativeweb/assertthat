import { assert } from '../../../lib/assertthat';
import { error } from 'defekt';
import { isBoolean } from '../../../lib/types/isBoolean';
import { recursion } from '../../../lib/types/Recursion';

suite('isBoolean', (): void => {
  for (const [ value, type ] of [
    [ false, 'boolean' ]
  ] as const) {
    test(`returns true if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isBoolean(value)).is.true();
    });
  }

  for (const [ value, type ] of [
    [[], 'array' ],
    [ new Error('foo'), 'error' ],
    [ (): string => 'foo', 'function' ],
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
      assert.that(isBoolean(value)).is.false();
    });
  }
});
