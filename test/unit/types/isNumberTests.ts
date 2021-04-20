import { assert } from '../../../lib/assertthat';
import { error } from 'defekt';
import { isNumber } from '../../../lib/types/isNumber';
import { recursion } from '../../../lib/types/Recursion';

suite('isNumber', (): void => {
  for (const [ value, type ] of [
    [ 5, 'number' ]
  ] as const) {
    test(`returns true if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isNumber(value)).is.true();
    });
  }

  for (const [ value, type ] of [
    [[], 'array' ],
    [ false, 'boolean' ],
    [ new Error('foo'), 'error' ],
    [ (): string => 'foo', 'function' ],
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
      assert.that(isNumber(value)).is.false();
    });
  }
});
