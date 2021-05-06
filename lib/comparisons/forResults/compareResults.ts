import { compare } from '../typeAware/compare';
import { Result } from 'defekt';
import { unequalResultCost } from '../../constants/costs';
import { equalDiff, EqualDiff } from '../../diffs/EqualDiff';
import { expectedErrorGotValueResultDiff, expectedValueGotErrorResultDiff, ResultDiff, unequalErrorResultDiff, unequalValueResultDiff } from '../../diffs/forResults/ResultDiff';

const compareResults = function (
  actual: Result<any, Error>,
  expected: Result<any, Error>
): ResultDiff | EqualDiff {
  if (actual.hasValue()) {
    if (expected.hasError()) {
      return expectedErrorGotValueResultDiff({
        cost: unequalResultCost,
        expected,
        actual
      });
    }
    const diff = compare(actual.value, expected.value);

    if (diff.cost === 0) {
      return equalDiff({
        value: actual
      });
    }

    return unequalValueResultDiff({ diff, cost: diff.cost });
  }

  if (expected.hasValue()) {
    return expectedValueGotErrorResultDiff({
      cost: unequalResultCost,
      expected,
      actual
    });
  }

  const diff = compare(actual.error, expected.error);

  if (diff.cost === 0) {
    return equalDiff({
      value: actual
    });
  }

  return unequalErrorResultDiff({ diff, cost: diff.cost });
};

export {
  compareResults
};
