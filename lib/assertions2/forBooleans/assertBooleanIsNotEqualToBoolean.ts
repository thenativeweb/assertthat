import { AssertionFailed2 } from '../../errors';
import { compareBooleans } from '../../comparisons2/forBooleans/compareBooleans';
import { prettyPrintBoolean } from '../../prettyPrint/forBooleans/prettyPrintBoolean';
import { stripIndents } from 'common-tags';
import { error, Result, value } from 'defekt';

const assertBooleanIsNotEqualToBoolean = function (
  actual: boolean,
  expected: boolean
): Result<undefined, AssertionFailed2> {
  const result = compareBooleans(actual, expected);

  if (result.cost !== 0) {
    return value();
  }

  return error(new AssertionFailed2({
    message: 'The booleans are equal.',
    expected: stripIndents`
      To not equal:
      ${prettyPrintBoolean(expected)}
    `
  }));
};

export {
  assertBooleanIsNotEqualToBoolean
};
