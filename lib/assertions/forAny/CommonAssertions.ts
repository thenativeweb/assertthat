import { Type } from '../../types/Type';

interface CommonAssertions<TAny> {
  equalTo: (expected: TAny) => void;
  identicalTo: (expected: TAny) => void;
  sameJsonAs: (expected: TAny) => void;

  falsy: () => void;
  truthy: () => void;

  null: () => void;
  undefined: () => void;

  ofType: (expected: Type) => void;
}

export type {
  CommonAssertions
};
