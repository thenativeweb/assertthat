import fail from '../fail';

const containsAny = function (actual: any[], expected: any[]): boolean {
  return expected.some((element: any): boolean => actual.includes(element));
};

const containingAnyOf = function (actual: any): (expected: any[]) => void {
  return function (expected): void {
    if (containsAny(actual, expected)) {
      return;
    }

    fail('Expected %s to contain any of %s.', [ actual, expected ]);
  };
};

containingAnyOf.negated = function (actual: any): (expected: any[]) => void {
  return function (expected): void {
    if (!containsAny(actual, expected)) {
      return;
    }

    fail('Expected %s not to contain any of %s.', [ actual, expected ]);
  };
};

export default containingAnyOf;
