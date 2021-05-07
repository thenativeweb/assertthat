import { assert } from '../../../../lib';
import { assertActualIsSameJsonAsExpected } from '../../../../lib/assertions/forAny/assertActualIsSameJsonAsExpected';
import { AssertionFailed } from '../../../../lib/errors';
import { compare } from '../../../../lib/comparisons/typeAware/compare';
import { prettyPrintDiff } from '../../../../lib/prettyPrint/typeAware/prettyPrintDiff';
import { error, value } from 'defekt';

suite('assertActualIsSameJsonAsExpected', (): void => {
  test('does not return an error if actual has the same JSON representation as expected.', async (): Promise<void> => {
    const actual = {
      foo: 'foo',
      bar: [ 1, 2 ],
      bam: false,
      bas: { bat: {}}
    };
    const expected = {
      foo: 'foo',
      bar: [ 1, 2 ],
      bam: false,
      bas: { bat: {}}
    };

    assert.that(
      assertActualIsSameJsonAsExpected(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual does not have the same JSON representation as expected.', async (): Promise<void> => {
    const actual = {
      foo: 'foo',
      bar: [ 1, 2, 3, 4 ],
      bam: false,
      bas: { bat: {}}
    };
    const expected = {
      foo: 'foo',
      bar: [ 1, 2 ],
      bam: true,
      bas: { bat: {}}
    };

    assert.that(
      assertActualIsSameJsonAsExpected(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The values do not have the same JSON representation.',
        actual: JSON.stringify(actual),
        expected: JSON.stringify(expected),
        diff: prettyPrintDiff(compare(JSON.stringify(actual), JSON.stringify(expected)))
      }))
    );
  });
});
