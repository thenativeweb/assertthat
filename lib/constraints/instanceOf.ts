import fail from '../fail';

const instanceOf = function (actual: any): (expected: new(...args: any[]) => {}) => void {
  return function (expected): void {
    if (actual instanceof expected) {
      return;
    }

    fail('Expected %s to be an instance of %s.', [ actual, expected ]);
  };
};

instanceOf.negated = function (actual: any): (expected: new(...args: any[]) => {}) => void {
  return function (expected): void {
    if (!(actual instanceof expected)) {
      return;
    }

    fail('Expected %s not to be an instance of %s.', [ actual, expected ]);
  };
};

export default instanceOf;
