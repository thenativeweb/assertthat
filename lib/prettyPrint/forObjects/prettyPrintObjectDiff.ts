import chalk from 'chalk';
import { ObjectDiff } from '../../diffs/forObjects/ObjectDiff';
import { prettyPrint } from '../typeAware/prettyPrint';
import { prettyPrintDiff } from '../typeAware/prettyPrintDiff';
import { source } from 'common-tags';

const prettyPrintObjectDiff = function (diff: ObjectDiff, depth = 0): string {
  const content = [];

  for (const [ key, value ] of Object.entries(diff.equal)) {
    const prettyValueLines = `${key}: ${prettyPrint(value, depth + 1)}`.split('\n');

    if (prettyValueLines.length > 0) {
      prettyValueLines[prettyValueLines.length - 1] += ',';
    }

    content.push(...prettyValueLines);
  }
  for (const [ key, value ] of Object.entries(diff.changes)) {
    const prettyValueLines = `${key}: ${prettyPrintDiff(value, depth + 1)}`.split('\n');

    if (prettyValueLines.length > 0) {
      prettyValueLines[prettyValueLines.length - 1] += ',';
    }

    content.push(...prettyValueLines);
  }
  for (const [ key, value ] of Object.entries(diff.omissions)) {
    const prettyValueLines = chalk.red(`${key}: ${prettyPrint(value, depth + 1)}`).split('\n');

    if (prettyValueLines.length > 0) {
      prettyValueLines[prettyValueLines.length - 1] += ',';
    }

    content.push(...prettyValueLines);
  }
  for (const [ key, value ] of Object.entries(diff.additions)) {
    const prettyValueLines = chalk.green(`${key}: ${prettyPrint(value, depth + 1)}`).split('\n');

    if (prettyValueLines.length > 0) {
      prettyValueLines[prettyValueLines.length - 1] += ',';
    }

    content.push(...prettyValueLines);
  }

  content[content.length - 1] = content[content.length - 1].slice(0, -1);

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
  prettyPrintObjectDiff
};
