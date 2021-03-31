type AssertthatForArray<TContent = any> = (actual: TContent[]) => {
  is: {
    number: symbol;

    equalTo: (expected: TContent[]) => void;
    sameAs: (expected: TContent[]) => void;
    sameJsonAs: (expected: TContent[]) => void;

    not: {
      equalTo: (expected: TContent[]) => void;
      sameAs: (expected: TContent[]) => void;
      sameJsonAs: (expected: TContent[]) => void;
    };
  };
};

const assertthatForArray = function <TContent>(actual: TContent[]): ReturnType<AssertthatForArray<TContent>> {
  return {} as any;
};

export type {
  AssertthatForArray
};

export {
  assertthatForArray
};
