import { assert } from '../../../lib/assertthat';
import { error } from 'defekt';
import { isUndefined } from '../../../lib/types/isUndefined';
import { recursion } from '../../../lib/types/Recursion';

suite('isUndefined', (): void => {
  for (const [ value, type ] of [
    [ undefined, 'undefined' ]
  ] as const) {
    test(`returns true if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isUndefined(value)).is.true();
    });
  }

  for (const [ value, type ] of [
    [[], 'array' ],
    [ false, 'boolean' ],
    [ new Error('foo'), 'error' ],
    [ (): string => 'foo', 'function' ],
    [ new Map(), 'map' ],
    [ 5, 'number' ],
    [{}, 'object' ],
    [ error(new Error('foo')), 'Result' ],
    [ new Set(), 'set' ],
    [ 'foo', 'string' ],
    [ Symbol('foo'), 'symbol' ],
    [ recursion({ recursionPath: 'foo.bar' }), 'recursion' ]
  ] as const) {
    test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isUndefined(value)).is.false();
    });
  }
});
