import { assert } from '../../../lib/assertthat';
import { error } from 'defekt';
import { isScalar } from '../../../lib/types/isScalar';
import { recursion } from '../../../lib/types/Recursion';

suite('isScalar', (): void => {
  for (const [ value, type ] of [
    [ false, 'boolean' ],
    [ null, 'null' ],
    [ 5, 'number' ],
    [ 'foo', 'string' ],
    [ Symbol('foo'), 'symbol' ],
    [ undefined, 'undefined' ]
  ] as const) {
    test(`returns true if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isScalar(value)).is.true();
    });
  }

  for (const [ value, type ] of [
    [[], 'array' ],
    [ new Error('foo'), 'error' ],
    [ (): string => 'foo', 'function' ],
    [ new Map(), 'map' ],
    [{}, 'object' ],
    [ error(new Error('foo')), 'Result' ],
    [ new Set(), 'set' ],
    [ recursion({ recursionPath: 'foo.bar' }), 'recursion' ]
  ] as const) {
    test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
      assert.that(isScalar(value)).is.false();
    });
  }
});
