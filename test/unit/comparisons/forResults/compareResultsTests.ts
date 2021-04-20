import { assert } from '../../../../lib/assertthat';
import { compare } from '../../../../lib/comparisons/typeAware/compare';
import { compareResults } from '../../../../lib/comparisons/forResults/compareResults';
import { equalDiff } from '../../../../lib/diffs/EqualDiff';
import { unequalResultCost } from '../../../../lib/constants/costs';
import { error, value } from 'defekt';
import { expectedErrorGotValueResultDiff, expectedValueGotErrorResultDiff, unequalErrorResultDiff, unequalValueResultDiff } from '../../../../lib/diffs/forResults/ResultDiff';

suite('compareResults', (): void => {
  test('returns an equal diff if the results are equal values.', async (): Promise<void> => {
    const actual = value('foo');
    const expected = value('foo');

    const diff = compareResults(actual, expected);

    assert.that(diff).is.equalTo(equalDiff({ value: actual }));
  });

  test('returns an equal diff if the results are equal errors.', async (): Promise<void> => {
    const actual = error(new Error('foo'));
    const expected = error(new Error('foo'));

    const diff = compareResults(actual, expected);

    assert.that(diff).is.equalTo(equalDiff({ value: actual }));
  });

  test(`returns an 'expected value, got error' diff if actual is an error but expected is a value.`, async (): Promise<void> => {
    const actual = error(new Error('foo'));
    const expected = value('foo');

    const diff = compareResults(actual, expected);

    assert.that(diff).is.equalTo(
      expectedValueGotErrorResultDiff({
        actual,
        expected,
        cost: unequalResultCost
      })
    );
  });

  test(`returns an 'expected error, got value' diff if actual is a value but expected is an error.`, async (): Promise<void> => {
    const actual = value('foo');
    const expected = error(new Error('foo'));

    const diff = compareResults(actual, expected);

    assert.that(diff).is.equalTo(
      expectedErrorGotValueResultDiff({
        actual,
        expected,
        cost: unequalResultCost
      })
    );
  });

  test('returns an error diff if the results are differing errors.', async (): Promise<void> => {
    const actual = error(new Error('foo'));
    const expected = error(new Error('bar'));

    const diff = compareResults(actual, expected);

    assert.that(diff).is.equalTo(
      unequalErrorResultDiff({
        diff: compare(actual.error, expected.error),
        cost: 3
      })
    );
  });

  test('returns a value diff if the results are differing values.', async (): Promise<void> => {
    const actual = value('foo');
    const expected = value('bar');

    const diff = compareResults(actual, expected);

    assert.that(diff).is.equalTo(
      unequalValueResultDiff({
        diff: compare(actual.value, expected.value),
        cost: 3
      })
    );
  });
});
