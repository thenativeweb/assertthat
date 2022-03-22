import { AssertionFailed } from '../../errors';
import { compare } from '../../comparisons/typeAware/compare';
import { prettyPrintDiff } from '../../prettyPrint/typeAware/prettyPrintDiff';
import { error, Result, value } from 'defekt';

const assertAnyIsSameJsonAsExpected = function (
  actual: any,
  expected: any
): Result<undefined, AssertionFailed> {
  const actualJson = JSON.stringify(actual);
  const expectedJson = JSON.stringify(expected);

  if (actualJson === expectedJson) {
    return value();
  }

  const diff = compare(actualJson, expectedJson);

  return error(new AssertionFailed({
    message: 'The values do not have the same JSON representation.',
    expected: expectedJson,
    actual: actualJson,
    diff: prettyPrintDiff(diff)
  }));
};

export {
  assertAnyIsSameJsonAsExpected
};
