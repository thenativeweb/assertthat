type AssertthatForBoolean = (actual: boolean) => {
  is: {
    number: symbol;

    equalTo: (expected: boolean) => void;
    falsy: () => void;
    truthy: () => void;
    sameAs: (expected: boolean) => void;
    sameJsonAs: (expected: boolean) => void;

    not: {
      equalTo: (expected: boolean) => void;
      falsy: () => void;
      truthy: () => void;
      sameAs: (expected: boolean) => void;
      sameJsonAs: (expected: boolean) => void;
    };
  };
};

const assertthatForBoolean = function (actual: boolean): ReturnType<AssertthatForBoolean> {
  return {} as any;
};

export type {
  AssertthatForBoolean
};

export {
  assertthatForBoolean
};
