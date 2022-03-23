import { assert } from '../../../../lib';
import { assertAnyIsNotOfType } from '../../../../lib/assertions/forAny/assertAnyIsNotOfType';
import { AssertionFailed } from '../../../../lib/errors';
import { error } from 'defekt';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { Type } from 'typedescriptor';

suite('assertActualIsNotOfType', (): void => {
  test('does not return an error when asserting for the wrong type.', async (): Promise<void> => {
    const actual: any[] = [];
    const type = 'string';

    assert.that(
      assertAnyIsNotOfType(actual, type as Type | 'result')
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
  ] as const) {
    test('returns an error when asserting for a matching type.', async (): Promise<void> => {
      assert.that(
        assertAnyIsNotOfType(value, type)
      ).is.equalTo(error(new AssertionFailed({
        message: `The value is of type ${type}.`,
        actual: prettyPrint(value)
      })));
    });
  }
});
