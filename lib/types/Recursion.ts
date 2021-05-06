const recursionSymbol: unique symbol = Symbol('recursion');

const recursion = function (parameters: Omit<Recursion, 'type'>): Recursion {
  return {
    type: recursionSymbol,
    ...parameters
  };
};

interface Recursion {
  type: typeof recursionSymbol;
  recursionPath: string;
}

const isRecursion = function (value: any): value is Recursion {
  return typeof value === 'object' &&
    value !== null &&
    'type' in value &&
    value.type === recursionSymbol;
};

export type {
  Recursion
};

export {
  isRecursion,
  recursion
};
