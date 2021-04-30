import { formatNestedArray } from '../utils/formatNestedArray';
import { maximumDepth } from '../../constants/maximumDepth';
import { ObjectDiff } from '../../diffs/forObjects/ObjectDiff';
import { prepareAddition } from '../utils/prepareAddition';
import { prepareChange } from '../utils/prepareChange';
import { prepareOmission } from '../utils/prepareOmission';
import { prepareSimple } from '../utils/prepareSimple';
import { prettyPrint } from '../typeAware/prettyPrint';
import { prettyPrintDiff } from '../typeAware/prettyPrintDiff';
import { propagateDiffSymbols } from '../utils/propagateDiffSymbols';

const prettyPrintObjectDiff = function (diff: ObjectDiff, depth = 0): string {
  const content = [];

  for (const [ key, value ] of Object.entries(diff.equal)) {
    content.push(prepareSimple(
      `${key}: ${prettyPrint(value, depth + 1)}`,
      depth
    ));
  }
  for (const [ key, value ] of Object.entries(diff.changes)) {
    content.push(prepareChange(
      `${key}: ${prettyPrintDiff(value, depth + 1)}`,
      depth
    ));
  }
  for (const [ key, value ] of Object.entries(diff.omissions)) {
    content.push(prepareOmission(
      `${key}: ${prettyPrint(value, depth + 1)}`,
      depth
    ));
  }
  for (const [ key, value ] of Object.entries(diff.additions)) {
    content.push(prepareAddition(
      `${key}: ${prettyPrint(value, depth + 1)}`,
      depth
    ));
  }

  if (content.length === 0) {
    return '{}';
  }

  if (depth >= maximumDepth) {
    return formatNestedArray`{ ${content} }`;
  }

  return propagateDiffSymbols(formatNestedArray`
    {
    ${content}
    }
  `);
};

export {
  prettyPrintObjectDiff
};
