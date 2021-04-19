import { CommonAssertions } from '../forAny/CommonAssertions';
import { SetAssertions } from './SetAssertions';

type AssertThatForSet = <TContent>(actual: Set<TContent>) => {
  is: CommonAssertions<Set<TContent>> & SetAssertions<TContent> & {
    not: CommonAssertions<Set<TContent>> & SetAssertions<TContent>;
  };
};

export type {
  AssertThatForSet
};
