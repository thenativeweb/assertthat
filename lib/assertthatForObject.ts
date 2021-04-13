import { assertObjectIsEqualToObject } from './assertions2/forObjects/assertObjectIsEqualToObject';
import { report2 } from './report2';

type AssertthatForObject<TObject extends object = any> = (actual: TObject) => {
  is: {
    equalTo: (expected: TObject) => void;
    falsy: () => void;
    truthy: () => void;
    sameAs: (expected: TObject) => void;
    sameJsonAs: (expected: TObject) => void;

    not: {
      equalTo: (expected: TObject) => void;
      falsy: () => void;
      truthy: () => void;
      sameAs: (expected: TObject) => void;
      sameJsonAs: (expected: TObject) => void;
    };
  };
};

const assertthatForObject = function <TObject extends object>(actual: TObject): ReturnType<AssertthatForObject<TObject>> {
  return {
    is: {
      equalTo (expected: TObject): void {
        report2(assertObjectIsEqualToObject(actual, expected));
      }
    }
  } as any;
};

export type {
  AssertthatForObject
};

export {
  assertthatForObject
};
