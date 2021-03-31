type AssertthatForMap<TKey = any, TValue = any> = (actual: Map<TKey, TValue>) => {
  is: {
    number: symbol;

    equalTo: (expected: number) => void;
    sameAs: (expected: number) => void;

    not: {
      equalTo: (expected: number) => void;
      sameAs: (expected: number) => void;
    };
  };
};

const assertthatForMap = function <TKey, TValue>(actual: Map<TKey, TValue>): ReturnType<AssertthatForMap<TKey, TValue>> {
  return {} as any;
};

export type {
  AssertthatForMap
};

export {
  assertthatForMap
};
