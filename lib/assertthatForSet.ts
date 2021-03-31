type AssertthatForSet<TContent = any> = (actual: Set<TContent>) => {
  is: {
    number: symbol;

    equalTo: (expected: Set<TContent>) => void;
    falsy: () => void;
    truthy: () => void;
    sameAs: (expected: Set<TContent>) => void;
    sameJsonAs: (expected: Set<TContent>) => void;

    not: {
      equalTo: (expected: Set<TContent>) => void;
      falsy: () => void;
      truthy: () => void;
      sameAs: (expected: Set<TContent>) => void;
      sameJsonAs: (expected: Set<TContent>) => void;
    };
  };
};

const assertthatForSet = function <TContent>(actual: Set<TContent>): ReturnType<AssertthatForSet<TContent>> {
  return {} as any;
};

export type {
  AssertthatForSet
};

export {
  assertthatForSet
};
