import fail from '../fail';

const containing = function (actual: any): (expected: any) => void {
  return function (expected): void {
    if (actual.includes(expected)) {
      return;
    }

    fail('Expected %s to contain %s.', [ actual, expected ]);
  };
};

containing.negated = function (actual: any): (expected: any) => void {
  return function (expected): void {
    if (!actual.includes(expected)) {
      return;
    }

    fail('Expected %s not to contain %s.', [ actual, expected ]);
  };
};

export default containing;
