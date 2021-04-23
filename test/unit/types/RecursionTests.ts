import { assert } from '../../../lib/assertthat';
import { error } from 'defekt';
import { isRecursion, recursion } from '../../../lib/types/Recursion';

suite('Recursion', (): void => {
  suite('isRecursion', (): void => {
    for (const [ value, type ] of [
      [ recursion({ recursionPath: 'foo.bar' }), 'recursion' ]
    ] as const) {
      test(`returns true if given a(n) ${type}.`, async (): Promise<void> => {
        assert.that(isRecursion(value)).is.true();
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
      [ 'foo', 'string' ],
      [ Symbol('foo'), 'symbol' ],
      [ undefined, 'undefined' ]
    ] as const) {
      test(`returns false if given a(n) ${type}.`, async (): Promise<void> => {
        assert.that(isRecursion(value)).is.false();
      });
    }
  });
});
