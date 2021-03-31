import { AssertionFailed } from '../errors';
import { stripIndent } from 'common-tags';
import { error, Result, value } from 'defekt';

/* eslint-disable @typescript-eslint/ban-types */
const isFunctionNotEqualToFunction = function (actual: Function, expected: Function): Result<undefined, AssertionFailed> {
  const actualSource = actual.toString();
  const expectedSource = expected.toString();

  if (actualSource !== expectedSource) {
    return value();
  }

  return error(new AssertionFailed({
    message: 'The functions are equal.',
    data: {
      formattedMessage: stripIndent`
        The functions are equal.
        Expected not to be: ${expectedSource}
        Actual: ${actualSource}
      `
    }
  }));
};
/* eslint-enable @typescript-eslint/ban-types */

export {
  isFunctionNotEqualToFunction
};
