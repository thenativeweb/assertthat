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

    const diffValue = compare(actual.value, expected.value);

    if (diffValue.cost === 0) {
      return equalDiff({
        value: actual
      });
    }

    return unequalValueResultDiff({ diff: diffValue, cost: diffValue.cost });
  }

  if (expected.hasValue()) {
    return expectedValueGotErrorResultDiff({
      cost: unequalResultCost,
      expected,
      actual
    });
  }

  const diffError = compare(actual.error, expected.error);

  if (diffError.cost === 0) {
    return equalDiff({
      value: actual
    });
  }

  return unequalErrorResultDiff({ diff: diffError, cost: diffError.cost });
};

export {
  compareResults
};
