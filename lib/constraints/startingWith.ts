import { fail } from '../fail';

const startingWith = function (actual: any): (expected: string) => void {
  return function (expected): void {
    if (actual.indexOf(expected) === 0) {
      return;
    }

    fail('Expected %s to start with %s.', [ actual, expected ]);
  };
};

startingWith.negated = function (actual: any): (expected: string) => void {
  return function (expected): void {
    if (actual.indexOf(expected) !== 0) {
      return;
    }

    fail('Expected %s not to start with %s.', [ actual, expected ]);
  };
};

export { startingWith };
