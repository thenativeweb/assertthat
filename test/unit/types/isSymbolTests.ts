import { assert } from '../../../lib/assertthat';
import { error } from 'defekt';
import { isSymbol } from '../../../lib/types/isSymbol';
import { recursion } from '../../../lib/types/Recursion';

suite('isSymbol', (): void => {
  for (const [ value, type ] of [
    [ Symbol('foo'), 'symbol' ]
  ] as const) {
    test(`returns true if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isSymbol(value)).is.true();
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
    [ undefined, 'undefined' ],
    [ recursion({ recursionPath: 'foo.bar' }), 'recursion' ]
  ] as const) {
    test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isSymbol(value)).is.false();
    });
  }
});
