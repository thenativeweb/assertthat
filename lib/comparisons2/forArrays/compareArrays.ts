import { arrayMissingElementCost } from '../../constants/costs';
import { compare } from '../typeAware/compare';
import { simplifyDiff } from '../../diffs/forArrays/simplifyDiff';
import { AdditionDiffSegment, OmissionDiffSegment } from '../../diffs/forArrays/ArrayDiffSegment';
import { arrayDiff, ArrayDiff } from '../../diffs/forArrays/ArrayDiff';

const compareArrays = function <TContent>(
  actual: TContent[],
  expected: TContent[]
): ArrayDiff<TContent> {
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
      segment.cost += arrayMissingElementCost;
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
      segment.cost += arrayMissingElementCost;
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
      const omissionCost = omissionPreviousDiff.cost + arrayMissingElementCost;

      const additionPreviousDiff = results.get(`${indexActual - 1}|${indexExpected}`)!;
      const additionCost = additionPreviousDiff.cost + arrayMissingElementCost;

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
              cost: arrayMissingElementCost
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
              cost: arrayMissingElementCost
            }
          ],
          cost: additionCost
        }));
      }
    }
  }

  return simplifyDiff(results.get(`${actual.length - 1}|${expected.length - 1}`)!);
};

export {
  compareArrays
};
