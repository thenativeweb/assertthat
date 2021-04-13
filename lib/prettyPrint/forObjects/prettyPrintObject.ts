import { prettyPrint } from '../typeAware/prettyPrint';
import { source } from 'common-tags';

const prettyPrintObject = function (value: object, depth = 0): string {
  if (Object.keys(value).length === 0) {
    return '{}';
  }

  const content = Object.entries(value).flatMap(
    ([ key, iValue ], index, arr): string[] => {
      const prettyValue = prettyPrint(iValue, depth + 1).split('\n');

      if (prettyValue.length > 0) {
        prettyValue[0] = `${key}: ${prettyValue[0]}`;

        if (index < arr.length - 1) {
          prettyValue[prettyValue.length - 1] += ',';
        }
      }

      return prettyValue;
    }
  );

  if (depth >= 2) {
    return `{ ${content.join(' ')} }`;
  }

  return source`
    {
      ${content}
    }
  `;
};

export {
  prettyPrintObject
};
