import { assert } from '../../../lib/assertthat';
import { error } from 'defekt';
import { isError } from '../../../lib/types/isError';
import { recursion } from '../../../lib/types/Recursion';

suite('isError', (): void => {
  for (const [ value, type ] of [
    [ new Error('foo'), 'error' ]
  ] as const) {
    test(`returns true if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isError(value)).is.true();
    });
  }

  for (const [ value, type ] of [
    [[], 'array' ],
    [ false, 'boolean' ],
    [ (): string => 'foo', 'function' ],
    [ 5, 'number' ],
    [ new Map(), 'map' ],
    [{}, 'object' ],
    [ error(new Error('foo')), 'Result' ],
    [ new Set(), 'set' ],
    [ 'foo', 'string' ],
    [ Symbol('foo'), 'symbol' ],
    [ undefined, 'undefined' ],
    [ recursion({ recursionPath: 'foo.bar' }), 'recursion' ]
  ] as const) {
    test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isError(value)).is.false();
    });
  }
});
