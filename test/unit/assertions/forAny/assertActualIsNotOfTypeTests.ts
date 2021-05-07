import { assert } from '../../../../lib';
import { assertActualIsNotOfType } from '../../../../lib/assertions/forAny/assertActualIsNotOfType';
import { AssertionFailed } from '../../../../lib/errors';
import { error } from 'defekt';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { Type } from '../../../../lib/types/Type';

suite('assertActualIsNotOfType', (): void => {
  test('does not return an error when asserting for the wrong type.', async (): Promise<void> => {
    const actual: any[] = [];
    const type = 'string';

    assert.that(
      assertActualIsNotOfType(actual, type as Type)
    ).is.aValue();
  });

  for (const [ value, type ] of [
    [[], 'array' ],
    [ false, 'boolean' ],
    [ new Error('foo'), 'error' ],
    [ (): string => 'foo', 'function' ],
    [ new Map(), 'map' ],
    [ null, 'null' ],
    [ 5, 'number' ],
    [{}, 'object' ],
    [ error(new Error('foo')), 'result' ],
    [ new Set(), 'set' ],
    [ 'foo', 'string' ],
    [ Symbol('foo'), 'symbol' ],
    [ undefined, 'undefined' ]
  ]) {
    test('returns an error when asserting for a matching type.', async (): Promise<void> => {
      assert.that(
        assertActualIsNotOfType(value, type as Type)
      ).is.equalTo(error(new AssertionFailed({
        message: `The value is of type ${type}.`,
        actual: prettyPrint(value)
      })));
    });
  }
});
