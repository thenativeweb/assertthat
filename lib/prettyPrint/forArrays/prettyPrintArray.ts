import { formatNestedArray } from '../utils/formatNestedArray';
import { maximumDepth } from '../../constants/maximumDepth';
import { prepareSimple } from '../utils/prepareSimple';
import { prettyPrint } from '../typeAware/prettyPrint';

const prettyPrintArray = function (array: any[], depth = 0): string {
  if (array.length === 0) {
    return '[]';
  }

  const content: string[][] = [];

  for (const item of array) {
    content.push(prepareSimple(
      prettyPrint(item, depth + 1),
      depth
    ));
  }

  if (depth >= maximumDepth) {
    return formatNestedArray`[ ${content} ]`;
  }

  return formatNestedArray`
    [
    ${content}
    ]
  `;
};

export {
  prettyPrintArray
};
