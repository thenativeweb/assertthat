import { formatNestedArray } from '../utils/formatNestedArray';
import { maximumFormattingDepth } from '../../constants/maximumFormattingDepth';
import { prepareSimple } from '../utils/prepareSimple';
import { prettyPrint } from '../typeAware/prettyPrint';

const prettyPrintObject = function (object: object, depth = 0): string {
  if (Object.keys(object).length === 0) {
    return '{}';
  }

  const content: string[][] = [];

  for (const [ key, value ] of Object.entries(object)) {
    content.push(prepareSimple(
      `${key}: ${prettyPrint(value, depth + 1)}`,
      depth
    ));
  }

  if (depth >= maximumFormattingDepth) {
    return formatNestedArray`{ ${content} }`;
  }

  return formatNestedArray`
    {
    ${content}
    }
  `;
};

export {
  prettyPrintObject
};
