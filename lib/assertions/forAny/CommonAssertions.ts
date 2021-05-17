import { Type } from 'typedescriptor';

interface CommonAssertions<TAny> {
  equalTo: (expected: TAny) => void;
  identicalTo: (expected: TAny) => void;
  sameJsonAs: (expected: TAny) => void;

  falsy: () => void;
  truthy: () => void;

  null: () => void;
  undefined: () => void;
  true: () => void;
  false: () => void;

  ofType: (expected: Type | 'result') => void;
}

export type {
  CommonAssertions
};
