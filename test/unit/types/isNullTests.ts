import { assert } from '../../../lib/assertthat';
import { error } from 'defekt';
import { isNull } from '../../../lib/types/isNull';
import { recursion } from '../../../lib/types/Recursion';

suite('isNull', (): void => {
  for (const [ value, type ] of [
    [ null, 'null' ]
  ] as const) {
    test(`returns true if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isNull(value)).is.true();
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
    [ undefined, 'undefined' ],
    [ recursion({ recursionPath: 'foo.bar' }), 'recursion' ]
  ] as const) {
    test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isNull(value)).is.false();
    });
  }
});
