// eslint-disable-next-line no-redeclare,@typescript-eslint/unified-signatures
function that (actual: number): {
  is: {
    number: symbol;

    not: {

    };
  };
};
// eslint-disable-next-line no-redeclare,@typescript-eslint/unified-signatures
function that (actual: string): {
  is: {
    string: symbol;

    not: {

    };
  };
};
// eslint-disable-next-line no-redeclare,@typescript-eslint/unified-signatures
function that (actual: boolean): {
  is: {
    boolean: symbol;

    not: {

    };
  };
};
// eslint-disable-next-line no-redeclare,@typescript-eslint/unified-signatures
function that (actual: any[]): {
  is: {
    array: symbol;

    not: {

    };
  };
};
// eslint-disable-next-line no-redeclare,@typescript-eslint/unified-signatures
function that (actual: symbol): {
  is: {
    symbol: symbol;

    not: {

    };
  };
};
// eslint-disable-next-line no-redeclare,@typescript-eslint/unified-signatures
function that (actual: Set<any>): {
  is: {
    set: symbol;

    not: {

    };
  };
};
// eslint-disable-next-line no-redeclare,@typescript-eslint/unified-signatures
function that (actual: Map<any, any>): {
  is: {
    map: symbol;

    not: {

    };
  };
};
// eslint-disable-next-line no-redeclare,@typescript-eslint/ban-types
function that (actual: Function): {
  is: {
    function: symbol;

    not: {

    };
  };
};
// eslint-disable-next-line no-redeclare,@typescript-eslint/unified-signatures
function that (actual: object): {
  is: {
    object: symbol;

    not: {

    };
  };
};

// eslint-disable-next-line func-style,no-redeclare
function that (actual: any): any {
  const hasTypeDependentProperty: any = {};

  if (actual.instanceOf(Set)) {
    hasTypeDependentProperty.set = Symbol('Set');
  } else if (actual.instanceOf(Map)) {
    hasTypeDependentProperty.map = Symbol('Map');
  } else if (Array.isArray(actual)) {
    hasTypeDependentProperty.array = Symbol('Array');
  } else if (typeof actual === 'number') {
    hasTypeDependentProperty.number = Symbol('number');
  } else if (typeof actual === 'string') {
    hasTypeDependentProperty.string = Symbol('string');
  } else if (typeof actual === 'boolean') {
    hasTypeDependentProperty.boolean = Symbol('boolean');
  } else if (typeof actual === 'symbol') {
    hasTypeDependentProperty.symbol = Symbol('symbol');
  } else if (typeof actual === 'object') {
    hasTypeDependentProperty.object = Symbol('object');
  }

  return {
    is: {
      ...hasTypeDependentProperty,

      not: {

      }
    }
  };
}

const assert = {
  that
};

export {
  assert
};
