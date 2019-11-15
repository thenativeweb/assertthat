import { fail } from '../fail';

const endingWith = function (actual: any): (expected: string) => void {
  return function (expected): void {
    if (
      actual.length >= expected.length &&
      actual.lastIndexOf(expected) === actual.length - expected.length
    ) {
      return;
    }

    fail('Expected %s to end with %s.', [ actual, expected ]);
  };
};

endingWith.negated = function (actual: any): (expected: string) => void {
  return function (expected): void {
    if (
      actual.length < expected.length ||
      actual.lastIndexOf(expected) !== actual.length - expected.length
    ) {
      return;
    }

    fail('Expected %s not to end with %s.', [ actual, expected ]);
  };
};

export { endingWith };
