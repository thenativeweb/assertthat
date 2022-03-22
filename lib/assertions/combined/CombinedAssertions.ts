import { ArrayAssertions } from '../forArrays/ArrayAssertions';
import { CommonAssertions } from '../forAny/CommonAssertions';
import { FunctionAssertions } from '../forFunctions/FunctionAssertions';
import { MapAssertions } from '../forMaps/MapAssertions';
import { NumberAssertions } from '../forNumbers/NumberAssertions';
import { ObjectAssertions } from '../forObjects/ObjectAssertions';
import { Result } from 'defekt';
import { ResultAssertions } from '../forResults/ResultAssertions';
import { SetAssertions } from '../forSets/SetAssertions';
import { StringAssertions } from '../forStrings/StringAssertions';

type CombinedAssertions<TValue> =
    CommonAssertions<TValue> &
    (TValue extends Set<infer TContent> ? SetAssertions<TContent> :
      TValue extends Map<infer TKey, infer TContent> ? MapAssertions<TKey, TContent> :
        TValue extends (infer TContent)[] ? ArrayAssertions<TContent> :
          TValue extends Result<any, Error> ? ResultAssertions :
            TValue extends number ? NumberAssertions :
              TValue extends string ? StringAssertions :
                TValue extends (...args: any[]) => any ? FunctionAssertions :
                  TValue extends object ? ObjectAssertions :
                    CommonAssertions<TValue>);

export type {
  CombinedAssertions
};
