import { CommonAssertions } from './CommonAssertions';

type AssertThatForAny = <TAny>(actual: TAny) => {
  is: CommonAssertions<TAny> & {
    not: CommonAssertions<TAny>;
  };
};

export type {
  AssertThatForAny
};
