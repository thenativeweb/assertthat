import { CommonAssertions } from '../forAny/CommonAssertions';
import { MapAssertions } from './MapAssertions';

type AssertThatForMap = <TKey, TValue>(actual: Map<TKey, TValue>) => {
  is: CommonAssertions<Map<TKey, TValue>> & MapAssertions<TKey, TValue> & {
    not: CommonAssertions<Map<TKey, TValue>> & MapAssertions<TKey, TValue>;
  };
};

export type {
  AssertThatForMap
};
