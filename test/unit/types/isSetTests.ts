import { assert } from '../../../lib/assertthat';
import { error } from 'defekt';
import { isSet } from '../../../lib/types/isSet';
import { recursion } from '../../../lib/types/Recursion';

suite('isSet', (): void => {
  for (const [ value, type ] of [
    [ new Set(), 'set' ]
  ] as const) {
    test(`returns true if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isSet(value)).is.true();
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
    [ 'foo', 'string' ],
    [ Symbol('foo'), 'symbol' ],
    [ undefined, 'undefined' ],
    [ recursion({ recursionPath: 'foo.bar' }), 'recursion' ]
  ] as const) {
    test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isSet(value)).is.false();
    });
  }
});
