import { assert } from '../../../../lib';
import { assertActualIsNotSameJsonAsExpected } from '../../../../lib/assertions/forAny/assertActualIsNotSameJsonAsExpected';
import { AssertionFailed } from '../../../../lib/errors';
import { error, value } from 'defekt';

suite('assertActualIsNotSameJsonAsExpected', (): void => {
  test('does not return an error if actual does not have the same JSON representation as expected.', async (): Promise<void> => {
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
      assertActualIsNotSameJsonAsExpected(actual, expected)
    ).is.equalTo(
      value()
    );
  });

  test('returns an error if actual has the same JSON representation as expected.', async (): Promise<void> => {
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
      assertActualIsNotSameJsonAsExpected(actual, expected)
    ).is.equalTo(
      error(new AssertionFailed({
        message: 'The values have the same JSON representation.',
        expected: `Not to equal:\n${JSON.stringify(expected)}`
      }))
    );
  });
});
