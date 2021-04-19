import { BooleanAssertions } from './BooleanAssertions';
import { CommonAssertions } from '../forAny/CommonAssertions';

type AssertThatForBoolean = (actual: boolean) => {
  is: CommonAssertions<boolean> & BooleanAssertions & {
    not: CommonAssertions<boolean> & BooleanAssertions;
  };
};

export type {
  AssertThatForBoolean
};
