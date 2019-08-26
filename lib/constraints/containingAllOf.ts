import fail from '../fail';

const containsAll = function (actual: any[], expected: any[]): boolean {
  return expected.every((element: any): boolean => actual.includes(element));
};

const containingAllOf = function (actual: any): (expected: any[]) => void {
  return function (expected): void {
    if (containsAll(actual, expected)) {
      return;
    }

    fail('Expected %s to contain all of %s.', [ actual, expected ]);
  };
};

containingAllOf.negated = function (actual: any): (expected: any[]) => void {
  return function (expected): void {
    if (!containsAll(actual, expected)) {
      return;
    }

    fail('Expected %s not to contain all of %s.', [ actual, expected ]);
  };
};

export default containingAllOf;
