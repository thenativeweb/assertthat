import { formatNestedArray } from '../utils/formatNestedArray';
import { MapDiff } from '../../diffs/forMaps/MapDiff';
import { maximumDepth } from '../../constants/maximumDepth';
import { prepareAddition } from '../utils/prepareAddition';
import { prepareChange } from '../utils/prepareChange';
import { prepareOmission } from '../utils/prepareOmission';
import { prepareSimple } from '../utils/prepareSimple';
import { prettyPrint } from '../typeAware/prettyPrint';
import { prettyPrintDiff } from '../typeAware/prettyPrintDiff';
import { propagateDiffSymbols } from '../utils/propagateDiffSymbols';

const prettyPrintMapDiff = function (diff: MapDiff, depth = 0): string {
  const content: string[][] = [];

  for (const [ key, value ] of diff.equal.entries()) {
    content.push(prepareSimple(
      `${prettyPrint(key, Number.POSITIVE_INFINITY)}: ${prettyPrint(value, depth + 1)}`,
      depth
    ));
  }
  for (const [ key, value ] of diff.changes.entries()) {
    content.push(prepareChange(
      `${prettyPrint(key, Number.POSITIVE_INFINITY)}: ${prettyPrintDiff(value, depth + 1)}`,
      depth
    ));
  }
  for (const [ key, value ] of diff.omissions.entries()) {
    content.push(prepareOmission(
      `${prettyPrint(key, Number.POSITIVE_INFINITY)}: ${prettyPrint(value, depth + 1)}`,
      depth
    ));
  }
  for (const [ key, value ] of diff.additions.entries()) {
    content.push(prepareAddition(
      `${prettyPrint(key, Number.POSITIVE_INFINITY)}: ${prettyPrint(value, depth + 1)}`,
      depth
    ));
  }

  if (content.length === 0) {
    return 'Map({})';
  }

  if (depth >= maximumDepth) {
    return formatNestedArray`Map({ ${content} })`;
  }

  return propagateDiffSymbols(formatNestedArray`
    Map({
    ${content}
    })
  `);
};

export {
  prettyPrintMapDiff
};
