import { CommonAssertions } from '../forAny/CommonAssertions';
import { Result } from 'defekt';
import { ResultAssertions } from './ResultAssertions';

type AssertThatForResult = <TValue, TError extends Error>(actual: Result<TValue, TError>) => {
  is: CommonAssertions<Result<TValue, TError>> & ResultAssertions & {
    not: CommonAssertions<Result<TValue, TError>> & ResultAssertions;
  };
};

export type {
  AssertThatForResult
};
