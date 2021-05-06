import { CommonAssertions } from '../forAny/CommonAssertions';
import { NumberAssertions } from './NumberAssertions';

type AssertThatForNumber = (actual: number) => {
  is: CommonAssertions<number> & NumberAssertions & {
    not: CommonAssertions<number> & NumberAssertions;
  };
};

export type {
  AssertThatForNumber
};
