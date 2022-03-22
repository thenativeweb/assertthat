import { CombinedAssertions } from './assertions/combined/CombinedAssertions';
import {
  getCombinedAssertions,
  getCombinedAssertionsForEach,
  getNegatedCombinedAssertions, getNegatedCombinedAssertionsForEach
} from './assertions/combined/assertions';

type AssertThat = (<TValue>(value: TValue) => ({
  is: CombinedAssertions<TValue> & {
    not: CombinedAssertions<TValue>;
  };
})) & {
  eachElementOf: <TValue>(value: TValue) => TValue extends Set<infer TContent> ? {
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
};

// eslint-disable-next-line consistent-this
const that: AssertThat = function (actual: any): any {
  return {
    is: {
      ...getCombinedAssertions(actual),
      not: {
        ...getNegatedCombinedAssertions(actual)
      }
    }
  };
};

that.eachElementOf = (actualCollection: any): any => ({
  is: {
    ...getCombinedAssertionsForEach(actualCollection),

    not: {
      ...getNegatedCombinedAssertionsForEach(actualCollection)
    }
  }
});

const assert = {
  that
};

export {
  assert
};
