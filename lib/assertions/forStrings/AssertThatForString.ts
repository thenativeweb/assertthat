import { CommonAssertions } from '../forAny/CommonAssertions';
import { StringAssertions } from './StringAssertions';

type AssertThatForString = (actual: string) => {
  is: CommonAssertions<string> & StringAssertions & {
    not: CommonAssertions<string> & StringAssertions;
  };
};

export type {
  AssertThatForString
};
