import { formatNestedArray } from '../utils/formatNestedArray';
import { maximumFormattingDepth } from '../../constants/maximumFormattingDepth';
import { prepareSimple } from '../utils/prepareSimple';
import { prettyPrint } from '../typeAware/prettyPrint';

const prettyPrintMap = function (map: Map<any, any>, depth = 0): string {
  if (map.size === 0) {
    return 'Map({})';
  }

  const content: string[][] = [];

  for (const [ key, value ] of map) {
    content.push(prepareSimple(
      `${prettyPrint(key, Number.POSITIVE_INFINITY)}: ${prettyPrint(value, depth + 1)}`,
      depth
    ));
  }

  if (depth >= maximumFormattingDepth) {
    return formatNestedArray`Map({ ${content} })`;
  }

  return formatNestedArray`
    Map({
    ${content}
    })
  `;
};

export {
  prettyPrintMap
};
