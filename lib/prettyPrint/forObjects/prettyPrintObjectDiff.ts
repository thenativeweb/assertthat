import chalk from 'chalk';
import { diffString } from '../utils/diffString';
import { ObjectDiff } from '../../diffs/forObjects/ObjectDiff';
import { prettyPrint } from '../typeAware/prettyPrint';
import { prettyPrintDiff } from '../typeAware/prettyPrintDiff';

const prettyPrintObjectDiff = function (diff: ObjectDiff, depth = 0): string {
  const content = [];

  for (const [ key, value ] of Object.entries(diff.equal)) {
    const prettyValueLines = `${key}: ${prettyPrint(value, depth + 1)}`.
      split('\n').
      map(
        (line): string => `  ${line}`
      );

    if (prettyValueLines.length > 0) {
      prettyValueLines[prettyValueLines.length - 1] += ',';
    }

    content.push(...prettyValueLines);
  }
  for (const [ key, value ] of Object.entries(diff.changes)) {
    const prettyValueLines = `${key}: ${prettyPrintDiff(value, depth + 1)}`.
      split('\n').
      map(
        (line, index): string => index === 0 ? `* ${line}` : `  ${line}`
      );

    if (prettyValueLines.length > 0) {
      prettyValueLines[prettyValueLines.length - 1] += ',';
    }

    content.push(...prettyValueLines);
  }
  for (const [ key, value ] of Object.entries(diff.omissions)) {
    const prettyValueLines = `${key}: ${prettyPrint(value, depth + 1)}`.
      split('\n').
      map(
        (line, index): string => index === 0 ? chalk.green(`+ ${line}`) : `  ${chalk.green(line)}`
      );

    if (prettyValueLines.length > 0) {
      prettyValueLines[prettyValueLines.length - 1] += ',';
    }

    content.push(...prettyValueLines);
  }
  for (const [ key, value ] of Object.entries(diff.additions)) {
    const prettyValueLines = `${key}: ${prettyPrint(value, depth + 1)}`.
      split('\n').
      map(
        (line, index): string => index === 0 ? chalk.red(`- ${line}`) : `  ${chalk.red(line)}`
      );

    if (prettyValueLines.length > 0) {
      prettyValueLines[prettyValueLines.length - 1] += ',';
    }

    content.push(...prettyValueLines);
  }

  if (content.length === 0) {
    return '{}';
  }

  content[content.length - 1] = content[content.length - 1].slice(0, -1);

  if (depth >= 2) {
    return `{ ${content.join(' ')} }`;
  }

  return diffString`
    {
      ${content}
    }
  `;
};

export {
  prettyPrintObjectDiff
};
