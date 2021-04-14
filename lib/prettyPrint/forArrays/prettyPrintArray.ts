import { prettyPrint } from '../typeAware/prettyPrint';
import { source } from 'common-tags';

const prettyPrintArray = function (value: any[], depth = 0): string {
  if (value.length === 0) {
    return '[]';
  }

  const content = value.flatMap(
    (iValue, index): string[] => {
      const prettyValue = prettyPrint(iValue, depth + 1).split('\n');

      if (index < value.length - 1 && prettyValue.length > 0) {
        prettyValue[prettyValue.length - 1] += ',';
      }

      return prettyValue;
    }
  );

  if (depth >= 2) {
    return `[ ${content.join(' ')} ]`;
  }

  return source`
    [
      ${content}
    ]
  `;
};

export {
  prettyPrintArray
};
