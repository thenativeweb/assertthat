import { fail } from '../fail';

const matching = function (actual: any): (expected: RegExp) => void {
  return function (expected): void {
    if (expected.test(actual)) {
      return;
    }

    fail('Expected %s to match %s.', [ actual, expected ]);
  };
};

matching.negated = function (actual: any): (expected: RegExp) => void {
  return function (expected): void {
    if (!expected.test(actual)) {
      return;
    }

    fail('Expected %s not to match %s.', [ actual, expected ]);
  };
};

export { matching };
