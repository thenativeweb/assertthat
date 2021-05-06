import { CommonAssertions } from '../forAny/CommonAssertions';
import { ObjectAssertions } from './ObjectAssertions';

type AssertThatForObject = (actual: object) => {
  is: CommonAssertions<object> & ObjectAssertions & {
    not: CommonAssertions<object> & ObjectAssertions;
  };
};

export type {
  AssertThatForObject
};
