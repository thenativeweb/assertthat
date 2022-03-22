import { assert } from '../../../../lib';
import { assertAnyIsNotEqualToExpected } from '../../../../lib/assertions/forAny/assertAnyIsNotEqualToExpected';
import { AssertionFailed } from '../../../../lib/errors';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { error, value } from 'defekt';

suite('assertActualIsNotEqualToExpected', (): void => {
  test('does not return an error if actual is not equal to expected.', async (): Promise<void> => {
    const actual = {
      foo: 'foo',
      bar: [ 1, 2 ],
      set: new Set([ 1, 3, 7 ]),
      map: new Map([[ 'foo', 'foo' ], [ 'bar', 'bar' ]]),
      bam: false,
      bas: { bat: {}}
    };
    const expected = {
      foo: 'foo',
      bar: [ 1, 2 ],
      set: new Set([ 1, 3 ]),
      map: new Map([[ 'foo', 'not foo' ], [ 'bar', 'bar' ]]),
      bam: false,
      bas: { bat: {}}
    };

    assert.that(
      assertAnyIsNotEqualToExpected(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is equal to expected.', async (): Promise<void> => {
    const actual = {
      foo: 'foo',
      bar: [ 1, 2 ],
      set: new Set([ 1, 3, 7 ]),
      map: new Map([[ 'foo', 'foo' ], [ 'bar', 'bar' ]]),
      bam: false,
      bas: { bat: {}}
    };
    const expected = {
      foo: 'foo',
      bar: [ 1, 2 ],
      set: new Set([ 1, 3, 7 ]),
      map: new Map([[ 'foo', 'foo' ], [ 'bar', 'bar' ]]),
      bam: false,
      bas: { bat: {}}
    };

    assert.that(
      assertAnyIsNotEqualToExpected(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The values are equal.',
        expected: `Not to equal:\n${prettyPrint(expected)}`
      }))
    );
  });
});
