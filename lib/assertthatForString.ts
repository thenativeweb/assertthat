type AssertthatForString = (actual: string) => {
  is: {
    number: symbol;

    equalTo: (expected: string) => void;
    falsy: () => void;
    truthy: () => void;
    sameAs: (expected: string) => void;
    sameJsonAs: (expected: string) => void;

    not: {
      equalTo: (expected: string) => void;
      falsy: () => void;
      truthy: () => void;
      sameAs: (expected: string) => void;
      sameJsonAs: (expected: string) => void;
    };
  };
};

const assertthatForString = function (actual: string): ReturnType<AssertthatForString> {
  return {} as any;
};

export type {
  AssertthatForString
};

export {
  assertthatForString
};
