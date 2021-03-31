type AssertthatForObject<TObject extends object = any> = (actual: TObject) => {
  is: {
    number: symbol;

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
  return {} as any;
};

export type {
  AssertthatForObject
};

export {
  assertthatForObject
};
