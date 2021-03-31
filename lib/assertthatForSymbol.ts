type AssertthatForSymbol = (actual: symbol) => {
  is: {
    number: symbol;

    equalTo: (expected: symbol) => void;
    sameAs: (expected: symbol) => void;

    not: {
      equalTo: (expected: symbol) => void;
      sameAs: (expected: symbol) => void;
    };
  };
};

const assertthatForSymbol = function (actual: symbol): ReturnType<AssertthatForSymbol> {
  return {} as any;
};

export type {
  AssertthatForSymbol
};

export {
  assertthatForSymbol
};
