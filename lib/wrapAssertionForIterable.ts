import { AssertionFailed } from './errors';
import { prettyPrint } from './prettyPrint/typeAware/prettyPrint';
import { typeOf } from 'typedescriptor';
import { error, Result, value } from 'defekt';

type Assertion<TValue, TParams extends any[]> = (actual: TValue, ...rest: TParams) => Result<undefined, AssertionFailed>;

const wrapAssertionForIterable = function <TValue, TParams extends any[]>(
  assertion: Assertion<TValue, TParams>
): Assertion<TValue[] | Set<TValue> | Map<any, TValue>, TParams> {
  return (actual: TValue[] | Set<TValue> | Map<any, TValue>, ...params: TParams): Result<undefined, AssertionFailed> => {
    for (const [ index, item ] of actual.entries()) {
      const result = assertion(item, ...params);

      if (result.hasError()) {
        return error(
          new AssertionFailed({
            message: `Assertion failed for item ${prettyPrint(index)} of the ${typeOf(actual)}.\n${result.error.message}`,
            actual: result.error.data.actual,
            expected: result.error.data.expected,
            diff: result.error.data.diff
          })
        );
      }
    }

    return value();
  };
};

type AsyncAssertion<TValue, TParams extends any[]> = (actual: TValue, ...rest: TParams) => Promise<Result<undefined, AssertionFailed>>;

const wrapAsyncAssertionForIterable = function <TValue, TParams extends any[]>(
  assertion: AsyncAssertion<TValue, TParams>
): AsyncAssertion<TValue[] | Set<TValue> | Map<any, TValue>, TParams> {
  return async (actual: TValue[] | Set<TValue> | Map<any, TValue>, ...params: TParams): Promise<Result<undefined, AssertionFailed>> => {
    for (const [ index, item ] of actual.entries()) {
      const result = await assertion(item, ...params);

      if (result.hasError()) {
        return error(
          new AssertionFailed({
            message: `Assertion failed for item ${prettyPrint(index)} of the ${typeOf(actual)}.\n${result.error.message}`,
            actual: result.error.data.actual,
            expected: result.error.data.expected,
            diff: result.error.data.diff
          })
        );
      }
    }

    return value();
  };
};

export {
  wrapAssertionForIterable,
  wrapAsyncAssertionForIterable
};
