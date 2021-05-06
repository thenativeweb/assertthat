import { CommonAssertions } from '../forAny/CommonAssertions';
import { FunctionAssertions } from './FunctionAssertions';

/* eslint-disable @typescript-eslint/ban-types */
type AssertThatForFunction = (actual: Function) => {
  is: CommonAssertions<Function> & FunctionAssertions & {
    not: CommonAssertions<Function> & FunctionAssertions;
  };
};
/* eslint-enable @typescript-eslint/ban-types */

export type {
  AssertThatForFunction
};
