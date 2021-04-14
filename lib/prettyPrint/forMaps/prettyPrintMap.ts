import { prettyPrint } from '../typeAware/prettyPrint';
import { source } from 'common-tags';

const prettyPrintMap = function (value: Map<any, any>, depth = 0): string {
  if (value.size === 0) {
    return 'Map({})';
  }

  const content = [ ...value.entries() ].flatMap(
    ([ key, iValue ], index): string[] => {
      const prettyValueLines = prettyPrint(iValue, depth + 1).split('\n');

      if (prettyValueLines.length > 0) {
        prettyValueLines[0] = `${prettyPrint(key, Number.POSITIVE_INFINITY)}: ${prettyValueLines[0]}`;

        if (index < value.size - 1) {
          prettyValueLines[prettyValueLines.length - 1] += ',';
        }
      }

      return prettyValueLines;
    }
  );

  if (depth >= 2) {
    return `Map({ ${content.join(' ')} })`;
  }

  return source`
    Map({
      ${content}
    })
  `;
};

export {
  prettyPrintMap
};
