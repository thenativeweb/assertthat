type AssertthatForNumber = (actual: number) => {
  is: {
    number: symbol;

    equalTo: (expected: number) => void;
    falsy: () => void;
    truthy: () => void;
    sameAs: (expected: number) => void;
    sameJsonAs: (expected: number) => void;

    greaterThan: (expected: number) => void;
    lessThan: (expected: number) => void;
    atLeast: (expected: number) => void;
    atMost: (expected: number) => void;
    isNan: () => void;

    not: {
      equalTo: (expected: number) => void;
      falsy: () => void;
      truthy: () => void;
      sameAs: (expected: number) => void;
      sameJsonAs: (expected: number) => void;

      greaterThan: (expected: number) => void;
      lessThan: (expected: number) => void;
      atLeast: (expected: number) => void;
      atMost: (expected: number) => void;
      isNan: () => void;
    };
  };
};

const assertthatForNumber = function (actual: number): ReturnType<AssertthatForNumber> {
  return {} as any;
};

export type {
  AssertthatForNumber
};

export {
  assertthatForNumber
};
