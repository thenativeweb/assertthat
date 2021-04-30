import { formatNestedArray } from '../utils/formatNestedArray';
import { maximumDepth } from '../../constants/maximumDepth';
import { prepareAddition } from '../utils/prepareAddition';
import { prepareOmission } from '../utils/prepareOmission';
import { prepareSimple } from '../utils/prepareSimple';
import { prettyPrint } from '../typeAware/prettyPrint';
import { propagateDiffSymbols } from '../utils/propagateDiffSymbols';
import { SetDiff } from '../../diffs/forSets/SetDiff';

const prettyPrintSetDiff = function (diff: SetDiff, depth = 0): string {
  const content = [];

  for (const value of diff.equal) {
    content.push(prepareSimple(
      prettyPrint(value, depth + 1),
      depth
    ));
  }
  for (const value of diff.omissions) {
    content.push(prepareOmission(
      prettyPrint(value, depth + 1),
      depth
    ));
  }
  for (const value of diff.additions) {
    content.push(prepareAddition(
      prettyPrint(value, depth + 1),
      depth
    ));
  }

  if (content.length === 0) {
    return `Set([])`;
  }

  if (depth >= maximumDepth) {
    return formatNestedArray`Set([ ${content} ])`;
  }

  return propagateDiffSymbols(formatNestedArray`
    Set([
    ${content}
    ])
  `);
};

export {
  prettyPrintSetDiff
};
