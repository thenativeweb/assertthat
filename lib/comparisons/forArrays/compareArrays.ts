import { compare } from '../typeAware/compare';
import { isUndefined } from 'typedescriptor';
import { maximumDiffTableSize } from '../../constants/maximumDiffTableSize';
import { simplifyDiff } from '../../diffs/forArrays/simplifyDiff';
import { size } from '../../size/typeAware/size';
import { AdditionDiffSegment, OmissionDiffSegment } from '../../diffs/forArrays/ArrayDiffSegment';
import { arrayDiff, ArrayDiff } from '../../diffs/forArrays/ArrayDiff';
import { EqualDiff, equalDiff, isEqualDiff } from '../../diffs/EqualDiff';

const compareArraysLinearly = function <TContent>(
  actual: TContent[],
  expected: TContent[]
): ArrayDiff<TContent> | EqualDiff {
  const diff = arrayDiff<TContent>({
    segments: [],
    cost: 0
  });

  for (let i = 0; i < Math.max(actual.length, expected.length); i++) {
    const actualItem = actual[i];
    const expectedItem = expected[i];

    if (isUndefined(actualItem)) {
      diff.segments.push({
        omission: [ expectedItem ],
        cost: size(expectedItem)
      });
      continue;
    }
    if (isUndefined(expectedItem)) {
      diff.segments.push({
        addition: [ actualItem ],
        cost: size(actualItem)
      });
      continue;
    }

    const subDiff = compare(actualItem, expectedItem);

    if (isEqualDiff(subDiff)) {
      diff.segments.push({
        equal: [ actualItem ],
        cost: 0
      });
    } else {
      diff.segments.push({
        change: [ subDiff ],
        cost: subDiff.cost
      });
    }
  }

  if (diff.cost === 0) {
    return equalDiff({ value: actual });
  }

  return simplifyDiff(diff);
};

const compareArraysBestMatch = function <TContent>(
  actual: TContent[],
  expected: TContent[]
): ArrayDiff<TContent> | EqualDiff {
  const results: Map<string, ArrayDiff<TContent>> = new Map();

  results.set('-1|-1', arrayDiff({
    segments: [],
    cost: 0
  }));

  for (let indexActual = 0; indexActual < actual.length; indexActual++) {
    const segment: AdditionDiffSegment<TContent> = {
      addition: [],
      cost: 0
    };

    for (let index = 0; index <= indexActual; index++) {
      segment.addition.push(actual[index]);
      segment.cost += size(actual[index]);
    }

    results.set(`${indexActual}|-1`, arrayDiff({
      segments: [ segment ],
      cost: segment.cost
    }));
  }

  for (let indexExpected = 0; indexExpected < expected.length; indexExpected++) {
    const segment: OmissionDiffSegment<TContent> = {
      omission: [],
      cost: 0
    };

    for (let index = 0; index <= indexExpected; index++) {
      segment.omission.push(expected[index]);
      segment.cost += size(expected[index]);
    }

    results.set(`-1|${indexExpected}`, arrayDiff({
      segments: [ segment ],
      cost: segment.cost
    }));
  }

  for (const [ indexActual, elementActual ] of actual.entries()) {
    for (const [ indexExpected, elementExpected ] of expected.entries()) {
      const maybeEqualPreviousDiff = results.get(`${indexActual - 1}|${indexExpected - 1}`)!;
      const maybeEqualCurrentDiff = compare(elementActual, elementExpected);
      const maybeEqualCost = maybeEqualPreviousDiff.cost + maybeEqualCurrentDiff.cost;

      const omissionPreviousDiff = results.get(`${indexActual}|${indexExpected - 1}`)!;
      const omissionCost = omissionPreviousDiff.cost + size(elementExpected);

      const additionPreviousDiff = results.get(`${indexActual - 1}|${indexExpected}`)!;
      const additionCost = additionPreviousDiff.cost + size(elementActual);

      if (maybeEqualCost <= omissionCost && maybeEqualCost <= additionCost) {
        if (maybeEqualCurrentDiff.cost === 0) {
          results.set(`${indexActual}|${indexExpected}`, arrayDiff({
            segments: [
              ...maybeEqualPreviousDiff.segments,
              {
                equal: [ elementActual ],
                cost: 0
              }
            ],
            cost: maybeEqualCost
          }));
        } else {
          results.set(`${indexActual}|${indexExpected}`, arrayDiff({
            segments: [
              ...maybeEqualPreviousDiff.segments,
              {
                change: [ maybeEqualCurrentDiff ],
                cost: maybeEqualCurrentDiff.cost
              }
            ],
            cost: maybeEqualCost
          }));
        }
      } else if (omissionCost <= additionCost) {
        results.set(`${indexActual}|${indexExpected}`, arrayDiff({
          segments: [
            ...omissionPreviousDiff.segments,
            {
              omission: [ elementExpected ],
              cost: size(elementExpected)
            }
          ],
          cost: omissionCost
        }));
      } else {
        results.set(`${indexActual}|${indexExpected}`, arrayDiff({
          segments: [
            ...additionPreviousDiff.segments,
            {
              addition: [ elementActual ],
              cost: size(elementActual)
            }
          ],
          cost: additionCost
        }));
      }

      results.delete(`${indexActual - 1}|${indexExpected - 1}`);
    }
  }

  const diff = results.get(`${actual.length - 1}|${expected.length - 1}`)!;

  if (diff.cost === 0) {
    return equalDiff({ value: actual });
  }

  return simplifyDiff(results.get(`${actual.length - 1}|${expected.length - 1}`)!);
};

const compareArrays = function <TContent>(
  actual: TContent[],
  expected: TContent[]
): ArrayDiff<TContent> | EqualDiff {
  if (actual.length * expected.length > maximumDiffTableSize) {
    return compareArraysLinearly(actual, expected);
  }

  return compareArraysBestMatch(actual, expected);
};

export {
  compareArrays
};
