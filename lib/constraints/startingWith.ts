import fail from '../fail';

const startingWith = function (actual: any): (expected: string) => void {
  return function (expected): void {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (actual.indexOf(expected) === 0) {
      return;
    }

    fail('Expected %s to start with %s.', [ actual, expected ]);
  };
};

startingWith.negated = function (actual: any): (expected: string) => void {
  return function (expected): void {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (actual.indexOf(expected) !== 0) {
      return;
    }

    fail('Expected %s not to start with %s.', [ actual, expected ]);
  };
};

export default startingWith;
