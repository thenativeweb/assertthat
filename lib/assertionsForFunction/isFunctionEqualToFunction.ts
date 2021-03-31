import { AssertionFailed } from '../errors';
import { stripIndent } from 'common-tags';
import { error, Result, value } from 'defekt';

/* eslint-disable @typescript-eslint/ban-types */
const isFunctionEqualToFunction = function (actual: Function, expected: Function): Result<undefined, AssertionFailed> {
  const actualSource = actual.toString();
  const expectedSource = expected.toString();

  if (actualSource === expectedSource) {
    return value();
  }

  return error(new AssertionFailed({
    message: stripIndent`
      The functions are not equal.

      Expected: ${expectedSource}
      Actual: ${actualSource}
    `
  }));
};
/* eslint-enable @typescript-eslint/ban-types */

export {
  isFunctionEqualToFunction
};
