import fail from '../fail';

const matching = function (actual: any): (expected: RegExp) => void {
  return function (expected): void {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (expected.test(actual)) {
      return;
    }

    fail('Expected %s to match %s.', [ actual, expected ]);
  };
};

matching.negated = function (actual: any): (expected: RegExp) => void {
  return function (expected): void {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!expected.test(actual)) {
      return;
    }

    fail('Expected %s not to match %s.', [ actual, expected ]);
  };
};

export default matching;
