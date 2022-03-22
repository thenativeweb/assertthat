import { assert } from '../../../../lib';
import { assertAnyIsEqualToExpected } from '../../../../lib/assertions/forAny/assertAnyIsEqualToExpected';
import { AssertionFailed } from '../../../../lib/errors';
import { compare } from '../../../../lib/comparisons/typeAware/compare';
import { prettyPrint } from '../../../../lib/prettyPrint/typeAware/prettyPrint';
import { prettyPrintDiff } from '../../../../lib/prettyPrint/typeAware/prettyPrintDiff';
import { error, value } from 'defekt';

suite('assertActualIsEqualToExpected', (): void => {
  test('does not return an error if actual is equal to expected.', async (): Promise<void> => {
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
      assertAnyIsEqualToExpected(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual is not equal to expected.', async (): Promise<void> => {
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
      assertAnyIsEqualToExpected(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The values are not equal.',
        actual: prettyPrint(actual),
        expected: prettyPrint(expected),
        diff: prettyPrintDiff(compare(actual, expected))
      }))
    );
  });

  suite('regression tests', (): void => {
    test('recognizes empty reference types as difference.', async (): Promise<void> => {
      const actual = { foo: []};
      const expected = {};

      assert.that(
        assertAnyIsEqualToExpected(actual, expected)
      ).is.equalTo(
        error(new AssertionFailed({
          message: 'The values are not equal.',
          actual: prettyPrint(actual),
          expected: prettyPrint(expected),
          diff: prettyPrintDiff(compare(actual, expected))
        }))
      );
    });
  });
});
