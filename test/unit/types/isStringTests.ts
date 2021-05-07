import { assert } from '../../../lib/assertthat';
import { error } from 'defekt';
import { isString } from '../../../lib/types/isString';
import { recursion } from '../../../lib/types/Recursion';

suite('isString', (): void => {
  for (const [ value, type ] of [
    [ 'foo', 'string' ]
  ] as const) {
    test(`returns true if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isString(value)).is.true();
    });
  }

  for (const [ value, type ] of [
    [[], 'array' ],
    [ false, 'boolean' ],
    [ new Error('foo'), 'error' ],
    [ (): string => 'foo', 'function' ],
    [ new Map(), 'map' ],
    [ null, 'null' ],
    [ 5, 'number' ],
    [{}, 'object' ],
    [ error(new Error('foo')), 'Result' ],
    [ new Set(), 'set' ],
    [ Symbol('foo'), 'symbol' ],
    [ undefined, 'undefined' ],
    [ recursion({ recursionPath: 'foo.bar' }), 'recursion' ]
  ] as const) {
    test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isString(value)).is.false();
    });
  }
});
