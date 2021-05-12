import { formatNestedArray } from '../utils/formatNestedArray';
import { maximumFormattingDepth } from '../../constants/maximumFormattingDepth';
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

  if (depth >= maximumFormattingDepth) {
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
