import { assert } from '../../../../lib';
import { assertActualIsOfType } from '../../../../lib/assertions/forAny/assertActualIsOfType';
import { AssertionFailed } from '../../../../lib/errors';
import { error } from 'defekt';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { Type } from '../../../../lib/types/Type';

suite('assertActualIsOfType', (): void => {
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
    test('does not return an error when asserting for the correct type.', async (): Promise<void> => {
      assert.that(
        assertActualIsOfType(value, type as Type)
      ).is.aValue();
    });
  }

  test('returns an error when asserting for the wrong type.', async (): Promise<void> => {
    const actual: any[] = [];
    const type = 'string';

    assert.that(
      assertActualIsOfType(actual, type as Type)
    ).is.equalTo(error(new AssertionFailed({
      message: 'The value is not of type string.',
      actual: prettyPrint(actual)
    })));
  });
});
