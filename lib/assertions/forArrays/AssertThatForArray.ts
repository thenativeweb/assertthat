import { ArrayAssertions } from './ArrayAssertions';
import { CommonAssertions } from '../forAny/CommonAssertions';

type AssertThatForArray = <TContent>(actual: TContent[]) => {
  is: CommonAssertions<TContent[]> & ArrayAssertions & {
    not: CommonAssertions<TContent[]> & ArrayAssertions;
  };
};

export type {
  AssertThatForArray
};
