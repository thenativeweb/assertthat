import { CombinedAssertions } from './assertions/combined/CombinedAssertions';
import {
  getCombinedAssertions,
  getCombinedAssertionsForEach,
  getNegatedCombinedAssertions, getNegatedCombinedAssertionsForEach
} from './assertions/combined/assertions';

type AssertThat = <TValue>(value: TValue) => ({
  is: CombinedAssertions<TValue> & {
    not: CombinedAssertions<TValue>;
  };
  each: TValue extends Set<infer TContent> ? {
    is: CombinedAssertions<TContent> & {
      not: CombinedAssertions<TContent>;
    };
  } : TValue extends Map<any, infer TContent> ? {
    is: CombinedAssertions<TContent> & {
      not: CombinedAssertions<TContent>;
    };
  } : TValue extends (infer TContent)[] ? {
    is: CombinedAssertions<TContent> & {
      not: CombinedAssertions<TContent>;
    };
  } : never;
});

// eslint-disable-next-line consistent-this
const that: AssertThat = (actual: any): any => ({
  is: {
    ...getCombinedAssertions(actual),
    not: {
      ...getNegatedCombinedAssertions(actual)
    }
  },
  each: {
    is: {
      ...getCombinedAssertionsForEach(actual),

      not: {
        ...getNegatedCombinedAssertionsForEach(actual)
      }
    }
  }
});

const assert = {
  that
};

export {
  assert
};
