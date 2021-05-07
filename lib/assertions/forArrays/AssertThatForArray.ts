import { ArrayAssertions } from './ArrayAssertions';
import { CommonAssertions } from '../forAny/CommonAssertions';

type AssertThatForArray = <TContent>(actual: TContent[]) => {
  is: CommonAssertions<TContent[]> & ArrayAssertions<TContent> & {
    not: CommonAssertions<TContent[]> & ArrayAssertions<TContent>;
  };
};

export type {
  AssertThatForArray
};
