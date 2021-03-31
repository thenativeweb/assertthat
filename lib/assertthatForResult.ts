import { Result } from 'defekt';

type AssertthatForResult<TValue = any, TError extends Error = any> = (actual: Result<TValue, TError>) => {
  is: {
    number: symbol;

    equalTo: (expected: Result<TValue, TError>) => void;
    sameAs: (expected: Result<TValue, TError>) => void;

    not: {
      equalTo: (expected: Result<TValue, TError>) => void;
      sameAs: (expected: Result<TValue, TError>) => void;
    };
  };
};

const assertthatForResult = function <TValue, TError extends Error>(actual: Result<TValue, TError>): ReturnType<AssertthatForResult<TValue, TError>> {
  return {} as any;
};

export type {
  AssertthatForResult
};

export {
  assertthatForResult
};
