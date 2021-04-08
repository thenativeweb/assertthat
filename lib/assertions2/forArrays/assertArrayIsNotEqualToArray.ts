import { AssertionFailed2 } from '../../errors';
import { compareArrays } from '../../comparisons2/forArrays/compareArrays';
import { prettyPrintArray } from '../../prettyPrint/forArrays/prettyPrintArray';
import { stripIndents } from 'common-tags';
import { error, Result, value } from 'defekt';

const assertArrayIsNotEqualToArray = function <TContent>(
  actual: TContent[],
  expected: TContent[]
): Result<undefined, AssertionFailed2> {
  const result = compareArrays(actual, expected);

  if (result.cost === 0) {
    return value();
  }

  return error(new AssertionFailed2({
    message: 'The arrays are not equal.',
    expected: stripIndents`
      To not equal:
      ${prettyPrintArray(expected)}
    `
  }));
};

export {
  assertArrayIsNotEqualToArray
};
